# Design Specification: About Page Career Journey and Education Update

**Author:** Fusco / AI Assistant
**Date:** 2026-06-03
**Status:** Approved

## 1. Objective

Restructure and update the About page (`/about`) of the portfolio to match the credentials and work experience listed in the updated CV (`c:\Users\TKT\codebase\personal\fusco\docs\Ignatius_Emeka_software_engineer_CV.md`).

## 2. Page & Component Modifications

### A. About Hero (`components/about/about-hero.tsx`)
- Update the job role designation from "Mid-Level Software Engineer" to "Chief Technology Officer (CTO) & Full Stack Developer".
- Keep location as "Lagos, Nigeria" and graduation as "ADSE. Software Engineering".

### B. Story Section (`components/about/story-section.tsx`)
- Update line 24 reference from "Software Engineering degree" to "Advanced Diploma in Software Engineering (ADSE) from APTECH".

### C. Timeline Section (`components/about/timeline-section.tsx`)
- Update `timelineItems` array to represent the 4 roles chronologically:
  - **CTO** (Jan 2025 - Present)
  - **Lead Full Stack Developer** (July 2024 - Jan 2025)
  - **Software Engineer** (May 2023 - July 2024)
  - **Junior Frontend Developer** (2022 - May 2023)
- Reflect key technical metrics in the descriptions:
  - CTO: Launching ISCE Store, team size 2-5, 75% performance boost, 70% user base growth.
  - Lead Dev: E-learning platform dashboard architecture, 70% admin task automation.
  - SE: Transpay GovTech platform with ₦2B+ annual transactions, 50,000+ monthly users, 25% page load optimization.
  - Junior Dev: Transpay transit dashboards, APIs, vehicle management, fee config, GPS tracking.

### D. New Education & Certifications Section (`components/about/education-section.tsx`)
- Create a new component showing APTECH Advanced Diploma (ADSE), Diploma (DISM), and Certificate (CPISM).
- Show official certifications issued by APTECH Mumbai, India.
- Integrate this component in `app/about/page.tsx` directly above the CTA or Values section.

## 3. Verification & Validation Plan
- Verify compilation of all edited and created Next.js modules.
- Ensure proper routing and rendering on the `/about` path.
