"use client"

import { motion, Variants } from "framer-motion"
import { useEffect, useState } from "react"

export type JamBotMode = "walking-in" | "idle" | "walking-out" | "jumping" | "talking"

interface JamBotProps {
    mode: JamBotMode
}

export function JamBot({ mode }: JamBotProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate normalized eye movement (-1 to 1)
            const x = (e.clientX / window.innerWidth) * 2 - 1
            const y = (e.clientY / window.innerHeight) * 2 - 1
            setMousePosition({ x, y })
        }

        if (mode === "idle" || mode === "talking") {
            window.addEventListener("mousemove", handleMouseMove)
        }

        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mode])

    // --- ANIMATION VARIANTS ---
    const bodyVariants: Variants = {
        "walking-in": { y: [0, -6, 0], rotate: [0, 2, -2, 0] },
        "walking-out": { y: [0, -6, 0], rotate: [0, -2, 2, 0] },
        "idle": { y: [0, -4, 0], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } },
        "jumping": { scaleY: [1, 0.9, 1.1, 1], y: [0, 10, -50, 0] },
        "talking": { y: [0, -2, 0], transition: { repeat: Infinity, duration: 0.5 } }
    }

    const armVariants: Variants = {
        "walking-in": { rotate: [-20, 20, -20] },
        "walking-out": { rotate: [20, -20, 20] },
        "idle": { rotate: [0, 5, 0], transition: { repeat: Infinity, duration: 2 } },
        "jumping": { rotate: [0, -150, 0] } // Arms up!
    }

    const legVariants: Variants = {
        "walking-in": { y: [0, -5, 0] },
        "walking-out": { y: [0, -5, 0] },
        "idle": { y: 0 }
    }

    // Separate leg variants for walk cycle
    const leftLegVariants: Variants = {
        "walking-in": { y: [0, -10, 0], rotate: [-10, 15, -10] },
        "walking-out": { y: [0, -10, 0], rotate: [10, -15, 10] },
        "idle": { y: 0, rotate: 0 }
    }

    const rightLegVariants: Variants = {
        "walking-in": { y: [-10, 0, -10], rotate: [10, -15, 10] },
        "walking-out": { y: [-10, 0, -10], rotate: [-10, 15, -10] },
        "idle": { y: 0, rotate: 0 }
    }


    const isWalking = mode === "walking-in" || mode === "walking-out"

    return (
        <motion.div
            className="relative w-56 h-56 md:w-72 md:h-72"
            animate={
                mode === "jumping" ? { y: [0, 10, -50, 0] } : {}
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="relative w-full h-full flex flex-col items-center justify-center">

                {/* Glow/Aura - Pink/Purple Theme */}
                <div className="absolute top-10 inset-x-0 mx-auto w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

                {/* --- BODY CONTAINER --- */}
                <motion.div
                    className="relative z-10"
                    variants={bodyVariants}
                    animate={mode}
                    transition={{
                        duration: isWalking ? 0.6 : 0.5,
                        repeat: isWalking ? Infinity : 0,
                        ease: "linear"
                    }}
                >
                    {/* SVG ViewBox adjusted for new proportions */}
                    <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-2xl overflow-visible">

                        <defs>
                            {/* Main Body Gradient (White/Gray) */}
                            <linearGradient id="bodyGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#ffffff" />
                                <stop offset="100%" stopColor="#e2e8f0" />
                            </linearGradient>

                            {/* Pink-Purple Gradient for Features */}
                            <linearGradient id="featureGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#ec4899" />
                                <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>

                            {/* Accent Glow */}
                            <linearGradient id="accentGradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                            </linearGradient>
                        </defs>

                        {/* --- BACK ARM (Right Arm in perspective) --- */}
                        <motion.g
                            style={{ originX: "210px", originY: "180px" }} // Pivot at shoulder
                            variants={armVariants}
                            animate={mode}
                            transition={{ repeat: isWalking ? Infinity : 0, duration: 0.6 }}
                        >
                            <path
                                d="M210 180 Q 240 200 230 230"
                                stroke="#cbd5e1"
                                strokeWidth="20"
                                strokeLinecap="round"
                                fill="none"
                            />
                            {/* Hand */}
                            <circle cx="230" cy="230" r="15" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                        </motion.g>

                        {/* --- LEGS --- */}
                        {/* Left Leg */}
                        <motion.g
                            variants={leftLegVariants}
                            animate={mode}
                            transition={{ repeat: Infinity, duration: 0.6 }}
                            style={{ originY: "0px", originX: "120px" }}
                        >
                            {/* Upper Leg */}
                            <path d="M120 240 L115 270" stroke="#cbd5e1" strokeWidth="22" strokeLinecap="round" />
                            {/* Foot */}
                            <path d="M100 270 Q 115 285 130 270 L 130 260 L 100 260 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                            {/* Joint Accent */}
                            <circle cx="120" cy="240" r="8" fill="url(#accentGradient)" />
                        </motion.g>

                        {/* Right Leg */}
                        <motion.g
                            variants={rightLegVariants}
                            animate={mode}
                            transition={{ repeat: Infinity, duration: 0.6 }}
                            style={{ originY: "0px", originX: "180px" }}
                        >
                            {/* Upper Leg */}
                            <path d="M180 240 L185 270" stroke="#cbd5e1" strokeWidth="22" strokeLinecap="round" />
                            {/* Foot */}
                            <path d="M170 270 Q 185 285 200 270 L 200 260 L 170 260 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                            {/* Joint Accent */}
                            <circle cx="180" cy="240" r="8" fill="url(#accentGradient)" />
                        </motion.g>

                        {/* --- BODY --- */}
                        {/* Main Torso - Rounded/Compact */}
                        <ellipse cx="150" cy="210" rx="55" ry="45" fill="url(#bodyGradient)" stroke="#cbd5e1" strokeWidth="2" />

                        {/* Chest Emblem */}
                        <path d="M135 200 L165 200 L150 225 Z" fill="#1e293b" />
                        <circle cx="150" cy="210" r="5" fill="#ec4899" className="animate-pulse" />

                        {/* Neck */}
                        <rect x="135" y="165" width="30" height="15" fill="#334155" rx="5" />

                        {/* --- HEAD --- */}
                        <g transform="translate(0, -10)">
                            {/* Helmet shape */}
                            <path
                                d="M 70 120 C 70 60 100 20 150 20 C 200 20 230 60 230 120 C 230 150 210 175 150 175 C 90 175 70 150 70 120 Z"
                                fill="url(#bodyGradient)"
                                stroke="#cbd5e1"
                                strokeWidth="2"
                            />

                            {/* Side Ear Panels */}
                            <circle cx="65" cy="110" r="18" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                            <circle cx="65" cy="110" r="8" fill="url(#accentGradient)" />

                            <circle cx="235" cy="110" r="18" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                            <circle cx="235" cy="110" r="8" fill="url(#accentGradient)" />

                            {/* Face Screen - Black Glass */}
                            <path
                                d="M 85 110 C 85 70 110 45 150 45 C 190 45 215 70 215 110 C 215 140 190 155 150 155 C 110 155 85 140 85 110 Z"
                                fill="#0f172a"
                                stroke="#334155"
                                strokeWidth="2"
                            />

                            {/* --- FACE FEATURES (Animated) --- */}
                            <g style={{
                                transform: `translate(${mousePosition.x * 6}px, ${mousePosition.y * 4}px)`,
                                transition: "transform 0.1s ease-out"
                            }}>
                                {/* Eyes - Semicircles (Happy) */}
                                <motion.path
                                    d="M 110 100 Q 125 90 140 100"
                                    stroke="url(#featureGradient)"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    fill="none"
                                    animate={{ scaleY: [1, 0.1, 1] }} // Blink
                                    transition={{ repeat: Infinity, duration: 3, times: [0, 0.95, 1] }}
                                />
                                <motion.path
                                    d="M 160 100 Q 175 90 190 100"
                                    stroke="url(#featureGradient)"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    fill="none"
                                    animate={{ scaleY: [1, 0.1, 1] }} // Blink
                                    transition={{ repeat: Infinity, duration: 3, times: [0, 0.95, 1] }}
                                />

                                {/* Mouth - Smiling */}
                                <motion.path
                                    d="M 135 125 Q 150 135 165 125"
                                    stroke="url(#featureGradient)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    fill="none"
                                    animate={mode === "talking" ? { d: ["M 135 125 Q 150 135 165 125", "M 135 125 Q 150 115 165 125", "M 135 125 Q 150 135 165 125"] } : {}}
                                    transition={{ repeat: Infinity, duration: 0.3 }}
                                />
                            </g>
                        </g>

                        {/* --- FRONT ARM (Left Arm in perspective) --- */}
                        <motion.g
                            style={{ originX: "90px", originY: "180px" }} // Pivot at shoulder
                            variants={armVariants}
                            animate={mode}
                            transition={{ repeat: isWalking ? Infinity : 0, duration: 0.6 }}
                        >
                            <path
                                d="M90 180 Q 70 210 90 230"
                                stroke="#cbd5e1"
                                strokeWidth="20"
                                strokeLinecap="round"
                                fill="none"
                            />
                            {/* Hand */}
                            <circle cx="90" cy="230" r="15" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                        </motion.g>

                    </svg>
                </motion.div>
            </div>
        </motion.div>
    )
}
