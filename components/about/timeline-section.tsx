"use client"

import { FadeIn } from "@/components/animations/fade-in"

const timelineItems = [
  {
    year: "2025",
    title: "Platform Architect",
    company: "Global Fintech Solutions",
    project: {
      title: "Multi-Module Infrastructure",
      description:
        "Leading the architectural redesign of a core banking platform into a modular service mesh. Reduced deployment cycles by 40% and improved developer onboarding speed through standardized SDKs.",
      tech: ["GOLANG", "KUBERNETES", "GRPC"],
    },
  },
  {
    year: "2024",
    title: "Lead Revenue Engineer",
    company: "GovTech Authority",
    project: {
      title: "National Revenue System",
      description:
        "Engineered a high-throughput revenue collection system for national government use. Successfully processed over ₦1.2B in transactions annually with zero downtime during peak tax seasons.",
      tech: ["NODE.JS", "POSTGRESQL", "REDIS"],
    },
  },
  {
    year: "2023",
    title: "Senior Fullstack Engineer",
    company: "ScaleUp Labs",
    project: {
      title: "Enterprise Data Dashboards",
      description:
        "Developed complex real-time visualization tools for enterprise clients. Focused on performance optimization for large-scale datasets, reducing frontend render times by 65%.",
      tech: ["REACT", "D3.JS", "GRAPHQL"],
    },
  },
  {
    year: "2022",
    title: "Backend Developer",
    company: "CloudPioneer Tech",
    project: {
      title: "Distributed Database Migration",
      description:
        "Orchestrated a zero-downtime migration of 50TB+ of user data from legacy monolith to a distributed microservices database architecture.",
      tech: ["PYTHON", "AWS", "MONGODB"],
    },
  },
  {
    year: "2021",
    title: "Software Engineer",
    company: "E-Commerce Start",
    project: {
      title: "Checkout Engine Overhaul",
      description:
        "Rebuilt the core checkout flow using a headless commerce approach, resulting in a 15% increase in conversion rates for mobile users.",
      tech: ["TYPESCRIPT", "NEXT.JS", "STRIPE"],
    },
  },
]

export function TimelineSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 md:mb-24">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-medium tracking-widest uppercase">Career Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Building the future of <span className="text-primary">scalable infrastructure.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
              Senior Software Engineer focused on high-performance revenue systems, multi-module architectures, and
              government-grade platforms.
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Center timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px border-l border-dashed border-muted-foreground/30 md:-translate-x-px" />

          {/* Timeline items */}
          <div className="space-y-16 md:space-y-24">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0

              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="relative">
                    {/* Mobile layout */}
                    <div className="md:hidden ml-12">
                      {/* Year and title */}
                      <div className="mb-4">
                        <span className="text-primary text-sm font-medium">{item.year}</span>
                        <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.company}</p>
                      </div>

                      {/* Project card */}
                      <div className="p-4 rounded-xl bg-card border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <h4 className="text-primary text-sm font-medium">{item.project.title}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-[10px] font-medium rounded bg-muted text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-card border border-border flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-16">
                      {/* Left side */}
                      <div className={`${isEven ? "text-right" : "order-2"}`}>
                        {isEven ? (
                          // Job info on left
                          <div className="pt-2">
                            <span className="text-primary text-sm font-medium">{item.year}</span>
                            <h3 className="text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.company}</p>
                          </div>
                        ) : (
                          // Project card on left
                          <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              <h4 className="text-primary text-sm font-medium">{item.project.title}</h4>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                              {item.project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.project.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 text-[10px] font-medium rounded bg-muted text-muted-foreground"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right side */}
                      <div className={`${isEven ? "order-2" : ""}`}>
                        {isEven ? (
                          // Project card on right
                          <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              <h4 className="text-primary text-sm font-medium">{item.project.title}</h4>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                              {item.project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.project.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 text-[10px] font-medium rounded bg-muted text-muted-foreground"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : (
                          // Job info on right
                          <div className="pt-2">
                            <span className="text-primary text-sm font-medium">{item.year}</span>
                            <h3 className="text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.company}</p>
                          </div>
                        )}
                      </div>

                      {/* Center timeline dot */}
                      <div className="absolute left-1/2 top-2 -translate-x-1/2 h-8 w-8 rounded-full bg-card border border-border flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
