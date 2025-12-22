"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface SpeechBubbleProps {
    text: string
    onComplete?: () => void
    duration?: number
    isTyping?: boolean
}

export function SpeechBubble({ text, onComplete, duration = 2000, isTyping = false }: SpeechBubbleProps) {
    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        if (isTyping) {
            let currentText = ""
            const words = text.split("")
            let i = 0

            const interval = setInterval(() => {
                if (i < words.length) {
                    currentText += words[i]
                    setDisplayedText(currentText)
                    i++
                } else {
                    clearInterval(interval)
                }
            }, 50) // Typing speed

            return () => clearInterval(interval)
        } else {
            setDisplayedText(text)
        }
    }, [text, isTyping])

    return (
        <motion.div
            layout // Enable automatic layout animation
            initial={{ opacity: 0, scale: 0, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                layout: { duration: 0.1, type: "tween", ease: "easeOut" } // Smooth expansion
            }}
            className="absolute left-[65%] md:left-[60%] top-4 md:top-10 z-50 pointer-events-none origin-bottom-left"
        >
            <motion.div
                layout
                className="relative bg-white text-black px-6 py-4 rounded-3xl shadow-xl w-fit max-w-[280px]"
                style={{ borderRadius: "2rem 2rem 2rem 0.5rem" }} // More organic growing shape
            >
                <motion.p layout className="font-bold text-lg md:text-xl leading-tight whitespace-pre-wrap">
                    {displayedText}
                    {isTyping && displayedText.length < text.length && <span className="animate-pulse ml-0.5">|</span>}
                </motion.p>

                {/* Comic Bubble Tail (Dots) */}
                <div className="absolute top-full left-0 flex flex-col items-center -space-y-1 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
                    <div className="w-2 h-2 bg-white rounded-full shadow-sm translate-x-1 translate-y-1"></div>
                </div>
            </motion.div>
        </motion.div>
    )
}
