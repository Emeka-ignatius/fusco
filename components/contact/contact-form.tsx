"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FadeIn } from "@/components/animations/fade-in"
import { submitContactForm } from "@/app/actions/contact"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  honeypot: z.string().max(0), // Spam prevention
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot
    if (data.honeypot) {
      return
    }

    setIsSubmitting(true)

    const result = await submitContactForm({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    })

    setIsSubmitting(false)

    if (result.success) {
      toast.success(result.message)
      reset()
    } else {
      toast.error(result.message)
    }
  }

  return (
    <FadeIn>
      <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot field - hidden from users */}
          <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Your name"
              className={`bg-background border-border focus:border-primary ${errors.name ? "border-destructive" : ""}`}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="your.email@example.com"
              className={`bg-background border-border focus:border-primary ${errors.email ? "border-destructive" : ""}`}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-foreground">
              Subject <span className="text-destructive">*</span>
            </Label>
            <Input
              id="subject"
              {...register("subject")}
              placeholder="What's this about?"
              className={`bg-background border-border focus:border-primary ${errors.subject ? "border-destructive" : ""}`}
              aria-invalid={errors.subject ? "true" : "false"}
            />
            {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Tell me about your project or just say hello..."
              rows={6}
              className={`bg-background border-border focus:border-primary resize-none ${errors.message ? "border-destructive" : ""}`}
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </FadeIn>
  )
}
