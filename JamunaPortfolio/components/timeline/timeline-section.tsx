"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, BookOpen, School, Star, Trophy, Calendar } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const educationData = [
    {
        id: "college",
        title: "B.Tech in Artificial Intelligence & Machine Learning",
        institution: "Kongu Engineering College",
        location: "Anna University | Perundurai, Erode",
        period: "2023 - 2027",
        status: "Present",
        score: "CGPA: 9.14",
        scoreIcon: Star,
        icon: GraduationCap,
        color: "from-indigo-500 to-purple-600",
        glow: "shadow-[0_0_20px_rgba(99,102,241,0.3)]",
        size: "large"
    },
    {
        id: "hsc",
        title: "Higher Secondary Certificate (HSC)",
        institution: "Perumanallur Govt. Girls Higher Secondary School",
        location: "Perumanallur, Tiruppur",
        period: "2022 - 2023",
        status: "Completed",
        score: "Percentage: 89.83%",
        scoreIcon: Trophy,
        icon: School,
        color: "from-purple-500 to-violet-600",
        glow: "shadow-[0_0_20px_rgba(139,92,246,0.3)]",
        size: "medium"
    },
    {
        id: "sslc",
        title: "Secondary School Leaving Certificate (SSLC)",
        institution: "Pitchampalayam Govt High School",
        location: "Pitchampalayam, Tiruppur",
        period: "2020 - 2021",
        status: "Completed",
        score: "Completed",
        scoreIcon: BookOpen, // Fallback icon
        icon: BookOpen,
        color: "from-violet-500 to-fuchsia-600",
        glow: "shadow-[0_0_20px_rgba(167,139,250,0.3)]",
        size: "normal"
    }
];

export function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Animate the vertical line drawing downwards
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="education" className="py-24 px-4 overflow-hidden relative">
            <div className="container mx-auto" ref={containerRef}>
                {/* Header */}
                <div className="text-center mb-20 scroll-m-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4"
                    >
                        My Educational Journey
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "200px" }}
                        className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4"
                    />
                    <p className="text-muted-foreground">From Foundation to Expertise</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line Background (Static) */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full" />

                    {/* Vertical Line Animated (Fills on scroll) */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)] z-0"
                    />

                    <div className="space-y-16 md:space-y-24">
                        {educationData.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className={cn(
                                        "relative flex flex-col md:flex-row items-center gap-8 md:gap-0",
                                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    )}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-background border-4 border-indigo-500 z-10 shadow-[0_0_20px_rgba(99,102,241,0.6)] group">
                                        <div className="absolute inset-0 rounded-full bg-white/50 animate-ping opacity-30" />
                                        <div className="w-full h-full bg-white rounded-full scale-0 group-hover:scale-50 transition-transform duration-300" />
                                    </div>

                                    {/* Card Container */}
                                    <div className={cn(
                                        "w-full md:w-[45%] pl-12 md:pl-0",
                                        index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                                    )}>
                                        <motion.div
                                            whileHover={{ y: -6, scale: 1.02 }}
                                            className={cn(
                                                "relative p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md overflow-hidden group transition-all duration-300",
                                                item.size === "large" ? "bg-indigo-500/5 hover:bg-indigo-500/10 border-indigo-500/20" :
                                                    item.size === "medium" ? "bg-purple-500/5 hover:bg-purple-500/10 border-purple-500/20" :
                                                        "bg-violet-500/5 hover:bg-violet-500/10 border-violet-500/20",
                                                item.glow
                                            )}
                                        >
                                            {/* Top Highlight Gradient */}
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                            <div className={cn(
                                                "flex flex-col gap-4",
                                                index % 2 === 0 ? "md:items-end" : "md:items-start"
                                            )}>
                                                {/* Header Portion */}
                                                <div className="flex items-center gap-3 mb-1">
                                                    <div className={cn(
                                                        "p-2 rounded-lg bg-gradient-to-br text-white shadow-lg",
                                                        item.color
                                                    )}>
                                                        <item.icon className="w-5 h-5" />
                                                    </div>
                                                    <span className={cn(
                                                        "px-3 py-1 rounded-full text-xs font-bold border",
                                                        item.status === "Present"
                                                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                                                            : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                                    )}>
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" /> {item.period}
                                                            {item.status === "Present" && (
                                                                <span className="relative flex h-2 w-2 ml-1">
                                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                                </span>
                                                            )}
                                                        </span>
                                                    </span>
                                                </div>

                                                {/* Content Portion */}
                                                <div>
                                                    <h3 className={cn("font-bold text-white mb-1", item.size === "large" ? "text-2xl" : "text-xl")}>
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-base font-medium text-purple-300">{item.institution}</p>
                                                    {item.location && <p className="text-sm text-gray-500 mt-1">{item.location}</p>}
                                                </div>

                                                {/* Score/Badge */}
                                                {item.score !== "Completed" && (
                                                    <div className={cn(
                                                        "mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2e1d40] border border-white/5 shadow-lg",
                                                    )}>
                                                        <item.scoreIcon className="w-5 h-5 text-purple-400 fill-purple-800" />
                                                        <span className="text-base font-bold text-white">{item.score}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Empty Space for layout balance */}
                                    <div className="hidden md:block w-[45%]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
