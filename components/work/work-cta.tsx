"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export function WorkCTA() {
  return (
    <section className="py-16 md:py-24 px-4">
      <FadeIn>
        <div className="max-w-4xl mx-auto">
          {/* CTA Card with gradient border effect */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Subtle gradient glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-purple/5" />

            {/* Card content */}
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl py-12 md:py-16 px-6 md:px-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Have a challenging project?
              </h2>

              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-8">
                I'm always interested in hearing about complex systems, scaling bottlenecks, and innovative platforms.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-background font-medium rounded-full hover:bg-cyan/90 transition-colors"
                >
                  Get in Touch
                  <Mail className="w-4 h-4" />
                </Link>

                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-foreground font-medium rounded-full border border-border hover:bg-muted/50 transition-colors"
                >
                  View Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
