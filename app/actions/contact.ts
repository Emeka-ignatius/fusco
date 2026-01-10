"use server"

import { z } from "zod"
import { sql } from "@/lib/db"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
})

type ContactFormInput = z.infer<typeof contactSchema>

interface ActionResponse {
  success: boolean
  message: string
  data?: unknown
  errors?: z.ZodError["errors"]
}

export async function submitContactForm(input: ContactFormInput): Promise<ActionResponse> {
  // Validate input
  const validationResult = contactSchema.safeParse(input)

  if (!validationResult.success) {
    return {
      success: false,
      message: "Please check the form for errors",
      errors: validationResult.error.errors,
    }
  }

  const { name, email, subject, message } = validationResult.data

  try {
    // Insert into database
    await sql`
      INSERT INTO contact_submissions (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject}, ${message})
    `

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Failed to submit contact form:", error)

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
