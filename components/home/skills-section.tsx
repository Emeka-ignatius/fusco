"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Cpu, Shield, Layers, FileCode } from "lucide-react"

const principles = [
  {
    icon: Cpu,
    title: "System-first thinking",
    description:
      "Optimizing for the whole ecosystem rather than isolated features to ensure seamless scalability and performance.",
    number: "01",
    category: "ARCHITECTURE",
  },
  {
    icon: Shield,
    title: "Reliability & observability",
    description:
      "Proactive monitoring and robust error handling to guarantee high availability and rapid issue resolution.",
    number: "02",
    category: "OPERATIONS",
  },
  {
    icon: Layers,
    title: "Full-stack Integrity",
    description: "Elegant user interfaces driven by high-performance APIs and meticulously structured data layers.",
    number: "03",
    category: "EXECUTION",
  },
  {
    icon: FileCode,
    title: "Maintainability",
    description: "Writing self-documenting code and comprehensive technical guides to empower teams and longevity.",
    number: "04",
    category: "CONTINUITY",
  },
]

const techStack = ["POSTGRESQL", "KUBERNETES", "TYPESCRIPT", "GRAPHQL"]

export function SkillsSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                Core Methodology
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Engineering Principles</h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Building resilient digital infrastructure requires more than just writing code. It's about a rigorous
              commitment to scalability, clarity, and performance.
            </p>
          </div>
        </FadeIn>

        {/* Principle Cards */}
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8" staggerDelay={0.1}>
          {principles.map((principle) => {
            const Icon = principle.icon
            return (
              <StaggerItem key={principle.title}>
                <div className="group relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6 w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">{principle.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-6">
                    {principle.description}
                  </p>

                  {/* Number & Category */}
                  <div className="text-xs font-mono text-primary/70">
                    {principle.number} // {principle.category}
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>

        {/* Footer Bar */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border/30">
            {/* Version Label */}
            <span className="text-xs font-mono text-muted-foreground/60 mb-4 md:mb-0">
              // PLATFORM_ENGINEERING_v4.2.0
            </span>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium tracking-wider text-muted-foreground/70 hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
