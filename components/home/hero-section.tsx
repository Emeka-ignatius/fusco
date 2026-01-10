"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const techStack = ["NEXT.JS", "TYPESCRIPT", "NODE.JS", "REACT", "PYTHON"]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-background py-24">
      {/* Spacer for top */}
      <div className="flex-shrink-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wider uppercase text-muted-foreground border border-border/50 rounded-full bg-card/50">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
        >
          <span className="block">Engineering Scalable</span>
          <span className="block italic font-serif">Digital Experiences.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 text-pretty"
        >
          Senior Software Engineer specializing in distributed systems, modern cloud architecture, and high-performance
          frontend interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 md:mb-16 lg:mb-24"
        >
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 group w-full sm:w-auto"
          >
            <Link href="/work">
              View Portfolio
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-muted/50 rounded-full px-8 bg-transparent w-full sm:w-auto"
          >
            <Link href="/blog">Read Articles</Link>
          </Button>
        </motion.div>
      </div>

      <div className="flex-shrink-0 flex flex-col items-center gap-8 mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Mastering the Modern Stack</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-2 px-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs sm:text-sm md:text-base font-medium text-muted-foreground/80 tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator - retained as requested */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
