"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const roles = ["AI/ML Enthusiast", "Full Stack Developer", "Problem Solver", "Tech Explorer"]

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const role = roles[currentRole]
    let index = 0

    const typeInterval = setInterval(() => {
      if (isTyping) {
        if (index < role.length) {
          setDisplayText(role.substring(0, index + 1))
          index++
        } else {
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(true)
            setCurrentRole((prev) => (prev + 1) % roles.length)
            setDisplayText("")
            index = 0
          }, 2000)
        }
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentRole, isTyping])

  // Smooth scroll handlers
  const handleResumeClick = () => {
    const section = document.getElementById('resume-section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleContactClick = () => {
    const section = document.getElementById('contact-section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 sm:px-8 text-center relative z-10 py-16">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Jamunadevi
            </span>{" "}
            👋
          </h1>
          <div className="flex justify-center mb-4">
            <Avatar className="w-32 h-32">
              <AvatarImage src="/jamPhoto.jpg" alt="Jamunadevi photo" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>

          <div className="h-16 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              <span className="text-teal-400 font-medium">{displayText}</span>
              <span className="animate-pulse text-purple-400">|</span>
            </p>
          </div>

          <p className="text-xl md:text-2xl text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into smart and scalable solutions 🚀
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25"
            onClick={handleResumeClick}
          >
            <Download className="mr-2 h-5 w-5" />
            Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
            onClick={handleContactClick}
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>

        {/* Removed down arrow */}
      </div>
    </section>
  )
}
