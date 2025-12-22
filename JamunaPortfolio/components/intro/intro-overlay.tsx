"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { JamBot, JamBotMode } from "./jambot"
import { SpeechBubble } from "./speech-bubble"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"

interface IntroOverlayProps {
    onComplete: () => void
}

type IntroStage = "walking-in" | "arrived" | "talking-1" | "talking-2" | "talking-3" | "waiting" | "walking-out"

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
    const [stage, setStage] = useState<IntroStage>("walking-in")
    const [botMode, setBotMode] = useState<JamBotMode>("walking-in")
    const [xPos, setXPos] = useState("-100vw")

    // --- SEQUENCER ---
    useEffect(() => {
        // Stage 1: Walk In
        const walkInTimer = setTimeout(() => {
            setXPos("0px") // Walk to center
        }, 100)

        // Stage 2: Stop & Jump
        const arriveTimer = setTimeout(() => {
            setStage("arrived")
            setBotMode("jumping")
        }, 2500) // Match transition duration

        // Stage 3: Settle & Talk 1
        const talk1Timer = setTimeout(() => {
            setBotMode("idle")
            setStage("talking-1")
        }, 3200)

        // Talk 2
        const talk2Timer = setTimeout(() => {
            setStage("talking-2")
            setBotMode("talking")
        }, 5500)

        // Talk 3
        const talk3Timer = setTimeout(() => {
            setStage("talking-3")
            setBotMode("idle")
        }, 8500)

        // Button Ready
        const waitTimer = setTimeout(() => {
            setStage("waiting")
        }, 11000)

        return () => {
            clearTimeout(walkInTimer)
            clearTimeout(arriveTimer)
            clearTimeout(talk1Timer)
            clearTimeout(talk2Timer)
            clearTimeout(talk3Timer)
            clearTimeout(waitTimer)
        }
    }, [])

    const handleStart = () => {
        setStage("walking-out")
        setBotMode("walking-out")
        setXPos("150vw") // Walk off screen right

        setTimeout(() => {
            onComplete()
        }, 2000)
    }

    const handleSkip = () => {
        onComplete()
    }

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 overflow-hidden"
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            {/* Skip */}
            <button
                onClick={handleSkip}
                className="absolute top-8 right-8 text-muted-foreground/50 hover:text-foreground transition-colors z-[60] flex items-center gap-1 text-sm font-semibold uppercase tracking-widest"
            >
                Skip <X className="w-4 h-4" />
            </button>

            {/* --- SCENE CONTAINER --- */}
            <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center overflow-visible">

                {/* BOT */}
                <motion.div
                    className="absolute z-20"
                    initial={{ x: "-100vw" }}
                    animate={{ x: xPos }}
                    transition={{
                        duration: stage === "walking-in" ? 2.5 : 2,
                        ease: stage === "walking-in" ? "easeOut" : "easeIn"
                    }}
                >
                    <JamBot mode={botMode} />

                    {/* SPEECH BUBBLES - Anchored to Bot */}
                    <AnimatePresence mode="wait">
                        {stage === "talking-1" && (
                            <SpeechBubble key="1" text="Hi! 👋" isTyping={true} />
                        )}
                        {stage === "talking-2" && (
                            <SpeechBubble key="2" text={"Welcome to Jamunadevi's\nPortfolio! ✨"} isTyping={true} />
                        )}
                        {stage === "talking-3" && (
                            <SpeechBubble key="3" text={"Ready to explore\namazing projects? "} isTyping={true} />
                        )}
                        {stage === "walking-out" && (
                            <SpeechBubble key="4" text="Let's go!" />
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* START BUTTON - Below */}
                <AnimatePresence>
                    {stage === "waiting" && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute bottom-20 z-10"
                        >
                            <Button
                                size="lg"
                                onClick={handleStart}
                                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-8 py-6 rounded-full text-xl shadow-2xl shadow-indigo-500/50 hover:scale-105 transition-all duration-300 ring-4 ring-white/10"
                            >
                                START EXPLORING <ArrowRight className="ml-2 w-6 h-6 animate-pulse" />
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
            {/* BACKGROUND AMBIANCE */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Stars/Particles would go here */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-20" style={{ animationDuration: "3s" }} />
                <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping opacity-30" style={{ animationDuration: "5s" }} />
            </div>

        </motion.div>
    )
}
