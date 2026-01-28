import nodemailer from "nodemailer"

interface SendEmailParams {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailParams) {
  // Validate environment variables
  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    const error = "SMTP credentials are not configured"
    console.error(error, {
      hasUser: !!process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASSWORD,
    })
    throw new Error(error)
  }

  console.log("Attempting to send email to:", to)

  // Create transporter using Google SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  // Verify connection
  try {
    await transporter.verify()
    console.log("SMTP connection verified successfully")
  } catch (verifyError) {
    console.error("SMTP verification failed:", verifyError)
    throw new Error(`SMTP connection failed: ${verifyError}`)
  }

  // Send email
  try {
    const info = await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || "Portfolio Contact"}" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      replyTo: replyTo || process.env.SMTP_USER,
    })

    console.log("Email sent successfully:", info.messageId)
    return info
  } catch (sendError) {
    console.error("Failed to send email:", sendError)
    throw sendError
  }
}
