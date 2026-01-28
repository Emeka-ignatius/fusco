"use client"

import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ScheduleCallButtonProps {
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  fullWidth?: boolean
  showIcon?: boolean
}

export function ScheduleCallButton({
  variant = "default",
  size = "default",
  className = "",
  fullWidth = false,
  showIcon = true,
}: ScheduleCallButtonProps) {
  // Get Calendly URL from environment variable (must be prefixed with NEXT_PUBLIC_ for client-side access)
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL

  const handleScheduleClick = () => {
    if (calendlyUrl) {
      // Open Calendly in a popup window
      window.open(
        calendlyUrl,
        "calendly",
        "width=700,height=800,scrollbars=yes,resizable=yes"
      )
    } else {
      // Fallback: show alert or console warning
      console.warn(
        "Calendly URL not configured. Please set NEXT_PUBLIC_CALENDLY_URL in your .env file"
      )
      alert(
        "Scheduling is not configured. Please contact via email or the contact form."
      )
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
      onClick={handleScheduleClick}
      disabled={!calendlyUrl}
      title={calendlyUrl ? "Schedule a call" : "Calendly URL not configured"}
    >
      {showIcon && <Calendar className="mr-2 h-4 w-4" />}
      Schedule a Call
    </Button>
  )
}
