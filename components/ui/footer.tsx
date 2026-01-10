import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, ArrowUpRight } from "lucide-react"

const footerData = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { label: "Frontend Development" },
    { label: "Backend & API" },
    { label: "System Architecture" },
    { label: "Cloud Infrastructure" },
    { label: "Technical Consulting" },
  ],
  resources: [
    { href: "/blog?category=tutorials", label: "Tutorials" },
    { href: "/blog?category=engineering", label: "Engineering" },
    { href: "/work", label: "Case Studies" },
    { href: "/about#timeline", label: "Experience" },
  ],
  social: [
    { href: "https://github.com", label: "GitHub", icon: Github },
    { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
    { href: "https://twitter.com", label: "Twitter", icon: Twitter },
    { href: "mailto:hello@fusco.dev", label: "Email", icon: Mail },
  ],
  techStack: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                F
              </div>
              <span className="text-xl font-bold text-foreground">FUSCO.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Senior Software Engineer specializing in distributed systems, modern cloud architecture, and
              high-performance frontend interfaces. Building scalable solutions for complex problems.
            </p>

            {/* Status & Location */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-muted-foreground">Available for new projects</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={14} className="text-primary" />
                <span>5+ years of experience</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {footerData.social.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerData.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {footerData.services.map((service) => (
                <li key={service.label}>
                  <span className="text-muted-foreground text-sm">{service.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerData.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Built with</span>
            <div className="flex flex-wrap justify-center gap-2">
              {footerData.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Ignatius Emeka Joshua. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
