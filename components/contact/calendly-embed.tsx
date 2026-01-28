"use client"

import { useEffect } from "react"

interface CalendlyEmbedProps {
  url: string
  height?: string
  className?: string
}

export function CalendlyEmbed({ url, height = "700px", className = "" }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      )
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className={`calendly-inline-widget ${className}`} style={{ minHeight: height }}>
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minHeight: height, width: "100%" }}
      />
    </div>
  )
}
