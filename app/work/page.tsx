import type { Metadata } from "next"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { WorkHero } from "@/components/work/work-hero"
import { ProjectGrid } from "@/components/work/project-grid"
import { WorkCTA } from "@/components/work/work-cta"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore my portfolio of projects showcasing expertise in full-stack development, from e-commerce platforms to AI-powered applications.",
}

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <WorkHero />
        <ProjectGrid />
        <WorkCTA />
      </main>
      <Footer />
    </>
  )
}
