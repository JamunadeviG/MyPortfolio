"use client"

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { elementRef, isVisible }
}

// Animation variants for different reveal types
export const revealVariants = {
  fadeIn: {
    hidden: 'opacity-0',
    visible: 'opacity-100 transition-all duration-1000 ease-out'
  },
  slideUp: {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0 transition-all duration-1000 ease-out'
  },
  slideDown: {
    hidden: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0 transition-all duration-1000 ease-out'
  },
  slideLeft: {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0 transition-all duration-1000 ease-out'
  },
  slideRight: {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0 transition-all duration-1000 ease-out'
  },
  zoomIn: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100 transition-all duration-1000 ease-out'
  },
  zoomOut: {
    hidden: 'opacity-0 scale-105',
    visible: 'opacity-100 scale-100 transition-all duration-1000 ease-out'
  }
}

export type RevealVariant = keyof typeof revealVariants
