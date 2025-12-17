import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { TimelineSection } from "@/components/timeline/timeline-section";
import { AchievementsSection } from "@/components/achievements/achievements-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer";
import { CustomCursor, FloatingControls } from "@/components/ui/floating-elements";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative">
      <CustomCursor />
      <FloatingControls />

      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <SkillsSection />

      <TimelineSection />

      <AchievementsSection />

      <ContactSection />

      <Footer />
    </main>
  )
}


