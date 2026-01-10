import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { ProjectDetail } from "@/components/work/project-detail"

// Project data (in production, this would come from a database)
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    slug: "e-commerce-platform",
    description:
      "A full-featured e-commerce platform built with Next.js, featuring real-time inventory management, secure Stripe payments, and an intuitive admin dashboard.",
    longDescription: `This comprehensive e-commerce solution was built to handle thousands of daily transactions while providing an exceptional user experience. The platform includes features like real-time inventory tracking, secure payment processing through Stripe, and a powerful admin dashboard for managing products, orders, and customers.

Key challenges included implementing real-time inventory updates across multiple concurrent users and optimizing the checkout flow to minimize cart abandonment. The solution leverages WebSocket connections for live updates and implements a streamlined 3-step checkout process.`,
    image: "/modern-e-commerce-dashboard-interface-dark-theme.jpg",
    gallery: [
      "/e-commerce-product-page-dark-theme.jpg",
      "/e-commerce-checkout-flow-dark-theme.jpg",
      "/e-commerce-admin-dashboard-dark-theme.jpg",
    ],
    category: "E-Commerce",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma", "TailwindCSS", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenge:
      "Build a scalable e-commerce platform that handles high traffic volumes while maintaining fast load times and a seamless checkout experience.",
    solution:
      "Implemented edge caching, optimized database queries with Prisma, and used Redis for session management and cart persistence. The platform now handles 10,000+ daily visitors with sub-second response times.",
    results: ["50% reduction in cart abandonment", "99.9% uptime achieved", "3x faster page load times"],
    year: "2024",
  },
  {
    id: 2,
    title: "AI Task Manager",
    slug: "ai-task-manager",
    description:
      "An intelligent task management application that uses AI to prioritize tasks, suggest deadlines, and optimize workflow.",
    longDescription: `This AI-powered task manager revolutionizes how teams organize and prioritize their work. By analyzing patterns in task completion, deadlines, and user behavior, the application provides intelligent suggestions for task prioritization and optimal scheduling.

The AI component uses natural language processing to understand task descriptions and automatically categorize them, estimate completion times, and identify dependencies between tasks.`,
    image: "/ai-task-manager-app-interface-dark-theme-cyan-acce.jpg",
    gallery: ["/ai-task-manager-kanban-view.jpg", "/ai-task-manager-analytics.jpg", "/ai-task-manager-mobile.jpg"],
    category: "AI/ML",
    tags: ["React", "OpenAI API", "Node.js", "MongoDB", "TailwindCSS", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenge:
      "Create an intelligent task management system that learns from user behavior and provides actionable insights.",
    solution:
      "Integrated OpenAI's GPT-4 for natural language understanding and built a custom ML model for predicting task durations based on historical data.",
    results: ["40% improvement in deadline accuracy", "25% increase in team productivity", "Used by 500+ teams"],
    year: "2024",
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    slug: "analytics-dashboard",
    description:
      "A comprehensive analytics platform providing real-time insights, custom reports, and data visualization for enterprise clients.",
    longDescription: `This enterprise analytics dashboard was designed to provide real-time visibility into business metrics across multiple data sources. The platform supports custom dashboards, automated reports, and advanced data visualization.

Built with performance in mind, the dashboard can display millions of data points without compromising on interactivity or load times.`,
    image: "/analytics-dashboard-charts-graphs-dark-theme.jpg",
    gallery: [
      "/analytics-custom-reports-dark.jpg",
      "/analytics-data-visualization-dark.jpg",
      "/analytics-mobile-view-dark.jpg",
    ],
    category: "Web App",
    tags: ["Vue.js", "D3.js", "WebSocket", "Redis", "Python", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenge:
      "Build a real-time analytics platform that can handle massive datasets while providing interactive visualizations.",
    solution:
      "Implemented data aggregation pipelines with Redis caching and used WebSocket for live updates. D3.js powers the interactive charts with canvas rendering for performance.",
    results: ["Real-time updates < 100ms latency", "Handles 10M+ data points", "Reduced reporting time by 80%"],
    year: "2023",
  },
]

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  )
}
