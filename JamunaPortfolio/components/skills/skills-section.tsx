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
                        {/* MongoDB Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="group relative rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(0,237,100,0.4)] transition-all duration-300"
                        >
                            {/* Gradient Border via Pseudo-element approach or container */}
                            <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-br from-[rgba(0,237,100,0.3)] to-[rgba(19,170,82,0.3)]" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)' }}></div>

                            {/* Content Container */}
                            <div className="relative h-full bg-white/5 backdrop-blur-xl p-6 pl-8 rounded-2xl">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-10 h-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                                        <Award className="w-10 h-10 text-[#00ED64]" />
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(16,185,129,0.2)] text-[#10B981] text-xs font-medium border border-[#10B981]/20">
                                        Certified <CheckCircle2 className="w-[12px] h-[12px]" />
                                    </span>
                                </div>

                                <h4 className="text-xl font-bold text-gray-200 mb-2 leading-tight">
                                    MongoDB Associate Developer
                                </h4>

                                <p className="text-sm text-gray-400 mb-6 font-medium">
                                    Issued: 2024
                                </p>

                                <a href="mongodb.jpeg" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[#00ED64]/50 text-[#00ED64] bg-transparent hover:bg-[#00ED64]/10 transition-colors duration-300 text-sm font-semibold w-full justify-center md:w-auto">
                                    View Credential <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Oracle Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="group relative rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(248,0,0,0.4)] transition-all duration-300"
                        >
                            {/* Gradient Border */}
                            <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-br from-[rgba(248,0,0,0.3)] to-[rgba(199,70,52,0.3)]" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)' }}></div>

                            <div className="relative h-full bg-white/5 backdrop-blur-xl p-6 pl-8 rounded-2xl">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-10 h-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                                        <Cloud className="w-10 h-10 text-[#F80000]" />
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(16,185,129,0.2)] text-[#10B981] text-xs font-medium border border-[#10B981]/20">
                                        Certified <CheckCircle2 className="w-[12px] h-[12px]" />
                                    </span>
                                </div>

                                <h4 className="text-xl font-bold text-gray-200 mb-2 leading-tight">
                                    Oracle APEX Cloud Developer
                                </h4>

                                <p className="text-sm text-gray-400 mb-6 font-medium">
                                    Issued: 2024
                                </p>

                                <a href="oracle.jpeg" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[#F80000]/50 text-[#F80000] bg-transparent hover:bg-[#F80000]/10 transition-colors duration-300 text-sm font-semibold w-full justify-center md:w-auto">
                                    View Credential <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
