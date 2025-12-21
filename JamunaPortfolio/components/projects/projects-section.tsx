"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, SortAsc } from "lucide-react";
import { ProjectCard, Project, ProjectCategory } from "./project-card";
import { Button } from "../ui/button";

// Data
const projectsData: Project[] = [
    // Row 1
    {
        id: "biointel",
        title: "BioIntel - Genomic Surveillance",
        category: "AI-ML",
        description: "AI-driven TB surveillance system that detects infection, maps DNA mutations, predicts organ spread, and identifies drug resistance with automated workflows.",
        image: "biointel.jpeg", // Placeholder - user can add later
        techStack: ["Python", "Machine Learning", "BioPython", "TensorFlow"],
        date: "2025-01-01",
        badges: ["Featured", "New"],
        size: "large",
        githubLink: "#" // Link needed
    },
    {
        id: "agriai",
        title: "AgriAI - Precision Guidance",
        category: "AI-ML",
        description: "AI assistant that predicts crop yield and market prices, generates personalized crop and pesticide recommendations to improve farm decision-making.",
        image: "agriai.jpg",
        techStack: ["React", "Machine Learning", "Python", "Data Analytics"],
        date: "2025-01-01",
        badges: ["Featured", "New"],
        size: "large",
        githubLink: "https://github.com/JamunadeviG/agriAI"
    },
    // Row 2
    {
        id: "career-guidance",
        title: "Career Guidance System",
        category: "AI-ML",
        description: "ML-based career guidance tool that analyzes user strengths and delivers personalized education/career pathways using AI-driven analytics.",
        image: "cg.jpeg",
        techStack: ["React.js", "Machine Learning", "Python", "Scikit-Learn"],
        date: "2025-02-01",
        badges: ["New"],
        size: "medium",
        githubLink: "https://github.com/Harini-190506/Career-Guidance"
    },
    {
        id: "purchase-prediction",
        title: "Purchase Prediction System",
        category: "AI-ML",
        description: "Machine Learning model predicting customer purchase behavior using historical data with Random Forest algorithm.",
        image: "pps.jpeg",
        techStack: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "NumPy"],
        date: "2024-06-01",
        stars: 1,
        forks: 1,
        size: "small",
        githubLink: "https://github.com/JamunadeviG/PurchasePredictionSystem"
    },
    {
        id: "agribot",
        title: "AgriBot",
        category: "AI-ML",
        description: "An intelligent chatbot assistant for farmers that answers crop-related queries, shares weather insights, and provides farming guidance.",
        image: "agribot.png",
        techStack: ["Python", "Machine Learning", "Flask", "HTML/CSS", "NLP"],
        date: "2024-05-01",
        size: "small",
        githubLink: "https://github.com/JamunadeviG/Agribot"
    },
    {
        id: "tarjama",
        title: "Tarjama - Arabic Translator",
        category: "Full-Stack",
        description: "An AI-powered Arabic to English translator, and also a receipt scanner.",
        image: "tarjama.png",
        techStack: ["Python", "OpenCV", "Flask", "NLP"],
        date: "2025-10-03",
        size: "small",
        githubLink: "https://github.com/Harini-190506/Arabic-Translator"
    },
    // Row 3 (Full Stack)
    {
        id: "vendorx",
        title: "VendorX",
        category: "Full-Stack",
        description: "Automated college procurement system for handling department purchase requests, tracking purchase history, and managing admin approval workflows with role-based access control.",
        image: "vendorx.jpg",
        techStack: ["MongoDB", "Express.js", "React", "Node.js (MERN)", "TypeScript", "Tailwind CSS"],
        date: "2024-09-01",
        size: "large",
        githubLink: "https://github.com/JamunadeviG/VendorX"
    },
    // Row 4
    {
        id: "college-mgmt",
        title: "College Student Management System",
        category: "Backend",
        description: "Web portal for managing student records with secure login and role-based access control. Features easy CRUD operations for student data, attendance tracking, grade management.",
        image: "clg.png",
        techStack: ["Java", "MySQL", "JDBC", "Servlets", "JSP"],
        date: "2024-04-01",
        // category: "Database",
        size: "medium",
        githubLink: "https://github.com/JamunadeviG/CollegeStudentManagementSystem"
    } as any,
    {
        id: "todo-app",
        title: "To-Do List App",
        category: "Mobile",
        description: "User-authenticated mobile to-do application with sleek UI, task status updates, and real-time data synchronization.",
        image: "",
        techStack: ["Flutter", "Dart", "Firebase"],
        date: "2024-11-01",
        size: "small",
        githubLink: "https://github.com/JamunadeviG/todolist"
    },
    {
        id: "rps-game",
        title: "RPS Game App",
        category: "Mobile",
        description: "Interactive Rock Paper Scissors game mobile application with engaging UI, score tracking, and smooth animations.",
        image: "rps.jpg",
        techStack: ["Flutter", "Dart"],
        date: "2024-10-01",
        // category: "Game",
        size: "small",
        githubLink: "https://github.com/JamunadeviG/RPSGame"
    } as any
];

