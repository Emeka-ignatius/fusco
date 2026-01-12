"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  AlertTriangle,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { Project } from "@/lib/const";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article>
      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Back Button */}
          <FadeIn>
            <Link
              href="/work"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Project Info */}
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className="text-primary border-primary/30">
                    {project.category}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {project.title}
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-muted text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex gap-3">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 bg-transparent text-foreground">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Main Image */}
            <FadeIn delay={0.2} direction="left">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          {/* 01. Overview */}
          <FadeIn>
            <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-20">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  01. Overview
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription.split("\n\n")[0] ||
                    project.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription.split("\n\n")[1] ||
                    `The project required a complete overhaul of the existing architecture to support over 100,000 concurrent users while maintaining 99.99% uptime. As the lead engineer, I was responsible for the strategic migration from a legacy system to a modern microservices architecture.`}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 02. The Problem */}
          <FadeIn delay={0.1}>
            <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-20">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  02. The Problem
                </h2>
              </div>
              <div className="space-y-6">
                {/* Critical Pain Points Card */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-accent">
                      Critical Pain Points
                    </span>
                  </div>
                  <div className="space-y-3">
                    {project.painPoints.map((point, index) => (
                      <div key={index} className="flex gap-3">
                        <span className="text-sm text-accent font-mono">
                          0{index + 1}
                        </span>
                        <p className="text-sm text-muted-foreground">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 03. The Architecture */}
          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-20">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  03. The Architecture
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  We implemented an event-driven architecture using{" "}
                  <span className="text-foreground font-medium">Node.js</span>{" "}
                  for high-performance processing and{" "}
                  <span className="text-foreground font-medium">Redis</span> for
                  reliable message queuing.
                </p>

                {/* Architecture Diagram Placeholder */}
                <div className="border-2 border-dashed border-border rounded-xl p-12 flex flex-col items-center justify-center">
                  <Layers className="h-10 w-10 text-primary mb-4" />
                  <span className="text-sm text-muted-foreground">
                    System Architecture Diagram
                  </span>
                </div>

                {/* Feature Cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.architectureFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 04. Results */}
          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  04. Results
                </h2>
              </div>
              <div className="space-y-8">
                {/* Stats */}
                <div className="flex flex-wrap gap-8 md:gap-12">
                  {project.results.map((stat, index) => (
                    <div key={index}>
                      <div className="text-3xl md:text-4xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>

                {/* Testimonial Quote */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="text-muted-foreground italic leading-relaxed mb-4">
                    {project.testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {project.testimonial.author}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {project.testimonial.authorTitle}
                      </div>
                    </div>
                  </div>
                  {/* Quote marks decoration */}
                  <div className="flex justify-end mt-2">
                    <span className="text-6xl text-muted-foreground/20 font-serif leading-none">
                      "
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Interested in working together?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground mb-8">
              I&apos;d love to discuss how I can help bring your project to
              life.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
