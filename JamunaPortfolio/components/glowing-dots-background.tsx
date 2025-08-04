'use client'

import React, { useEffect, useRef } from 'react'

interface Dot {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export default function GlowingDotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const dotsRef = useRef<Dot[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create random dots
    const initDots = () => {
      const dots: Dot[] = []
      const numDots = 35
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          radius: 2 + Math.random() * 2
        })
      }
      dotsRef.current = dots
    }

    initDots()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dotsRef.current.forEach(dot => {
        dot.x += dot.vx
        dot.y += dot.vy

        // Bounce off edges
        if (dot.x <= 0 || dot.x >= canvas.width) dot.vx *= -1
        if (dot.y <= 0 || dot.y >= canvas.height) dot.vy *= -1

        // Outer glow (largest) - very subtle
        const outerGlow = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.radius * 15)
        outerGlow.addColorStop(0, 'rgba(0, 255, 255, 0.06)')
        outerGlow.addColorStop(0.4, 'rgba(0, 200, 255, 0.04)')
        outerGlow.addColorStop(1, 'rgba(0, 150, 255, 0)')
        
        ctx.fillStyle = outerGlow
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius * 15, 0, Math.PI * 2)
        ctx.fill()

        // Middle glow - very subtle
        const middleGlow = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.radius * 8)
        middleGlow.addColorStop(0, 'rgba(0, 255, 255, 0.15)')
        middleGlow.addColorStop(0.5, 'rgba(0, 255, 255, 0.08)')
        middleGlow.addColorStop(1, 'rgba(0, 255, 255, 0)')
        
        ctx.fillStyle = middleGlow
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius * 8, 0, Math.PI * 2)
        ctx.fill()

        // Inner core - very subtle
        const innerCore = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.radius * 3)
        innerCore.addColorStop(0, 'rgba(255, 255, 255, 0.25)')
        innerCore.addColorStop(0.3, 'rgba(200, 255, 255, 0.2)')
        innerCore.addColorStop(1, 'rgba(0, 255, 255, 0.12)')
        
        ctx.fillStyle = innerCore
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius * 3, 0, Math.PI * 2)
        ctx.fill()

        // Center dot - very subtle
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius * 0.8, 0, Math.PI * 2)
        ctx.fill()
      })

      // Beautiful connecting lines with glow
      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dot1 = dotsRef.current[i]
          const dot2 = dotsRef.current[j]
          const distance = Math.sqrt(
            Math.pow(dot1.x - dot2.x, 2) + Math.pow(dot1.y - dot2.y, 2)
          )
          if (distance < 200) {
            const opacity = (200 - distance) / 200
            
            // Outer glow line - very subtle
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.08})`
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.moveTo(dot1.x, dot1.y)
            ctx.lineTo(dot2.x, dot2.y)
            ctx.stroke()
            
            // Inner line - very subtle
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.15})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(dot1.x, dot1.y)
            ctx.lineTo(dot2.x, dot2.y)
            ctx.stroke()
            
            // Core line - very subtle
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.12})`
            ctx.lineWidth = 0.3
            ctx.beginPath()
            ctx.moveTo(dot1.x, dot1.y)
            ctx.lineTo(dot2.x, dot2.y)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 20,
        background: 'transparent'
      }}
    />
  )
}