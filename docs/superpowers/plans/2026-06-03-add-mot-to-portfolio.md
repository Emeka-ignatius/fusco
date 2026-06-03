# Add Ministry of Transport Platform to Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the Ministry of Transport Platform into the portfolio projects catalog.

**Architecture:** Append the new project metadata to the static `projects` array in the constants module and conditionally restrict testimonial rendering in the project details UI template to hide it for this project.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS

---

### Task 1: Append MOT Project to Constants

**Files:**

- Modify: `lib/const.tsx:765-767`

- [ ] **Step 1: Write the update to `lib/const.tsx`**

Replace the end of the `projects` array:
```tsx
    featured: true,
  },
];
```
with:
```tsx
    featured: true,
  },
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
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add lib/const.tsx
git commit -m "feat: add ministry of transport project details to constants"
```

---

### Task 2: Conditionally Hide Empty Testimonial Box

**Files:**

- Modify: `components/work/project-detail.tsx:254-278`

- [ ] **Step 1: Implement conditional rendering logic in `project-detail.tsx`**

Modify the testimonial block:
```tsx
                {/* Testimonial Quote */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="text-muted-foreground italic leading-relaxed mb-4">
                    {project.testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {project.testimonial.author}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {project.testimonial.authorTitle}
                      </div>
                    </div>
                  </div>
                  {/* Quote marks decoration */}
                  <div className="flex justify-end mt-2">
                    <span className="text-6xl text-muted-foreground/20 font-serif leading-none">
                      "
                    </span>
                  </div>
                </div>
```

To use conditional rendering:
```tsx
                {/* Testimonial Quote */}
                {project.testimonial && project.testimonial.quote && (
                  <div className="bg-card border border-border rounded-xl p-6">
                    <p className="text-muted-foreground italic leading-relaxed mb-4">
                      {project.testimonial.quote}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {project.testimonial.author}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {project.testimonial.authorTitle}
                        </div>
                      </div>
                    </div>
                    {/* Quote marks decoration */}
                    <div className="flex justify-end mt-2">
                      <span className="text-6xl text-muted-foreground/20 font-serif leading-none">
                        "
                      </span>
                    </div>
                  </div>
                )}
```

- [ ] **Step 2: Commit**

```bash
git add components/work/project-detail.tsx
git commit -m "refactor: conditionally hide testimonial block when quote is empty"
```

---

### Task 3: Local Inspection and Build Verification

- [ ] **Step 1: Check that the portfolio compiles correctly**

Run: `powershell -ExecutionPolicy Bypass -Command "pnpm run build"`
Expected: Compilation passes with exit code 0.
