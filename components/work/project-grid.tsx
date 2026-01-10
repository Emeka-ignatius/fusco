"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"
import { cn } from "@/lib/utils"

const categories = ["All", "Web App", "E-Commerce", "Mobile", "AI/ML", "Open Source"]

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    slug: "e-commerce-platform",
    description:
      "A full-featured e-commerce platform built with Next.js, featuring real-time inventory management, secure Stripe payments, and an intuitive admin dashboard. Handles thousands of daily transactions.",
    image: "/modern-e-commerce-dashboard-interface-dark-theme.jpg",
    category: "E-Commerce",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Task Manager",
    slug: "ai-task-manager",
    description:
      "An intelligent task management application that uses AI to prioritize tasks, suggest optimal deadlines, and automate workflow optimization based on user patterns.",
    image: "/ai-task-manager-app-interface-dark-theme-cyan-acce.jpg",
    category: "AI/ML",
    tags: ["React", "OpenAI API", "Node.js", "MongoDB", "TailwindCSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    slug: "analytics-dashboard",
    description:
      "A comprehensive analytics platform providing real-time insights, custom report generation, and interactive data visualization for enterprise clients.",
    image: "/analytics-dashboard-charts-graphs-dark-theme.jpg",
    category: "Web App",
    tags: ["Vue.js", "D3.js", "WebSocket", "Redis", "Python"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    slug: "fitness-app",
    description:
      "A cross-platform mobile application for tracking workouts, nutrition, and health metrics with social features and AI-powered workout recommendations.",
    image: "/fitness-tracking-app-mobile-dark-interface.jpg",
    category: "Mobile",
    tags: ["React Native", "Expo", "Firebase", "HealthKit", "Google Fit"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Open Source UI Library",
    slug: "ui-library",
    description:
      "A comprehensive React component library with 50+ accessible components, dark mode support, and extensive customization options. Used by 1000+ developers.",
    image: "/ui-component-library-showcase-dark-theme.jpg",
    category: "Open Source",
    tags: ["React", "TypeScript", "Storybook", "Jest", "Rollup"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "Property Marketplace",
    slug: "property-marketplace",
    description:
      "A real estate marketplace platform with advanced search filters, virtual tours, mortgage calculator, and secure document handling for property transactions.",
    image: "/real-estate-marketplace-website-dark-theme.jpg",
    category: "Web App",
    tags: ["Next.js", "Mapbox", "Supabase", "Cloudinary", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
]

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Filter Tabs */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group h-full bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="bg-primary text-primary-foreground">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="bg-background/80">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs text-primary border-primary/30">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* View Details Link */}
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center text-sm text-primary hover:underline group/link"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
