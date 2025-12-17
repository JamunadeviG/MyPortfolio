"use client";

import { HexagonGrid } from "./hexagon-grid";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { Award, Cloud, ExternalLink, CheckCircle2 } from "lucide-react";

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Technical Skills</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        A comprehensive overview of my technical proficiency, tools, and certifications.
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
                    {[
                        { label: "Technologies", value: "20+" },
                        { label: "Certifications", value: "2" },
                        { label: "Awards", value: "2" },
                        { label: "CGPA", value: "9.14" }
                    ].map((stat, i) => (
                        <GlassCard key={i} className="p-4 text-center border-white/5">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</h3>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                        </GlassCard>
                    ))}
                </div>

                <HexagonGrid />

                {/* Certification Showcase */}
                <div className="mt-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-24"></div>
                        <h3 className="text-3xl font-bold text-center text-white">Certifications & Credentials</h3>
                        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-24"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* MongoDB Card - Green Theme */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="group relative cursor-pointer"
                        >
                            {/* Animated Green Border */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ED64] via-[#13AA52] to-[#00684A] opacity-50 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-pulse" />

                            <div className="relative h-full bg-black/40 backdrop-blur-xl border border-[#00ED64]/30 p-8 rounded-2xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 shadow-[0_8px_32px_rgba(0,237,100,0.1)] group-hover:shadow-[0_8px_32px_rgba(0,237,100,0.3)]">
                                {/* Shimmer Overlay */}
                                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                                <div className="relative z-10 flex flex-col items-center text-center gap-6">
                                    <div className="w-20 h-20 rounded-full bg-[#00ED64]/10 border border-[#00ED64]/30 flex items-center justify-center group-hover:rotate-[5deg] transition-transform duration-500">
                                        <Award className="w-10 h-10 text-[#00ED64]" />
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#00ED64] to-[#13AA52]">
                                            MongoDB Associate Developer
                                        </h4>
                                        <p className="text-[#00ED64]/80 font-medium flex items-center justify-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" /> Certified
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Issued: 2024</p>
                                    </div>

                                    <a href="#" className="mt-2 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#00ED64]/20 to-[#13AA52]/20 border border-[#00ED64]/30 text-[#00ED64] text-sm font-semibold group-hover:scale-105 group-hover:bg-[#00ED64]/30 transition-all duration-300">
                                        View Credential <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Oracle APEX Card - Red Theme */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="group relative cursor-pointer"
                        >
                            {/* Animated Red Border */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F80000] via-[#C74634] to-[#8B0000] opacity-50 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-pulse" />

                            <div className="relative h-full bg-black/40 backdrop-blur-xl border border-[#F80000]/30 p-8 rounded-2xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 shadow-[0_8px_32px_rgba(248,0,0,0.1)] group-hover:shadow-[0_8px_32px_rgba(248,0,0,0.3)]">
                                {/* Shimmer Overlay */}
                                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                                <div className="relative z-10 flex flex-col items-center text-center gap-6">
                                    <div className="w-20 h-20 rounded-full bg-[#F80000]/10 border border-[#F80000]/30 flex items-center justify-center group-hover:rotate-[5deg] transition-transform duration-500">
                                        <Cloud className="w-10 h-10 text-[#F80000]" />
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#F80000] to-[#C74634]">
                                            Oracle APEX Cloud Developer
                                        </h4>
                                        <p className="text-[#F80000]/80 font-medium flex items-center justify-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" /> Certified
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Issued: 2024</p>
                                    </div>

                                    <a href="#" className="mt-2 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#F80000]/20 to-[#C74634]/20 border border-[#F80000]/30 text-[#F80000] text-sm font-semibold group-hover:scale-105 group-hover:bg-[#F80000]/30 transition-all duration-300">
                                        View Credential <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
