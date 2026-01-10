import { neon } from "@neondatabase/serverless"

// Create a singleton SQL client
export const sql = neon(process.env.DATABASE_URL!)

// Type definitions for contact submissions
export interface ContactSubmission {
  id: number
  name: string
  email: string
  subject: string
  message: string
  created_at: Date
  is_read: boolean
}
