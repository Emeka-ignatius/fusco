import type { Metadata } from "next";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { AboutHero } from "@/components/about/about-hero";
import { StorySection } from "@/components/about/story-section";
import { TimelineSection } from "@/components/about/timeline-section";
import { SkillsDeepDive } from "@/components/about/skills-deep-dive";
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
        <ValuesSection />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
