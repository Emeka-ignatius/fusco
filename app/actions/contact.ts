"use server"

import { z } from "zod"
import { sql } from "@/lib/db"
import { sendEmail } from "@/lib/email"

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

    // Send email notification
    try {
      // Escape HTML to prevent XSS
      const escapeHtml = (text: string) => {
        return text
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;")
      }

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message).replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `

      const recipientEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER
      
      if (!recipientEmail) {
        console.error("CONTACT_EMAIL or SMTP_USER not set")
      } else {
        await sendEmail({
          to: recipientEmail,
          subject: `Portfolio Contact: ${subject}`,
          html: emailHtml,
          replyTo: email,
        })
        console.log("Email sent successfully to:", recipientEmail)
      }
    } catch (emailError) {
      // Log email error but don't fail the form submission
      console.error("Failed to send email notification:", emailError)
      // You might want to log this to a monitoring service
    }

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
