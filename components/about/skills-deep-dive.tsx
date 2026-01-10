"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Palette, Server, Cloud, CreditCard, Figma, Code2, FileText, MessageSquare, Zap, Send } from "lucide-react"

const techStack = [
  {
    category: "Frontend Development",
    icon: Palette,
    iconColor: "text-amber-400",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "Storybook",
      "Apollo Client",
    ],
  },
  {
    category: "Backend & API",
    icon: Server,
    iconColor: "text-primary",
    technologies: ["NestJS", "Node.js", "GraphQL", "PostgreSQL", "Redis", "Prisma", "RabbitMQ", "Python (FastAPI)"],
  },
  {
    category: "Infrastructure & DevOps",
    icon: Cloud,
    iconColor: "text-primary",
    technologies: [
      "Docker",
      "Kubernetes",
      "AWS (EC2, S3, RDS)",
      "Terraform",
      "GitHub Actions",
      "Vercel",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    category: "Payments & Fintech",
    icon: CreditCard,
    iconColor: "text-accent",
    technologies: ["Stripe", "Paystack", "Flutterwave", "Plaid API", "Ledger Systems", "PCI Compliance"],
  },
]

const productivityTools = [
  { name: "Figma", icon: Figma },
  { name: "VS Code", icon: Code2 },
  { name: "Notion", icon: FileText },
  { name: "Slack", icon: MessageSquare },
  { name: "Linear", icon: Zap },
  { name: "Postman", icon: Send },
]

export function SkillsDeepDive() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Tech Stack & Tools</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A curated selection of technologies I use to build scalable, high-performance platforms and seamless user
              experiences.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 gap-6 mb-12" staggerDelay={0.1}>
          {techStack.map((category) => {
            const Icon = category.icon
            return (
              <StaggerItem key={category.category}>
                <div className="p-6 rounded-xl bg-card border border-border h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <Icon className={`w-5 h-5 ${category.iconColor}`} />
                    <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm bg-muted/50 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>

        <FadeIn>
          <div className="pt-8 border-t border-border">
            <span className="text-xs text-muted-foreground tracking-widest uppercase mb-6 block">
              Design & Productivity Tools
            </span>
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              {productivityTools.map((tool) => {
                const Icon = tool.icon
                return (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{tool.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
