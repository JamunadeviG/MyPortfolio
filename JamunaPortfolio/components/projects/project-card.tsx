"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Bot, Globe, Database, Smartphone, Star, Flame, Sparkles, Utensils } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "../ui/glass-card";
import { cn } from "@/lib/utils";

export type ProjectCategory = "AI-ML" | "Full-Stack" | "Backend" | "Mobile" | "Database" | "E-commerce" | "Healthcare" | "Web" | "Game";

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    description: string;
    image?: string;
    techStack: string[];
    demoLink?: string;
    githubLink?: string;
    date: string; // for sorting
    badges?: ("Featured" | "New" | "Popular")[];
    stars?: number;
    forks?: number;
    size?: "large" | "medium" | "small";
}

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
    className?: string;
}

const categoryStyles: Record<string, { gradient: string; icon: any }> = {
    "AI-ML": { gradient: "from-[#6366f1] to-[#8b5cf6]", icon: Bot },
    "Healthcare": { gradient: "from-[#6366f1] to-[#8b5cf6]", icon: Bot },
    "Full-Stack": { gradient: "from-[#06b6d4] to-[#10b981]", icon: Globe },
    "E-commerce": { gradient: "from-[#06b6d4] to-[#10b981]", icon: Globe },
    "Web": { gradient: "from-[#06b6d4] to-[#10b981]", icon: Globe },
    "Backend": { gradient: "from-[#f97316] to-[#ef4444]", icon: Database },
    "Database": { gradient: "from-[#f97316] to-[#ef4444]", icon: Database },
    "Mobile": { gradient: "from-[#3b82f6] to-[#06b6d4]", icon: Smartphone },
    "Game": { gradient: "from-[#3b82f6] to-[#06b6d4]", icon: Smartphone },
};

const sizeStyles = {
    large: "h-[400px]",
    medium: "h-[300px]",
    small: "h-[250px]",
};

export function ProjectCard({ project, onClick, className }: ProjectCardProps) {
    const { gradient, icon: Icon } = categoryStyles[project.category] || categoryStyles["Web"];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className={cn("relative group cursor-pointer w-full h-[420px]", className)}
            onClick={onClick}
        >
            <GlassCard className="h-full overflow-hidden p-0 border-white/10 hover:border-transparent transition-all duration-300 flex flex-col">
                {/* Animated Border Gradient Glow */}
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-gradient-to-r", gradient)} style={{ padding: '2px', borderRadius: 'inherit', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)' }}>
                </div>
                <div className={cn("absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none bg-gradient-to-r", gradient)} style={{ maskImage: 'linear-gradient(black, black)', WebkitMaskImage: 'linear-gradient(black, black)', maskComposite: 'exclude' }} />

                {/* Project Thumbnail - Fixed Height 180px */}
                <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className={cn("w-full h-full bg-gradient-to-br opacity-20", gradient)} />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />

                    {/* Badges on Thumbnail */}
                    <div className="absolute top-4 right-4 flex gap-2">
                        {project.badges?.map(badge => (
                            <span key={badge} className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-1 backdrop-blur-md",
                                badge === "Featured" ? "bg-red-500/20 text-red-100 border-red-500/30" :
                                    badge === "New" ? "bg-yellow-500/20 text-yellow-100 border-yellow-500/30" :
                                        "bg-purple-500/20 text-purple-100 border-purple-500/30"
                            )}>
                                {badge === "Featured" && <Flame className="w-3 h-3" />}
                                {badge === "New" && <Sparkles className="w-3 h-3" />}
                                {badge === "Popular" && <Star className="w-3 h-3" />}
                                {badge}
                            </span>
                        ))}
                    </div>

                    <div className="absolute top-4 left-4">
                        <span className={cn("text-[10px] font-bold px-2 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center gap-1.5 text-white")}>
                            <Icon className="w-3 h-3" />
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-5 flex flex-col flex-grow">

                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 min-h-[56px] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 overflow-hidden text-ellipsis flex-grow">
                        {project.description}
                    </p>

                    {/* Tech Stack - Pushed to bottom */}
                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-1.5 mb-4 max-h-[60px] overflow-hidden">
                            {project.techStack.slice(0, 4).map((tech) => (
                                <span key={tech} className="text-[10px] font-mono text-white/70 bg-white/5 px-2 py-1 rounded border border-white/5">
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 4 && (
                                <span className="text-[10px] text-white/50 self-center px-1">+{project.techStack.length - 4}</span>
                            )}
                        </div>

                        {/* Footer Actions */}
                        <div className="flex justify-between items-center opacity-80 group-hover:opacity-100 transition-all duration-300">
                            <div className="flex gap-2">
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/20 transition-all text-white/70 hover:text-white">
                                        <Github className="w-4 h-4" />
                                    </a>
                                )}
                                {project.demoLink && (
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/20 transition-all text-white/70 hover:text-white">
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>

                            <div className="text-xs text-muted-foreground/60 flex items-center gap-1">
                                <span className="text-[10px]">View Details</span>
                                <ArrowUpRight className="w-3 h-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </GlassCard>
        </motion.div>
    );
}
