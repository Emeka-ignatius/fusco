"use client"

import { motion } from "framer-motion"

export function WorkHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Recent Work</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl"
        >
          Building the future of <span className="text-primary">high-performance systems.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty"
        >
          A curated selection of projects focusing on distributed architecture, GovTech modernization, and
          high-availability SaaS platforms for global enterprises.
        </motion.p>
      </div>
    </section>
  )
}
