"use client";

import { motion } from "framer-motion";
import { Award, Medal, Star, Scroll } from "lucide-react";
import { TiltCard } from "../ui/tilt-card";
import { useState } from "react";
import Image from "next/image";

const achievements = [
    {
        title: "Best Student Award",
        issuer: "Kongu Engineering College",
        date: "Nov 2023",
        icon: TrophyIcon,
        description: "Awarded for creating an AI-based accessibility tool for the visually impaired.",
        image: "/beststudent.jpeg"
    },
    {
        title: "Academic Excellence Award",
        issuer: "Kongu Engineering College",
        date: "Aug 2024",
        icon: Medal,
        description: "Validated technical skills and expertise in designing distributed systems on AWS.",
        image: "/academic.jpeg"
    },
    {
        title: "First Place in Paper Presentation",
        issuer: "Karpagam College of Technology, Coimbatore",
        date: "June 2025",
        icon: Star,
        description: "Consistently ranked in the top percentile in weekly global coding algorithms contests.",
        image: "/paperpresentation.jpeg"
    },
    {
        title: "Second Place in HackHub",
        issuer: "Government College of Technology,Coimbatore",
        date: "June 2025",
        icon: Scroll,
        description: "Comprehensive bootcamp covering React, Node.js, and Database management.",
        image: "/hackhub.jpeg"
    }
];

function TrophyIcon(props: any) {
    return <Award {...props} />;
}

export function AchievementsSection() {
    const [selectedItem, setSelectedItem] = useState<typeof achievements[0] | null>(null);

    return (
        <section id="achievements" className="py-20 px-4 relative overflow-hidden">
            {/* Background Morphing Mesh - simplified css version */}
            <div className="absolute inset-0 -z-10 opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Validations</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient">Achievements & Certifications</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Recognitions of my dedication to technical excellence and continuous learning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((item, index) => (
                        <div key={index} className="h-[350px]" onClick={() => item.image && setSelectedItem(item)}>
                            <TiltCard className="p-0 flex flex-col items-center text-center justify-between cursor-pointer group h-full overflow-hidden relative">
                                {/* Image Background or Icon Fallback */}
                                <div className="absolute inset-0 z-0">
                                    {item.image ? (
                                        <>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                                        </>
                                    ) : (
                                        <div className="w-full h-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                                    )}
                                </div>

                                <div className="relative z-10 p-6 flex flex-col h-full w-full">
                                    <div className="flex justify-center mb-4">
                                        <div className="p-3 rounded-full bg-white/10 backdrop-blur-md shadow-inner border border-white/10 group-hover:border-primary/50 transition-colors">
                                            <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-auto">
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">{item.title}</h3>
                                        <p className="text-xs font-mono text-muted-foreground">{item.issuer}</p>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-sm text-foreground/80 line-clamp-3 mb-4">
                                            {item.description}
                                        </p>

                                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/20 backdrop-blur-md opacity-90 group-hover:opacity-100 transition-opacity inline-block">
                                            {item.image ? "View Certificate" : item.date}
                                        </span>
                                    </div>
                                </div>
                            </TiltCard>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Certificate Image */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-background border border-white/10 rounded-2xl p-2 max-w-2xl w-full max-h-[80vh] overflow-hidden relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
                        >
                            ✕
                        </button>
                        {selectedItem.image && (
                            <div className="relative w-full h-[60vh]">
                                <Image src={selectedItem.image} alt={selectedItem.title} fill className="object-contain" />
                            </div>
                        )}
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-bold">{selectedItem.title}</h3>
                            <p className="text-muted-foreground">{selectedItem.issuer}</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
}
