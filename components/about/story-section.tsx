"use client"

import { FadeIn } from "@/components/animations/fade-in"

export function StorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">My Story</h2>
        </FadeIn>

        <div className="prose prose-lg prose-invert max-w-none">
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              My journey into software engineering began with a simple curiosity about how websites work. What started
              as tinkering with HTML and CSS in my teenage years has evolved into a deep passion for building elegant,
              scalable software solutions.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              After completing my Computer Science degree, I dove headfirst into the world of professional software
              development. Over the past five years, I&apos;ve had the privilege of working with startups, agencies, and
              enterprise companies, each experience teaching me something new about what it takes to build software that
              truly serves its users.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Today, I specialize in full-stack development with a focus on modern JavaScript frameworks like React and
              Next.js. I&apos;m particularly passionate about creating performant, accessible web applications that
              deliver exceptional user experiences.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge through technical writing. I believe that the best software is built when
              we share ideas and learn from each other.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
