import type { Metadata } from "next"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and insights on web development, software engineering, and building better digital products.",
}

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </>
  )
}
