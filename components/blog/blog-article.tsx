"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Twitter, Linkedin, Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FadeIn } from "@/components/animations/fade-in"
import { toast } from "sonner"

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  tags: string[]
  date: string
  readTime: string
  author: {
    name: string
    avatar: string
  }
}

interface BlogArticleProps {
  post: BlogPost
  relatedPosts?: BlogPost[]
}

interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

export function BlogArticle({ post, relatedPosts = [] }: BlogArticleProps) {
  const [activeSection, setActiveSection] = useState<string>("")
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([])

  // Extract table of contents from content
  useEffect(() => {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm
    const toc: TableOfContentsItem[] = []
    let match

    while ((match = headingRegex.exec(post.content)) !== null) {
      const level = match[1].length
      const title = match[2]
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
      toc.push({ id, title, level })
    }

    setTableOfContents(toc)
  }, [post.content])

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -66%" },
    )

    tableOfContents.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [tableOfContents])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success("Link copied to clipboard!")
  }

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(post.title)

    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    }

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400")
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <article>
      {/* Hero Section with Full-width Image */}
      <header className="relative h-[50vh] md:h-[60vh] min-h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-end pb-12 md:pb-16">
          <FadeIn>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span>•</span>
              <Badge variant="outline" className="text-primary border-primary/30 uppercase text-xs tracking-wider">
                {post.category}
              </Badge>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground max-w-4xl text-balance leading-tight">
              {post.title}
            </h1>
          </FadeIn>
        </div>
      </header>

      {/* Two Column Layout: Sidebar + Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Sticky Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Table of Contents */}
              {tableOfContents.length > 0 && (
                <FadeIn>
                  <div>
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`block text-left text-sm transition-colors w-full ${
                            item.level === 3 ? "pl-4" : ""
                          } ${
                            activeSection === item.id
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {item.title}
                        </button>
                      ))}
                    </nav>
                  </div>
                </FadeIn>
              )}

              {/* Share Article */}
              <FadeIn delay={0.1}>
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Share Article
                  </h3>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 bg-transparent border-border hover:border-primary hover:text-primary"
                      onClick={() => handleShare("twitter")}
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 bg-transparent border-border hover:border-primary hover:text-primary"
                      onClick={() => handleShare("linkedin")}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 bg-transparent border-border hover:border-primary hover:text-primary"
                      onClick={handleCopyLink}
                    >
                      <Link2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <FadeIn>
              <div
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:text-foreground prose-headings:font-bold prose-headings:scroll-mt-24
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground
                  prose-code:text-primary prose-code:bg-card prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-code:font-mono prose-code:text-sm
                  prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:overflow-x-auto
                  prose-ul:text-muted-foreground
                  prose-ol:text-muted-foreground
                  prose-li:marker:text-primary
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-card/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />
            </FadeIn>

            {/* Tags */}
            <FadeIn delay={0.1}>
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20" />
        <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />

        <div className="relative max-w-2xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Join the Fluid Stack</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground mb-8">
              Weekly deep-dives into distributed systems, performance engineering, and modern web architecture.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                toast.success("Thanks for subscribing!")
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="you@company.com"
                className="bg-background/50 border-border focus:border-primary"
                required
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
                Subscribe
              </Button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8">Related Insights</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.slice(0, 3).map((relatedPost, index) => (
                <FadeIn key={relatedPost.id} delay={index * 0.1}>
                  <Link href={`/blog/${relatedPost.slug}`} className="group block">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span className="text-primary uppercase tracking-wider">{relatedPost.category}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}

// Enhanced markdown formatting with code syntax highlighting
function formatContent(content: string): string {
  return (
    content
      // Headers with IDs for anchor links
      .replace(/^## (.+)$/gm, (_, title) => {
        const id = title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")
        return `<h2 id="${id}">${title}</h2>`
      })
      .replace(/^### (.+)$/gm, (_, title) => {
        const id = title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")
        return `<h3 id="${id}">${title}</h3>`
      })
      // Blockquotes
      .replace(/^> (.+)$/gm, "<blockquote><p>$1</p></blockquote>")
      // Bold and italic
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      // Inline code
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      // Code blocks with language hint
      .replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
        const languageClass = lang ? `language-${lang}` : ""
        return `<div class="relative"><div class="absolute top-3 right-3 text-xs text-muted-foreground uppercase">${lang || "code"}</div><pre><code class="${languageClass}">${code.trim()}</code></pre></div>`
      })
      // Lists
      .replace(/^- (.+)$/gm, "<li>$1</li>")
      .replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>")
      .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
      // Paragraphs
      .replace(/\n\n/g, "</p><p>")
      .replace(/^(?!<[huplobrd])/gm, "<p>")
      .replace(/(?<![>])$/gm, "</p>")
      .replace(/<p><\/p>/g, "")
      .replace(/<p>(<[huplobrd])/g, "$1")
      .replace(/(<\/[huplobrd][^>]*>)<\/p>/g, "$1")
  )
}
