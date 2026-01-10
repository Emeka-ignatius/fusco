"use client"

import Link from "next/link"
import { ArrowRight, Code, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Technologies" },
  { value: "100%", label: "Client Satisfaction" },
]

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Layers,
    title: "Full Stack",
    description: "From database design to pixel-perfect interfaces, I do it all.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Building fast, optimized applications that users love.",
  },
]

export function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <FadeIn>
              <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">About Me</span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Crafting Digital Experiences with Purpose
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
                With over 5 years of experience in software engineering, I specialize in building robust, scalable
                applications that solve real-world problems. My journey has taken me through startups, agencies, and
                enterprise projects, giving me a unique perspective on what makes software truly exceptional.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Button asChild variant="outline" className="group border-primary/30 hover:bg-primary/10 bg-transparent">
                <Link href="/about">
                  Read My Full Story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </FadeIn>
          </div>

          {/* Right Column - Stats & Highlights */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <StaggerChildren className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem
                  key={stat.label}
                  className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Highlights */}
            <StaggerChildren className="space-y-4" staggerDelay={0.1}>
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <StaggerItem
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  )
}
