# Design Specification: Add Ministry of Transport Platform to Portfolio

**Author:** Fusco / AI Assistant
**Date:** 2026-06-03
**Status:** Approved

## 1. Objective

Integrate the **Ministry of Transport Platform** (http://ministry-of-transport-web.vercel.app/) as a static project entry within the portfolio codebase (`c:\Users\TKT\codebase\personal\fusco`).

## 2. Project Data Configuration

The project will be appended to the `projects` array in `lib/const.tsx` with the following parameters:

- **ID**: `13`
- **Featured**: `false` (Standard project listing)
- **Category**: `"GovTech & Transit"`
- **Year**: `"2026"`
- **Testimonial**: Blank/Empty (no testimonial displayed)

### Full Metadata

```typescript
  {
    id: 13,
    title: "Ministry of Transport Platform",
    slug: "ministry-of-transport",
    description:
      "A public services portal and administrative dashboard for transit operations, motor park registration, and compliance management.",
    longDescription:
      "The Ministry of Transport Platform is a comprehensive digital GovTech solution designed for regulating state transportation networks. Built as a high-performance Next.js portal, it facilitates motor park registration and inspection workflows, Mass Transit terminal administration, and accident vehicle reporting (AVIR). The application features custom JWT-based authentication across nine distinct roles—ranging from external park owners to transit operators, inspectors, and the Commissioner—providing secure auditing, Paystack fee collection, and AWS S3 document management for verified operators.",
    image: "/mot.png",
    gallery: [],
    category: "GovTech & Transit",
    tags: [
      "Next.js",
      "TypeScript",
      "React 19",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Neon Database",
      "JWT Authentication",
      "AWS S3",
      "Paystack",
      "AVIR Compliance",
    ],
    liveUrl: "http://ministry-of-transport-web.vercel.app/",
    githubUrl: "https://github.com/iscedcs/ministry-of-transport-web.git",
    challenge:
      "Coordinating complex regulatory workflows across nine distinct user roles with varying permissions, while managing secure upload of large infrastructure photos and corporate credentials without introducing security vulnerabilities or slowing down the serverless backend.",
    solution:
      "Designed a custom role-based access control (RBAC) middleware layer using Jose for lightweight token verification, integrated Neon serverless PostgreSQL for robust relational indexing, and leveraged S3 pre-signed URLs to offload high-volume file uploads directly from the client.",
    results: [
      { value: "GovTech", label: "PUBLIC SERVICES PORTAL" },
      { value: "Form 0051", label: "AVIR COMPLIANCE" },
      { value: "9 Roles", label: "RBAC WORKFLOWS" },
    ],
    year: "2026",
    painPoints: [
      "Manual park registration: Intending private park owners struggled with slow, paperwork-heavy approval processes that lacked transparency.",
      "Regulatory compliance overhead: Inspecting and licensing motor parks required manual checklists that were prone to errors and lost records.",
      "Unstructured accident reporting: Standard Government Form 0051 (AVIR) was historically processed on paper, delaying mechanical assessments and legal reporting.",
    ],
    architectureFeatures: [
      {
        title: "Jose JWT Authentication",
        description:
          "Lightweight custom auth middleware facilitating role-based route protection across 9 administrative and applicant divisions.",
      },
      {
        title: "Neon Serverless Persistence",
        description:
          "PostgreSQL instance managed via Prisma ORM for tracking registrations, audit logs, and fee payments.",
      },
      {
        title: "S3 Direct Document Uploads",
        description:
          "Secure storage system for corporate certificates and physical park photos required for inspector verification.",
      },
    ],
    testimonial: {
      quote: "",
      author: "",
      authorTitle: "",
    },
    featured: false,
  }
```

## 3. UI Modifications

### Conditionally Render Empty Testimonial Box
The portfolio details page (`components/work/project-detail.tsx`) currently renders the testimonial card wrapper unconditionally. To prevent empty quote blocks from appearing for this (or any future) project without an active testimonial, the wrapper will be modified to only render if a non-empty `quote` is provided.

```tsx
{project.testimonial && project.testimonial.quote && (
  <div className="bg-card border border-border rounded-xl p-6">
    ...
  </div>
)}
```

## 4. Verification & Validation Plan

- Verify that the details are loaded correctly at `/work`.
- Verify the individual project detail page renders correctly at `/work/ministry-of-transport`.
- Verify that the testimonial section is completely hidden and doesn't show an empty testimonial box on the project detail page.
