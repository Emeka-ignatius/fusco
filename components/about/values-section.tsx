"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { SectionHeading } from "@/components/ui/section-heading"
import { Lightbulb, Users, Rocket, Heart } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly. I stay curious and committed to learning new skills, tools, and best practices to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description:
      "Every line of code should serve the user. I prioritize creating intuitive, accessible experiences that solve real problems.",
  },
  {
    icon: Rocket,
    title: "Quality & Excellence",
    description:
      "I believe in doing things right the first time. Clean code, thorough testing, and attention to detail are non-negotiables.",
  },
  {
    icon: Heart,
    title: "Collaboration",
    description:
      "Great software is built by great teams. I value open communication, knowledge sharing, and supporting my colleagues.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="My Values"
            subtitle="The principles that guide my work and define who I am as a developer."
            centered
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {values.map((value) => {
            const Icon = value.icon
            return (
              <StaggerItem key={value.title}>
                <div className="text-center p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors h-full">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
