"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

const featuredProject = {
  title: "E-Commerce Platform",
  description:
    "A robust enterprise-grade commerce engine. Processing thousands of daily transactions with 99.9% uptime and complex multi-vendor settlement logic.",
  image: "/modern-e-commerce-dashboard-interface-dark-theme.jpg",
  categories: ["Payments", "Enterprise"],
  year: "2024",
  status: "Live Production",
  slug: "e-commerce-platform",
}

const secondaryProjects = [
  {
    title: "AI Task Manager",
    description:
      "Intelligent task management platform featuring real-time prioritization, AI-powered scheduling, and workflow optimization for modern teams.",
    categories: ["AI/ML", "SaaS"],
    techStack: ["TS", "NX", "AI"],
    slug: "ai-task-manager",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive real-time analytics suite. Transforming raw data into actionable insights with custom visualizations for enterprise clients.",
    categories: ["Data", "Enterprise"],
    techStack: ["R", "D3", "PG"],
    slug: "analytics-dashboard",
  },
]

export function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12 lg:mb-16">
            {/* Left: Label + Headline */}
            <div className="lg:max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Featured Works</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="text-foreground">Scaling platforms</span>
                <br />
                <span className="text-muted-foreground font-normal italic">with precision.</span>
              </h2>
            </div>

            {/* Right: Description + Link */}
            <div className="lg:max-w-sm lg:pt-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                A selection of industrial-grade platforms built for high-throughput, security, and exceptional user
                experience.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Featured Project Card (Large) */}
        <FadeIn delay={0.1}>
          <Link href={`/work/${featuredProject.slug}`} className="block group mb-6">
            <article className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-0">
                {/* Left: Content */}
                <div className="p-6 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Category Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredProject.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-8">{featuredProject.description}</p>
                  </div>

                  {/* Bottom: CTA + Meta */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
                      Case Study
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      {featuredProject.year} • {featuredProject.status}
                    </span>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="relative aspect-video lg:aspect-auto lg:h-full bg-muted overflow-hidden">
                  <Image
                    src={featuredProject.image || "/placeholder.svg"}
                    alt={featuredProject.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </article>
          </Link>
        </FadeIn>

        {/* Secondary Projects Grid */}
        <StaggerChildren className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {secondaryProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <Link href={`/work/${project.slug}`} className="block group h-full">
                <article className="h-full bg-card rounded-2xl border border-border p-6 lg:p-8 hover:border-primary/30 transition-all duration-300 flex flex-col">
                  {/* Category Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                  {/* Bottom: Explore Link + Tech Stack */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Explore
                      <ArrowUpRight className="h-4 w-4" />
                    </span>

                    {/* Tech Stack Badges */}
                    <div className="flex gap-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="w-8 h-8 flex items-center justify-center text-xs font-mono font-medium rounded bg-muted text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
