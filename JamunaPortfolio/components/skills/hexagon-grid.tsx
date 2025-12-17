"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import {
    Code2, Layout, Server, Database, Brain, Wrench, Search,
    Award, CheckCircle2, Circle
} from "lucide-react";
import { cn } from "@/lib/utils";

// Types
type Proficiency = "Advanced" | "Intermediate" | "Certified";
type Category = "Programming Languages" | "Frontend" | "Backend" | "Databases" | "AI/ML" | "Tools";

interface Skill {
    name: string;
    category: Category;
    proficiency: Proficiency;
    percent: number;
    icon?: any; // Lucide icon or string char used in placeholder
    related?: string[];
    certified?: boolean;
}

// Data
const skillsData: Skill[] = [
    // Programming
    { name: "C", category: "Programming Languages", proficiency: "Intermediate", percent: 75, icon: "C" },
    { name: "Java", category: "Programming Languages", proficiency: "Advanced", percent: 90, icon: "☕" },
    { name: "Python", category: "Programming Languages", proficiency: "Advanced", percent: 95, icon: "🐍", related: ["TensorFlow", "Scikit-Learn", "Flask"] },
    { name: "Dart", category: "Programming Languages", proficiency: "Intermediate", percent: 70, icon: "🎯", related: ["Flutter"] },
    // Frontend
    { name: "React.js", category: "Frontend", proficiency: "Advanced", percent: 90, icon: "⚛️", related: ["Node.js", "MongoDB", "JavaScript"] },
    { name: "Flutter", category: "Frontend", proficiency: "Intermediate", percent: 75, icon: "💙", related: ["Dart"] },
    { name: "HTML/CSS", category: "Frontend", proficiency: "Advanced", percent: 90, icon: "🌐" },
    { name: "JavaScript", category: "Frontend", proficiency: "Advanced", percent: 88, icon: "JS", related: ["React.js", "Node.js"] },
    // Backend
    { name: "Node.js", category: "Backend", proficiency: "Advanced", percent: 85, icon: "🟢", related: ["JavaScript", "Express.js", "React.js"] },
    { name: "Express.js", category: "Backend", proficiency: "Advanced", percent: 85, icon: "🚂", related: ["Node.js"] },
    { name: "Flask", category: "Backend", proficiency: "Intermediate", percent: 70, icon: "🌶️", related: ["Python"] },
    // Database
    { name: "MongoDB", category: "Databases", proficiency: "Advanced", percent: 100, icon: "🍃", certified: true },
    { name: "MySQL", category: "Databases", proficiency: "Advanced", percent: 85, icon: "🐬" },
    // AI/ML
    { name: "TensorFlow", category: "AI/ML", proficiency: "Intermediate", percent: 70, icon: "🧠", related: ["Python"] },
    { name: "Scikit-Learn", category: "AI/ML", proficiency: "Advanced", percent: 90, icon: "🔬" },
    { name: "BioPython", category: "AI/ML", proficiency: "Intermediate", percent: 65, icon: "🧬" },
    { name: "Pandas", category: "AI/ML", proficiency: "Advanced", percent: 88, icon: "🐼" },
    { name: "NumPy", category: "AI/ML", proficiency: "Advanced", percent: 88, icon: "🔢" },
    { name: "Machine Learning", category: "AI/ML", proficiency: "Advanced", percent: 90, icon: "🤖" },
    // Tools
    { name: "GitHub", category: "Tools", proficiency: "Advanced", percent: 90, icon: "🐱" },
    { name: "Git", category: "Tools", proficiency: "Advanced", percent: 85, icon: "📦" },
    { name: "VS Code", category: "Tools", proficiency: "Advanced", percent: 95, icon: "📝" },
    { name: "Postman", category: "Tools", proficiency: "Intermediate", percent: 75, icon: "🚀" },
];

// Color Mapping
const categoryColors: Record<Category, string> = {
    "Programming Languages": "#8b5cf6", // Purple
    "Frontend": "#06b6d4", // Teal
    "Backend": "#f97316", // Orange
    "Databases": "#10b981", // Green
    "AI/ML": "#6366f1", // Indigo
    "Tools": "#6b7280", // Gray
};

export function HexagonGrid() {
    const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

    const filteredSkills = useMemo(() => {
        return skillsData.filter(skill => {
            const matchesCategory = activeCategory === "All" || skill.category === activeCategory;
            const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <div className="w-full max-w-6xl mx-auto">
            {/* Controls */}
            <div className="flex flex-col items-center gap-8 mb-16">
                {/* Search */}
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search skills (e.g., Python, React)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-full px-10 py-3 focus:outline-none focus:border-primary transition-all"
                    />
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2">
                    {(["All", "Programming Languages", "Frontend", "Backend", "Databases", "AI/ML", "Tools"] as const).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all border border-transparent",
                                activeCategory === cat
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-white/5 hover:bg-white/10 text-muted-foreground border-white/10"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <motion.div layout className="flex flex-wrap justify-center gap-8 md:gap-10 pb-20">
                <AnimatePresence mode="popLayout">
                    {filteredSkills.map((skill, index) => {
                        const isRelated = hoveredSkill?.related?.includes(skill.name) || hoveredSkill?.name === skill.name;
                        const isDimmed = hoveredSkill && !isRelated;
                        const color = categoryColors[skill.category];

                        return (
                            <motion.div
                                layout
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: isDimmed ? 0.3 : 1,
                                    scale: isRelated ? 1.1 : 1,
                                    filter: isDimmed ? "grayscale(100%)" : "grayscale(0%)"
                                }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.3 }}
                                onMouseEnter={() => setHoveredSkill(skill)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                className="relative w-32 h-36 md:w-40 md:h-44 flex items-center justify-center group cursor-pointer"
                            >
                                {/* Hexagon Background */}
                                <div
                                    className="absolute inset-0 transition-all duration-300 backdrop-blur-sm"
                                    style={{
                                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                        backgroundColor: isRelated ? `${color}40` : "rgba(255,255,255,0.05)",
                                        boxShadow: isRelated ? `0 0 30px ${color}` : "none",
                                        border: isRelated ? `2px solid ${color}` : "2px solid rgba(255,255,255,0.1)"
                                    }}
                                />

                                {/* Border Hexagon (Simulated via drop-shadow on SVG if needed, but css borders on clip-path don't work well. 
                                 Alternative: inset shadow or another div slightly smaller) 
                             */}

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center gap-2 text-center p-2">
                                    <span className="text-3xl md:text-4xl drop-shadow-lg filter">{skill.icon}</span>
                                    <span className={cn("text-xs md:text-sm font-bold transition-colors", isRelated ? "text-white" : "text-gray-400")}>
                                        {skill.name}
                                    </span>

                                    {/* Proficiency Bar (Mini) */}
                                    <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden mt-1">
                                        <div
                                            className="h-full transition-all duration-500"
                                            style={{
                                                width: `${skill.percent}%`,
                                                backgroundColor: color
                                            }}
                                        />
                                    </div>

                                    {skill.certified && (
                                        <span className="absolute -top-4 -right-4 bg-[#00ed64] text-black text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg animate-bounce">
                                            <Award className="w-3 h-3" /> Cert
                                        </span>
                                    )}
                                </div>

                                {/* Hover Tooltip (Simulated) */}
                                {hoveredSkill?.name === skill.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-50 bg-black/90 text-white text-xs p-2 rounded-lg whitespace-nowrap border border-white/20 shadow-xl"
                                    >
                                        <p className="font-bold text-base mb-1" style={{ color }}>{skill.proficiency}</p>
                                        <p className="text-gray-400">{skill.category}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
