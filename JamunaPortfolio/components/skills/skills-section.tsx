"use client";

import { useRef, useState } from "react";
import { HexagonGrid } from "./hexagon-grid";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { Award, Cloud, ExternalLink, CheckCircle2, Sparkles, Database, Server } from "lucide-react";

// --- 3D TILT CARD COMPONENT ---
interface CertificationCardProps {
    title: string;
    issuer: string;
    date: string;
    icon: React.ReactNode;
    color: string; // Hex color
    link: string;
    proficiency: number;
}

function CertificationCard({ title, issuer, date, icon, color, link, proficiency }: CertificationCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative h-full perspective-1000"
        >
            {/* Animated Glow Behind */}
            <div
                className="absolute inset-0 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"
                style={{ background: color }}
            />

            {/* Main Card */}
            <div
                className="relative h-full bg-purple/90 backdrop-blur-xl border-[3px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)]"
                style={{ borderColor: color }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Decorative Corner Accent */}
                <div
                    className="absolute -top-10 -right-10 w-24 h-24 rotate-45 opacity-20 transition-transform duration-500 group-hover:scale-150"
                    style={{ background: color }}
                />

                <div className="relative p-8 flex flex-col h-full transform-style-3d">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        {/* Icon Container with Bounce */}
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                            style={{
                                background: `linear-gradient(135deg, ${color}, ${adjustColor(color, -40)})`
                            }}
                        >
                            <div className="w-8 h-8">
                                {icon}
                            </div>
                        </div>

                        {/* Badge with Sparkles */}
                        <div className="relative group/badge">
                            <span
                                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300 group-hover/badge:scale-105"
                                style={{
                                    backgroundColor: `${color}15`, // Digits for opacity 
                                    color: color,
                                    boxShadow: `0 0 0 1px ${color}30`
                                }}
                            >
                                <Sparkles className="w-3 h-3 animate-pulse" /> Certified
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                        <h4 className="text-2xl font-bold text-white-900 mb-2 leading-tight transition-colors duration-300">
                            {title}
                        </h4>
                        <p className="text-gray-500 font-medium text-sm mb-6 flex items-center gap-2">
                            {issuer} <span className="w-1 h-1 rounded-full bg-gray-300" /> {date}
                        </p>

                        {/* Proficiency Bar */}
                        <div className="mb-6">
                            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider mb-2 text-gray-400">
                                <span>Proficiency</span>
                                <span style={{ color }}>{proficiency}%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${proficiency}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                    className="h-full rounded-full"
                                    style={{ background: color }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Footer / Link */}
                    <div className="mt-auto pt-6 border-t border-gray-100">
                        <a
                            href={link}
                            target="_blank"
                            className="group/btn flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 overflow-hidden relative"
                            style={{ background: `linear-gradient(to right, ${color}, ${adjustColor(color, -20)})` }}
                        >
                            {/* Button Shimmer */}
                            <div className="absolute inset-0 content-[''] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 ease-in-out group-hover/btn:translate-x-full w-full" />

                            View Credential
                            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Helper to darken/lighten color roughly
function adjustColor(color: string, amount: number) {
    return color; // Simplification, real implementation would convert hex to rgb
}


// --- MAIN SECTION COMPONENT ---
export function SkillsSection() {
    return (
        <section id="skills" className="py-24 px-4 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
            <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs border border-primary/20 px-3 py-1 rounded-full bg-primary/5">
                        My Toolkit
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-6 tracking-tight">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        A showcase of my technical arsenal, from databases to frontend frameworks, backed by professional certifications.
                    </p>
                </div>

                <HexagonGrid />

                {/* Certification Showcase - Premium Style */}
                <div className="mt-32 relative">
                    <div className="flex items-center justify-center gap-6 mb-16">
                        <div className="h-[2px] bg-gradient-to-r from-transparent via-black-700 to-transparent w-32"></div>
                        <h3 className="text-3xl font-bold text-center text-white flex items-center gap-3">
                            <Award className="w-8 h-8 text-yellow-400" /> Certifications
                        </h3>
                        <div className="h-[2px] bg-gradient-to-r from-transparent via-black-700 to-transparent w-32"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4 perspective-container">
                        <CertificationCard
                            title="MongoDB Associate Developer"
                            issuer="MongoDB"
                            date="2024"
                            icon={<Database className="w-full h-full" />}
                            color="#10B981" // Green
                            link="mongodb.jpeg"
                            proficiency={90}
                        />

                        <CertificationCard
                            title="Oracle APEX Cloud Developer"
                            issuer="Oracle"
                            date="2024"
                            icon={<Server className="w-full h-full" />}
                            color="#f34646ff" // Red/Orange
                            link="oracle.jpeg"
                            proficiency={80}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
