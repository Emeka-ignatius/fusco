"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { SectionHeading } from "@/components/ui/section-heading"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote:
      "Ignatius delivered exceptional work on our platform. His attention to detail and problem-solving skills are outstanding. The project was completed ahead of schedule.",
    author: "Sarah Chen",
    title: "CTO at TechStart",
    avatar: "/professional-woman-headshot.png",
  },
  {
    id: 2,
    quote:
      "Working with FUSCO was a game-changer for our business. He understood our requirements perfectly and built a solution that exceeded our expectations.",
    author: "Michael Roberts",
    title: "Founder, Digital Agency",
    avatar: "/professional-man-headshot.png",
  },
  {
    id: 3,
    quote:
      "His technical expertise combined with excellent communication made the entire development process smooth and enjoyable. Highly recommended!",
    author: "Emily Watson",
    title: "Product Manager",
    avatar: "/professional-woman-smiling-headshot.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="What People Say"
            subtitle="Feedback from clients and colleagues I've had the pleasure of working with."
            centered
          />
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />

                <blockquote className="text-foreground leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