// Map specialized categories back to filter groups
const categoryMap: Record<string, string> = {
    "Healthcare": "AI/ML",
    "E-commerce": "Full-Stack",
    "E-Commerce": "Full-Stack",
    "Database": "Backend",
    "Game": "Mobile"
};

const getFilterCategory = (projectCat: string) => {
    if (["AI-ML"].includes(projectCat)) return "AI/ML";
    if (["Full-Stack"].includes(projectCat)) return "Full-Stack";
    if (["Mobile"].includes(projectCat)) return "Mobile";
    if (["Backend"].includes(projectCat)) return "Backend";
    return categoryMap[projectCat] || projectCat;
};

const filterCounts = {
    "All": 10,
    "AI/ML": 5,
    "Full-Stack": 2,
    "Backend": 1,
    "Mobile": 2
};

const sortOptions = ["Latest First", "Oldest First", "Category", "Most Starred"];

export function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeSort, setActiveSort] = useState("Latest First");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = projectsData
        .filter(p => activeCategory === "All" || getFilterCategory(p.category) === activeCategory)
        .sort((a, b) => {
            if (activeSort === "Latest First") return new Date(b.date).getTime() - new Date(a.date).getTime();
            if (activeSort === "Oldest First") return new Date(a.date).getTime() - new Date(b.date).getTime();
            if (activeSort === "Category") return a.category.localeCompare(b.category);
            if (activeSort === "Most Starred") return (b.stars || 0) - (a.stars || 0);
            return 0;
        });

    return (
        <section id="projects" className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">Featured Projects</h2>

                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {Object.keys(filterCounts).map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border border-transparent ${activeCategory === cat
                                    ? cat === "AI/ML" ? "bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white shadow-lg" :
                                        cat === "Full-Stack" ? "bg-gradient-to-r from-[#06b6d4] to-[#10b981] text-white shadow-lg" :
                                            cat === "Backend" ? "bg-gradient-to-r from-[#f97316] to-[#ef4444] text-white shadow-lg" :
                                                cat === "Mobile" ? "bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-white shadow-lg" :
                                                    "bg-primary text-white shadow-lg"
                                    : "bg-white/5 hover:bg-white/10 text-muted-foreground border-white/10"
                                    }`}
                            >
                                {cat} <span className="text-xs opacity-70 ml-1">({filterCounts[cat as keyof typeof filterCounts]})</span>
                            </button>
                        ))}
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                        <SortAsc className="w-4 h-4 text-muted-foreground" />
                        <select
                            value={activeSort}
                            onChange={(e) => setActiveSort(e.target.value)}
                            className="bg-transparent text-sm font-medium focus:outline-none text-foreground cursor-pointer appearance-none"
                            style={{ minWidth: '100px' }}
                        >
                            {sortOptions.map(opt => <option key={opt} value={opt} className="bg-background text-foreground">{opt}</option>)}
                        </select>
                    </div>
                </div>

                {/* Standard Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="w-full"
                            >
                                <ProjectCard
                                    project={project}
                                    onClick={() => setSelectedProject(project)}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Detail Modal - Enhanced */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
                        <motion.div
                            layoutId={`project-${selectedProject.id}`}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            className="bg-background/95 border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedProject.image ? (
                                <div className="relative h-64 md:h-96 w-full">
                                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                </div>
                            ) : (
                                <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 w-full" />
                            )}

                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 bg-black/50 p-2 rounded-full text-white hover:bg-red-500/80 transition-colors z-20 backdrop-blur-md"
                            >
                                ✕
                            </button>

                            <div className="p-8 md:p-12 space-y-8 -mt-10 relative z-10">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                    <div>
                                        <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{selectedProject.title}</h3>
                                        <div className="flex gap-3 mt-4">
                                            <span className="text-sm font-bold px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/20">{selectedProject.category}</span>
                                            <span className="text-sm text-muted-foreground self-center">{selectedProject.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-foreground/90 leading-relaxed text-lg border-l-4 border-primary/50 pl-6">
                                    {selectedProject.description}
                                </p>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.techStack.map(tech => (
                                            <span key={tech} className="px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium border border-white/5 hover:border-primary/30 transition-colors cursor-default">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                                    {selectedProject.githubLink && (
                                        <a href={selectedProject.githubLink} target="_blank" className="flex-1">
                                            <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold h-12 text-base">
                                                View Code on GitHub
                                            </Button>
                                        </a>
                                    )}
                                    {selectedProject.demoLink && (
                                        <a href={selectedProject.demoLink} target="_blank" className="flex-1">
                                            <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 h-12 text-base">
                                                Live Demo
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
