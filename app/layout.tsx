import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Ignatius Emeka Joshua | Software Engineer",
    template: "%s | FUSCO",
  },
  description:
    "Portfolio of Ignatius Emeka Joshua (FUSCO) - A Software Engineer with 5+ years of experience building digital excellence.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Ignatius Emeka Joshua" }],
  creator: "FUSCO",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FUSCO Portfolio",
    title: "Ignatius Emeka Joshua | Software Engineer",
    description: "5+ years of building digital excellence",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignatius Emeka Joshua | Software Engineer",
    description: "5+ years of building digital excellence",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--card-bg)",
              border: "1px solid var(--muted-slate)",
              color: "var(--off-white)",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
