import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { BlogArticle } from "@/components/blog/blog-article"

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js 15",
    slug: "scalable-react-nextjs-15",
    excerpt:
      "Learn how to structure your Next.js applications for maximum scalability, from project organization to advanced caching strategies.",
    content: `
## Introduction

Building scalable applications is one of the biggest challenges developers face today. With Next.js 15, we have more tools than ever to create applications that can grow with our needs.

> "Scalability is not just about adding more servers. It's about reducing the friction between your vision and your infrastructure."

In this article, we'll explore best practices for structuring your Next.js applications, implementing effective caching strategies, and optimizing performance at scale.

## Project Structure

A well-organized project structure is the foundation of a scalable application. Here's the structure I recommend:

\`\`\`typescript
app/
  (marketing)/
    page.tsx
    about/
  (dashboard)/
    dashboard/
    settings/
  api/
components/
  ui/
  features/
lib/
  utils.ts
  db.ts
\`\`\`

This structure uses route groups to separate concerns and makes it easy to apply different layouts to different parts of your application.

## Caching Strategies

Next.js 15 introduces powerful new caching mechanisms. Understanding when and how to use them is crucial for performance.

### Server-Side Caching

Use the new \`unstable_cache\` function for caching database queries:

\`\`\`typescript
import { unstable_cache } from 'next/cache'

const getCachedUser = unstable_cache(
  async (userId: string) => {
    return await db.user.findUnique({ 
      where: { id: userId } 
    })
  },
  ['user'],
  { revalidate: 3600 }
)
\`\`\`

### Client-Side Caching

For client-side data fetching, use SWR or React Query to implement stale-while-revalidate patterns.

## Performance Optimization

Performance optimization should be a continuous process. Here are key areas to focus on:

1. **Image Optimization**: Use Next.js Image component with proper sizing
2. **Code Splitting**: Leverage dynamic imports for heavy components
3. **Database Queries**: Optimize queries and use connection pooling
4. **Edge Functions**: Move latency-sensitive code closer to users

## Conclusion

Building scalable applications requires thoughtful architecture decisions from the start. By following these patterns and continuously monitoring your application's performance, you can create applications that grow gracefully with your user base.
    `,
    image: "/blog-nextjs-architecture-dark-theme.jpg",
    category: "Architecture",
    tags: ["Next.js", "React", "Architecture", "Performance"],
    date: "Jan 5, 2026",
    readTime: "8 min read",
    author: {
      name: "Ignatius Emeka Joshua",
      avatar: "/professional-software-engineer-portrait-dark-backg.png",
    },
  },
  {
    id: 2,
    title: "TypeScript Best Practices in 2026",
    slug: "typescript-best-practices-2026",
    excerpt:
      "A comprehensive guide to writing better TypeScript code, including advanced patterns, utility types, and common pitfalls to avoid.",
    content: `
## Introduction

TypeScript continues to evolve, and so should our practices. This guide covers the most important TypeScript patterns and best practices for 2026.

## Strict Mode is Non-Negotiable

Always enable strict mode in your \`tsconfig.json\`:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true
  }
}
\`\`\`

## Use Utility Types Effectively

TypeScript provides powerful utility types. Learn to use them:

\`\`\`typescript
// Pick only what you need
type UserPreview = Pick<User, 'id' | 'name' | 'avatar'>

// Make all properties optional
type PartialUser = Partial<User>

// Create required properties
type RequiredUser = Required<User>
\`\`\`

## Type Guards and Narrowing

Use type guards to narrow types safely:

\`\`\`typescript
function isError(value: unknown): value is Error {
  return value instanceof Error
}

function handleResponse(response: Data | Error) {
  if (isError(response)) {
    console.error(response.message)
    return
  }
  // response is now typed as Data
  processData(response)
}
\`\`\`

## Discriminated Unions

One of TypeScript's most powerful features:

\`\`\`typescript
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string }

function handleResult<T>(result: Result<T>) {
  if (result.success) {
    return result.data // TypeScript knows data exists here
  }
  throw new Error(result.error)
}
\`\`\`

## Conclusion

TypeScript is a powerful tool that can significantly improve your code quality. By following these best practices, you'll write more maintainable and type-safe code.
    `,
    image: "/blog-typescript-code-dark-theme.jpg",
    category: "TypeScript",
    tags: ["TypeScript", "Best Practices", "Programming"],
    date: "Dec 28, 2025",
    readTime: "12 min read",
    author: {
      name: "Ignatius Emeka Joshua",
      avatar: "/professional-software-engineer-portrait-dark-backg.png",
    },
  },
  {
    id: 3,
    title: "From Junior to Senior: A Developer's Journey",
    slug: "junior-to-senior-journey",
    excerpt:
      "Reflecting on my growth from a junior developer to a senior engineer, and the lessons learned along the way.",
    content: `
## The Beginning

Five years ago, I wrote my first line of professional code. I remember feeling overwhelmed by the codebase, intimidated by code reviews, and unsure if I'd ever feel confident as a developer.

Today, I lead technical initiatives and mentor junior developers. This is my story.

## Year 1: Survival Mode

As a junior developer, my focus was on survival. I spent hours understanding basic concepts that my colleagues seemed to know intuitively. Key lessons:

- **Ask questions**: No question is too basic
- **Read code**: The best way to learn is by reading others' code
- **Take notes**: Document everything you learn

## Year 2: Building Confidence

By year two, I started contributing meaningfully to projects. I understood the codebase better and could estimate tasks more accurately.

- **Own your mistakes**: They're opportunities to learn
- **Seek feedback**: Regular feedback accelerates growth
- **Start mentoring**: Teaching solidifies knowledge

## Year 3: Technical Depth

This was when I started going deeper into technologies. I understood not just how to use tools, but why they work the way they do.

- **Read documentation thoroughly**: Don't just skim
- **Build side projects**: Experimentation drives learning
- **Contribute to open source**: Real-world experience

## Year 4-5: Leadership

The transition to senior engineer was about more than technical skills. It required:

- **Communication**: Explaining complex concepts simply
- **Empathy**: Understanding team dynamics
- **Vision**: Seeing beyond immediate tasks

## Key Takeaways

1. Growth is not linear
2. Soft skills matter as much as technical skills
3. Everyone's journey is different
4. Stay curious and humble

The journey continues, and I'm excited to see where it leads.
    `,
    image: "/blog-career-growth-dark-theme.jpg",
    category: "Career",
    tags: ["Career", "Growth", "Advice"],
    date: "Dec 15, 2025",
    readTime: "6 min read",
    author: {
      name: "Ignatius Emeka Joshua",
      avatar: "/professional-software-engineer-portrait-dark-backg.png",
    },
  },
  {
    id: 4,
    title: "Advanced K8s Orchestration Patterns",
    slug: "advanced-k8s-orchestration",
    excerpt: "Deep dive into Kubernetes orchestration patterns for production-grade applications.",
    content: `
## Introduction

Kubernetes has become the de facto standard for container orchestration. Let's explore advanced patterns for production deployments.

## Deployment Strategies

### Blue-Green Deployments

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  selector:
    app: my-app
    version: blue
  ports:
    - port: 80
\`\`\`

### Canary Releases

Gradually roll out changes to a small subset of users before full deployment.

## Conclusion

Master these patterns to build resilient, scalable infrastructure.
    `,
    image: "/blog-docker-containers-dark-theme.jpg",
    category: "DevOps",
    tags: ["Kubernetes", "DevOps", "Infrastructure"],
    date: "Dec 10, 2025",
    readTime: "10 min read",
    author: {
      name: "Ignatius Emeka Joshua",
      avatar: "/professional-software-engineer-portrait-dark-backg.png",
    },
  },
  {
    id: 5,
    title: "PostgreSQL Tuning for High Write Load",
    slug: "postgresql-tuning-high-write",
    excerpt: "Optimize PostgreSQL for write-heavy workloads with these proven techniques.",
    content: `
## Introduction

Write-heavy workloads require special attention to PostgreSQL configuration.

## Key Configuration Parameters

\`\`\`sql
-- Increase checkpoint segments
ALTER SYSTEM SET max_wal_size = '4GB';
ALTER SYSTEM SET checkpoint_completion_target = 0.9;

-- Optimize for writes
ALTER SYSTEM SET synchronous_commit = 'off';
\`\`\`

## Conclusion

Proper tuning can dramatically improve write performance.
    `,
    image: "/blog-chat-app-tutorial-dark-theme.jpg",
    category: "Database",
    tags: ["PostgreSQL", "Database", "Performance"],
    date: "Dec 5, 2025",
    readTime: "7 min read",
    author: {
      name: "Ignatius Emeka Joshua",
      avatar: "/professional-software-engineer-portrait-dark-backg.png",
    },
  },
]

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3)

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <BlogArticle post={post} relatedPosts={relatedPosts} />
      </main>
      <Footer />
    </>
  )
}
