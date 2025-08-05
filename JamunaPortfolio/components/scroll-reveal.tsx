"use client"

import { ReactNode } from 'react'
import { useScrollReveal, revealVariants, RevealVariant } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
  threshold?: number
  rootMargin?: string
}

export default function ScrollReveal({
  children,
  variant = 'fadeIn',
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollReveal({ threshold, rootMargin })

  const animationClasses = revealVariants[variant]
  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {}

  return (
    <div
      ref={elementRef}
      className={cn(
        isVisible ? animationClasses.visible : animationClasses.hidden,
        className
      )}
      style={delayStyle}
    >
      {children}
    </div>
  )
}

// Staggered reveal component for multiple children
interface StaggeredRevealProps {
  children: ReactNode[]
  variant?: RevealVariant
  staggerDelay?: number
  className?: string
  threshold?: number
  rootMargin?: string
}

export function StaggeredReveal({
  children,
  variant = 'slideUp',
  staggerDelay = 100,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}: StaggeredRevealProps) {
  return (
    <>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          variant={variant}
          delay={index * staggerDelay}
          className={className}
          threshold={threshold}
          rootMargin={rootMargin}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  )
}
