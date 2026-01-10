# FUSCO Portfolio

A modern, dark-themed portfolio website for **Ignatius Emeka Joshua (FUSCO)** — a Senior Software Engineer specializing in distributed systems, modern cloud architecture, and high-performance frontend interfaces.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?logo=framer)

---

## Features

- **Fluid Professional Design** — Dark theme with Electric Cyan, Purple, and Coral Pink accents
- **Fully Responsive** — Mobile-first approach with optimized layouts for all screen sizes
- **Smooth Animations** — Subtle, meaningful animations powered by Framer Motion
- **SEO Optimized** — Proper metadata, Open Graph tags, and semantic HTML
- **Accessible** — ARIA labels, keyboard navigation, and proper contrast ratios
- **Contact Form** — Functional form with Zod validation and Neon database storage

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, About preview, Featured work, Skills, Testimonials, CTA |
| About | `/about` | Story, Career timeline, Tech stack, Values |
| Work | `/work` | Filterable project grid with category badges |
| Work Detail | `/work/[slug]` | Case study layout with overview, problem, architecture, results |
| Blog | `/blog` | Article grid with category filtering |
| Blog Article | `/blog/[slug]` | Full article with TOC sidebar, code blocks, newsletter signup |
| Contact | `/contact` | Contact form with multiple contact methods |

---

## Tech Stack

### Core
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion

### Database & Backend
- **Database:** Neon (PostgreSQL)
- **ORM:** Raw SQL with `@neondatabase/serverless`
- **Validation:** Zod
- **Forms:** React Hook Form

### Tooling
- **Package Manager:** pnpm
- **Linting:** ESLint
- **Formatting:** Prettier
- **Analytics:** Vercel Analytics

---

## Project Structure

```
├── app/
│   ├── about/           # About page
│   ├── blog/            # Blog listing & article pages
│   ├── contact/         # Contact page
│   ├── work/            # Work listing & project detail pages
│   ├── actions/         # Server Actions
│   ├── globals.css      # Design tokens & global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── about/           # About page components
│   ├── animations/      # Reusable animation wrappers
│   ├── blog/            # Blog components
│   ├── contact/         # Contact form components
│   ├── home/            # Home page sections
│   ├── ui/              # shadcn/ui + custom components
│   └── work/            # Work/portfolio components
├── lib/
│   ├── db.ts            # Database connection
│   └── utils.ts         # Utility functions
├── scripts/
│   └── 001-create-contact-submissions.sql
└── public/              # Static assets & images
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fusco-portfolio.git
   cd fusco-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file:
   ```env
   DATABASE_URL=your_neon_database_url
   ```

4. **Run database migrations**
   
   Execute the SQL script in `scripts/001-create-contact-submissions.sql` on your Neon database.

5. **Start the development server**
   ```bash
   pnpm dev
   ```

6. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--deep-black` | `#0A0A0A` | Primary background |
| `--electric-cyan` | `#00D4FF` | Primary accent |
| `--soft-purple` | `#8B5CF6` | Secondary accent |
| `--coral-pink` | `#FF6B6B` | Tertiary accent |
| `--off-white` | `#F8FAFC` | Primary text |
| `--muted-slate` | `#64748B` | Secondary text |

### Typography

- **Sans:** Inter (body text)
- **Display:** Inter Tight (headings)
- **Mono:** JetBrains Mono (code)

---

## Deployment

The project is optimized for deployment on **Vercel**:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy

---

## License

This project is licensed under the MIT License.

---

## Contact

**Ignatius Emeka Joshua (FUSCO)**

- Email: info@websync.com.ng
- GitHub: [@emeka-ignatius](https://github.com/emeka-ignatius)
- LinkedIn: [Ignatius Emeka Joshua](https://linkedin.com/in/fusco)
- Twitter: [@fusco_dev](https://twitter.com/fusco_dev)
