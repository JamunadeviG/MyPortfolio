"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { TimelineSection } from "@/components/timeline/timeline-section";
import { AchievementsSection } from "@/components/achievements/achievements-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer";
import { CustomCursor, FloatingControls } from "@/components/ui/floating-elements";
import { IntroOverlay } from "@/components/intro/intro-overlay";
import { StickyNavbar } from "@/components/nav/sticky-navbar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showIntro, setShowIntro] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    console.log('Checking intro status...')
    const hasSeenIntro = localStorage.getItem("jambot_intro_seen")
    console.log('Has seen intro:', hasSeenIntro)

    if (hasSeenIntro) {
      // console.log('Skipping intro')
      // setShowIntro(false)
      // setShowContent(true)

      // DEBUG: Force show even if visited
      console.log('Showing intro! (FORCED DEBUG)')
      setShowIntro(true)
      setShowContent(false)
    } else {
      console.log('Showing intro!')
      setShowIntro(true)
      setShowContent(false)
    }

    const timer = setTimeout(() => setIsLoading(false), 50)
    return () => clearTimeout(timer)
  }, [])

  console.log('Render state:', { isLoading, showIntro, showContent })

  const handleIntroComplete = () => {
    localStorage.setItem("jambot_intro_seen", "true")
    setShowIntro(false)
    setShowContent(true)
  }

  // Prevent flash by showing a neutral background or nothing while checking storage
  if (isLoading) {
    return <div className="min-h-screen bg-background" />
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      <CustomCursor />

      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroOverlay key="intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col relative w-full"
          >
            <FloatingControls />
            <StickyNavbar />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <TimelineSection />
            <AchievementsSection />
            <ContactSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
