# ISCE Store Portfolio Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the "ISCE Store" project to the developer's portfolio website (`c:\Users\TKT\codebase\personal\fusco`) under `/work` and `/work/[slug]`, displaying it on the homepage as a featured project.

**Architecture:** Append the project detail structure directly to the `projects` array exported by `lib/const.tsx`. The pages `/work` and `/work/[slug]/page.tsx` will dynamically consume this static array to build the grids, details page, metadata, and routing.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Lucide Icons

---

### Task 1: Append ISCE Store Project to `lib/const.tsx`

**Files:**
- Modify: `c:\Users\TKT\codebase\personal\fusco\lib\const.tsx:699-702`

- [ ] **Step 1: Add the Project configuration object to the `projects` array**

  Modify the `projects` array in `lib/const.tsx` by adding the new project at the end of the array, right after the last project item (ISCE Connect).

  ```tsx
    {
      id: 12,
      title: "ISCE Store",
      slug: "isce-store",
      description:
        "A modern, full-featured e-commerce platform built with Next.js for selling custom products with integrated payment processing, order tracking, and multi-role user management.",
      longDescription:
        "ISCE Store is a production-ready e-commerce platform built to streamline custom merchandise sales. The application features a dynamic product customizer allowing customers to choose colors, upload custom designs via AWS S3, and preview changes. It integrates Paystack for secure transaction processing, features a robust multi-step checkout flow, and provides real-time order tracking via a visual progress timeline. For site managers, it includes comprehensive admin and superadmin dashboards to manage orders, invoices, and company wallets.",
      image: "/store.png",
      gallery: [],
      category: "E-Commerce & SaaS",
      tags: [
        "Next.js",
        "TypeScript",
        "React 19",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "NextAuth",
        "Paystack",
        "AWS S3",
        "Resend",
        "GIGL Integration",
      ],
      liveUrl: "https://store.isce.tech",
      githubUrl: "https://github.com/iscedcs/isce-tech-store-web",
      challenge:
        "Designing a cohesive checkout experience that handles asynchronous payment confirmations, custom design file uploads, and validation of user addresses in a serverless environment without degrading page responsiveness.",
      solution:
        "Leveraged AWS S3 presigned URLs for secure client-side design uploads, integrated a robust multi-step checkout state machine, and utilized Paystack webhooks to reliably update transaction statuses asynchronously in a Neon serverless PostgreSQL database.",
      results: [
        { value: "Paystack", label: "SECURE PAYMENTS" },
        { value: "Real-time", label: "ORDER TRACKING" },
        { value: "Dynamic", label: "PRODUCT CUSTOMIZATION" },
      ],
      year: "2026",
      painPoints: [
        "Friction in custom product ordering: Traditional stores struggle to handle custom design uploads and color options seamlessly during checkout.",
        "Lack of status transparency: Customers often complain about not knowing where their orders are in the processing/shipping queue.",
        "Fragmented admin visibility: Admins lacked a unified view to track payment verification, update fulfillment states, and generate invoices.",
      ],
      architectureFeatures: [
        {
          title: "Dynamic Product Customizer",
          description:
            "Interactive client-side controls for color selection and custom design image uploads mapped to individual order items.",
        },
        {
          title: "Role-Based Portal Access",
          description:
            "Granular separation of duties between standard customers, order-fulfillment Admins, and Superadmins managing corporate wallets and invoices.",
      },
      {
        title: "Event-Driven Payment Lifecycles",
        description:
          "Webhook verification systems that automatically handle payment confirmations, database updates, and transactional email triggers.",
      },
      ],
      testimonial: {
        quote:
          "The customizer and order tracking pipeline completely removed our communication overhead. Customers know exactly what they are getting and where their order stands.",
        author: "Victor Itodo",
        authorTitle: "Product Manager",
      },
      featured: true,
    }
  ```

- [ ] **Step 2: Save the file and check for syntax correctness**
  Verify the file compiles and has no dangling commas, brackets, or imports.

---

### Task 2: Build Verification and Local Inspection

**Files:**
- Test: Local Project Build

- [ ] **Step 1: Run Next.js linting**
  Run the linter to verify code cleanliness and styling guidelines.
  Command: `pnpm run lint` (Run in `c:\Users\TKT\codebase\personal\fusco`)
  Expected output: Clean run without errors.

- [ ] **Step 2: Run Next.js production build**
  Run the Next.js compilation/build process to ensure there are no compilation or TypeScript errors.
  Command: `pnpm run build` (Run in `c:\Users\TKT\codebase\personal\fusco`)
  Expected output: Successful build complete with page routes created (including `/work/isce-store`).

- [ ] **Step 3: Commit the changes**
  Command:
  ```bash
  git add lib/const.tsx docs/superpowers/specs/2026-06-03-add-isce-store-to-portfolio-design.md
  git commit -m "feat: add ISCE Store project to portfolio"
  ```
