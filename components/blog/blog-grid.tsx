"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, Calendar, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"
import { cn } from "@/lib/utils"

const categories = ["All", "React", "TypeScript", "Career", "DevOps", "Tutorials"]

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js 15",
    slug: "scalable-react-nextjs-15",
    excerpt:
      "Learn how to structure your Next.js applications for maximum scalability, from project organization to advanced caching strategies.",
    image: "/blog-nextjs-architecture-dark-theme.jpg",
    category: "React",
    tags: ["Next.js", "React", "Architecture"],
    date: "Jan 5, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "TypeScript Best Practices in 2026",
    slug: "typescript-best-practices-2026",
    excerpt:
      "A comprehensive guide to writing better TypeScript code, including advanced patterns, utility types, and common pitfalls to avoid.",
    image: "/blog-typescript-code-dark-theme.jpg",
    category: "TypeScript",
    tags: ["TypeScript", "Best Practices"],
    date: "Dec 28, 2025",
    readTime: "12 min read",
    featured: true,
  },
  {
    id: 3,
    title: "From Junior to Senior: A Developer's Journey",
    slug: "junior-to-senior-journey",
    excerpt:
      "Reflecting on my growth from a junior developer to a senior engineer, and the lessons learned along the way.",
    image: "/blog-career-growth-dark-theme.jpg",
    category: "Career",
    tags: ["Career", "Growth", "Advice"],
    date: "Dec 15, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Mastering Docker for Frontend Developers",
    slug: "docker-frontend-developers",
    excerpt:
      "A practical guide to using Docker in your frontend development workflow, from local development to production deployment.",
    image: "/blog-docker-containers-dark-theme.jpg",
    category: "DevOps",
    tags: ["Docker", "DevOps", "Deployment"],
    date: "Dec 1, 2025",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Building a Real-time Chat App with Socket.io",
    slug: "realtime-chat-socketio",
    excerpt:
      "Step-by-step tutorial on building a full-featured real-time chat application using React, Node.js, and Socket.io.",
    image: "/blog-chat-app-tutorial-dark-theme.jpg",
    category: "Tutorials",
    tags: ["React", "Node.js", "Socket.io"],
    date: "Nov 20, 2025",
    readTime: "15 min read",
    featured: false,
  },
  {
    id: 6,
    title: "The Art of Code Reviews",
    slug: "art-of-code-reviews",
    excerpt:
      "How to give and receive code reviews that improve code quality and foster team growth without the friction.",
    image: "/blog-code-review-dark-theme.jpg",
    category: "Career",
    tags: ["Code Review", "Team", "Best Practices"],
    date: "Nov 10, 2025",
    readTime: "7 min read",
    featured: false,
  },
]

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  const featuredPost = filteredPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured || post !== featuredPost)

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

        {/* Featured Post */}
        {featuredPost && (
          <FadeIn className="mb-12">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <article className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <div className="relative aspect-video md:aspect-auto rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>
                </div>

                <div className="flex flex-col justify-center">
                  <Badge variant="outline" className="text-primary border-primary/30 w-fit mb-3">
                    {featuredPost.category}
                  </Badge>

                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-4">{featuredPost.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          </FadeIn>
        )}

        {/* Regular Posts Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="h-full bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                    {/* Post Image */}
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Post Info */}
                    <div className="p-6">
                      <Badge variant="outline" className="text-primary border-primary/30 mb-3">
                        {post.category}
                      </Badge>

                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
