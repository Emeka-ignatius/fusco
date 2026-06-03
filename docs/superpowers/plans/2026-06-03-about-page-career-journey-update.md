# About Page Career Journey and Education Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the About page to align with the updated Software Engineer CV.

**Architecture:** Modify the hero, story, and timeline components, create a new education-section component, and integrate it into the main page grid.

**Tech Stack:** Next.js, React, Lucide icons, Framer Motion, Tailwind CSS

---

### Task 1: Update Hero and Story Components

**Files:**

- Modify: `components/about/about-hero.tsx:79-83`
- Modify: `components/about/story-section.tsx:22-28`

- [ ] **Step 1: Edit `about-hero.tsx` role**

Modify `about-hero.tsx`:
```tsx
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>Mid-Level Software Engineer</span>
              </div>
```
to:
```tsx
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>Chief Technology Officer (CTO) & Full Stack Developer</span>
              </div>
```

- [ ] **Step 2: Edit `story-section.tsx` education sentence**

Modify `story-section.tsx`:
```tsx
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              After completing my Software Engineering degree, I dove headfirst into the world of professional software
              development.
```
to:
```tsx
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              After earning my Advanced Diploma in Software Engineering (ADSE) from APTECH, I dove headfirst into the world of professional software
              development.
```

- [ ] **Step 3: Commit**

```bash
git add components/about/about-hero.tsx components/about/story-section.tsx
git commit -m "feat: update hero role and story education info in About page"
```

---

### Task 2: Restructure Career Journey Timeline

**Files:**

- Modify: `components/about/timeline-section.tsx:5-61`

- [ ] **Step 1: Replace `timelineItems` array with CV-aligned content**

Modify `timeline-section.tsx`:
```typescript
const timelineItems = [
  {
    year: "Jan 2025 - Present",
    title: "Chief Technology Officer (CTO)",
    company: "ISCE Digital Concept",
    project: {
      title: "Technical Strategy & Engineering Leadership",
      description:
        "Directing architecture, product roadmaps, and technical strategy across 4+ live enterprise products (Transpay, PalmTechnIQ, ISCE Store, Connect). Led the launch of the custom ISCE Store e-commerce system, achieved a 75% platform performance gain under load, and scaled active user counts by 70%.",
      tech: ["NEXT.JS", "NESTJS", "TYPESCRIPT", "POSTGRESQL", "PAYSTACK", "AWS S3", "CI/CD PIPELINES", "DOCKER", "REDIS"],
    },
  },
  {
    year: "Jul 2024 - Jan 2025",
    title: "Lead Full Stack Developer",
    company: "PalmTechnIQ / ISCE Digital Concept",
    project: {
      title: "PalmTechnIQ E-Learning Launch",
      description:
        "Led full-stack engineering of the core e-learning application. Designed secure multi-role user dashboards (student, tutor, admin) using robust RBAC and automated 70% of administrative workflows via custom notification systems.",
      tech: ["NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "TAILWIND CSS", "AWS S3", "VERCEL", "DIGITALOCEAN", "RBAC"],
    },
  },
  {
    year: "May 2023 - Jul 2024",
    title: "Software Engineer",
    company: "ISCE Digital Concept",
    project: {
      title: "Transpay Revenue Architecture",
      description:
        "Contributed to the development of Transpay, a GovTech platform processing ₦2B+ annually for 50,000+ monthly users. Designed secure authorization logic, audit log workflows, and reduced page load latencies by 25%.",
      tech: ["NEXT.JS", "REACT.JS", "TYPESCRIPT", "POSTGRESQL", "REST APIS", "AUDIT LOGGING", "JWT AUTH"],
    },
  },
  {
    year: "2022 - May 2023",
    title: "Junior Frontend Developer",
    company: "ISCE Digital Concept",
    project: {
      title: "Transpay Client Dashboards",
      description:
        "Assisted in crafting responsive public-facing portals and vehicle registry modules. Integrated transactional APIs for route assignment, GPS tracking, and waiver configuration.",
      tech: ["REACT.JS", "NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "REST APIS", "TAILWIND CSS"],
    },
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add components/about/timeline-section.tsx
git commit -m "feat: restructure career journey timeline to align with CV metrics"
```

---

### Task 3: Create and Integrate Education & Certifications Section

**Files:**

- Create: `components/about/education-section.tsx`
- Modify: `app/about/page.tsx:1-33`

- [ ] **Step 1: Write `components/about/education-section.tsx`**

Write the new component file:
```tsx
"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { GraduationCap, Award, Calendar } from "lucide-react"

const educationItems = [
  {
    title: "Advanced Diploma in Software Engineering (ADSE)",
    institution: "APTECH Computer Education, Lagos",
    info: "Affiliated with APTECH Mumbai, India",
    date: "Dec 2024",
  },
  {
    title: "Diploma in Information System Management (DISM)",
    institution: "APTECH Computer Education, Lagos",
    info: "Professional Diploma in systems administration & database design",
    date: "Oct 2023",
  },
  {
    title: "Certificate of Proficiency in Information Systems Management (CPISM)",
    institution: "APTECH Computer Education, Lagos",
    info: "Foundational software concepts and client-side scripting",
    date: "Sep 2023",
  },
]

const certifications = [
  {
    title: "DISM Certification",
    issuer: "APTECH Mumbai, India",
  },
  {
    title: "CPISM Certification",
    issuer: "APTECH Mumbai, India",
  },
]

export function EducationSection() {
  return (
    <section className="py-16 md:py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
          
          {/* Left Column - Formal Education */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary" />
                <span className="text-primary text-sm font-medium tracking-widest uppercase">Academic Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Education</h2>
            </FadeIn>

            <StaggerChildren className="space-y-6" staggerDelay={0.1}>
              {educationItems.map((edu, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-lg font-semibold text-foreground leading-snug">{edu.title}</h3>
                          <span className="inline-flex items-center text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full font-medium">
                            <Calendar className="h-3 w-3 mr-1" /> {edu.date}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-primary">{edu.institution}</p>
                        {edu.info && <p className="text-xs text-muted-foreground leading-relaxed">{edu.info}</p>}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          {/* Right Column - Certifications */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary" />
                <span className="text-primary text-sm font-medium tracking-widest uppercase">Verified Credentials</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Certifications</h2>
            </FadeIn>

            <StaggerChildren className="space-y-6" staggerDelay={0.15}>
              {certifications.map((cert, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Award className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">Issued by {cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Modify `app/about/page.tsx` to mount `EducationSection`**

Integrate the component in `app/about/page.tsx`:
```tsx
import type { Metadata } from "next";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { AboutHero } from "@/components/about/about-hero";
import { StorySection } from "@/components/about/story-section";
import { TimelineSection } from "@/components/about/timeline-section";
import { SkillsDeepDive } from "@/components/about/skills-deep-dive";
import { EducationSection } from "@/components/about/education-section";
import { ValuesSection } from "@/components/about/values-section";
import { AboutCTA } from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Ignatius Emeka Joshua (FUSCO) - A Software Engineer with 4+ years of experience building exceptional digital products.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <AboutHero />
        <StorySection />
        <TimelineSection />
        <SkillsDeepDive />
        <EducationSection />
        <ValuesSection />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/about/education-section.tsx app/about/page.tsx
git commit -m "feat: build and integrate EducationSection on the About page"
```

---

### Task 4: Local Inspection and Build Verification

- [ ] **Step 1: Check compilation**

Run: `powershell -ExecutionPolicy Bypass -Command "pnpm run build"`
Expected: Build passes with exit code 0.
