"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Send } from "lucide-react";
import Link from "next/link";
import { TextReveal } from "./text-reveal";
import { GlassCard } from "../ui/glass-card";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
            {/* Floating Particles/Shapes Background (CSS/SVG) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Abstract circles */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl mix-blend-screen opacity-0"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ y: [0, 30, 0], x: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl mix-blend-screen opacity-0"
                />
            </div>

            <div className="container relative z-10 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Column 2: Photo (Order 1 on Mobile, Order 2 on Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                    >
                        {/* Photo Container */}
                        <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]">
                            {/* Animated Gradient Border */}
                            <div className="absolute inset-[-6px] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow blur-sm opacity-70" style={{ animationDuration: '8s' }} />
                            <div className="absolute inset-[-6px] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow opacity-100" style={{ animationDuration: '8s' }} />

                            {/* Glassmorphism Ring */}
                            <div className="absolute inset-[-20px] rounded-full border border-white/10 backdrop-blur-[2px] z-0 animate-pulse-slow" />

                            {/* Main Image Container with Float Animation */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-black/20 z-10 shadow-[0_20px_60px_rgba(99,102,241,0.4)] group"
                            >
                                {/* Actual Image */}
                                {(
                                    <img
                                        src="/jamPhoto.jpg"
                                        alt="JamunadeviG"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}

                                {/* Overlay glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </motion.div>

                            {/* Floating Particles around photo */}
                            <motion.div
                                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-pink-500 blur-sm mix-blend-screen"
                            />
                            <motion.div
                                animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-8 -left-8 w-8 h-8 rounded-full bg-indigo-500 blur-sm mix-blend-screen"
                            />
                        </div>
                    </motion.div>

                    {/* Column 1: Text Content (Order 2 on Mobile, Order 1 on Desktop) */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <GlassCard className="backdrop-blur-sm bg-background/30 border-white/5 inline-block w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-6 p-4 md:p-8"
                            >
                                <motion.h2
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg md:text-xl font-medium text-primary tracking-wider uppercase"
                                >
                                    Hello, I'm
                                </motion.h2>

                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                    <span className="text-gradient">Jamunadevi G</span>
                                </h1>

                                <div className="flex justify-center lg:justify-start">
                                    <TextReveal
                                        text="AI-Driven Full-Stack Engineer"
                                        className="text-2xl md:text-3xl font-light text-foreground/80"
                                        delay={0.5}
                                    />
                                </div>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 1 }}
                                    className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
                                >
                                    Crafting immersive web experiences with modern technologies.
                                    Merging creativity with code to build scalable solutions.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5 }}
                                    className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6"
                                >
                                    <Link href="/resume.pdf" target="_blank" className="relative group overflow-hidden rounded-full w-full sm:w-auto">
                                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-white font-medium flex items-center justify-center gap-2 relative z-10 transition-transform group-hover:scale-[0.98]">
                                            <FileText className="w-4 h-4" />
                                            Resume
                                        </button>
                                    </Link>

                                    <Link href="#contact" className="relative group overflow-hidden rounded-full w-full sm:w-auto">
                                        <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 text-foreground font-medium flex items-center justify-center gap-2 backdrop-blur-md transition-all group-hover:scale-[0.98]">
                                            <Send className="w-4 h-4" />
                                            Contact Me
                                        </button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </GlassCard>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hidden md:block"
                onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <div className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="w-5 h-5" />
                </div>
            </motion.div>
        </section>
    );
}
