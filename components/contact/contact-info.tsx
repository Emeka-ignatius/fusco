"use client"

import { Mail, MapPin, Clock, Github, Linkedin, Twitter, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@fusco.dev",
    href: "mailto:hello@fusco.dev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Usually within 24 hours",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <FadeIn delay={0.1}>
        <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">Contact Info</h2>

          <div className="space-y-6">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <div key={method.label} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{method.value}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </FadeIn>

      {/* Social Links */}
      <FadeIn delay={0.2}>
        <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Follow Me</h3>
          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </FadeIn>

      {/* Schedule Call CTA */}
      <FadeIn delay={0.3}>
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/20 text-primary">
              <Calendar className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Prefer a call?</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Schedule a 30-minute call to discuss your project in detail.
          </p>
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Schedule a Call
            </a>
          </Button>
        </div>
      </FadeIn>
    </div>
  )
}
