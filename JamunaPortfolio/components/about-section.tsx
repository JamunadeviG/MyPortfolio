"use client";

import { motion } from "framer-motion";
import { Bot, Ribbon, User, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

// --- LEADERSHIP CARD (DARK THEME) ---
interface LeadershipCardProps {
  role: string;
  org: string;
  date: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

function LeadershipCard({ role, org, date, icon, color, description }: LeadershipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      {/* Dark Glass Card with Gradient Border Effect */}
      <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border border-white/10 hover:border-white/20 hover:-translate-y-1">

        {/* Glow Effect behind card */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10"
          style={{ backgroundColor: color }}
        />

        {/* Header: Icon and Date */}
        <div className="flex justify-between items-start mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 shadow-lg border border-white/5"
            style={{ backgroundColor: `${color}15` }} // 15 = low opacity hex
          >
            <div className="relative z-10" style={{ color: color }}>
              {icon}
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300">
            <Calendar className="w-3 h-3" />
            {date}
          </span>
        </div>

        {/* Content */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-black mb-1 group-hover:text-transparent group-hover:bg-clip-text transition-colors duration-300"
            style={{ backgroundImage: `linear-gradient(to right, #fff, ${color})` }}
          >
            {role}
          </h3>
          <p className="font-semibold" style={{ color: color }}>{org}</p>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* Hover Line Bottom */}
        <div
          className="absolute bottom-0 left-6 right-6 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full shadow-[0_0_10px_currentColor]"
          style={{ backgroundColor: color, color: color }}
        />
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500 mb-6"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              I&apos;m <span className="text-teal-400 font-semibold">Jamunadevi</span>, a passionate B.Tech AIML student with a love for solving real-world problems through code and data.
            </p>
            <p>
              My focus lies in building intelligent systems, full-stack apps, and continuously exploring emerging tech. Currently diving deep into ML models, user-centric web apps, and playful UI design.
            </p>
          </motion.div>
        </div>

        {/* Leadership Grid */}
        <div className="mt-20">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-gray-700/50" />
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              Leadership & Memberships
            </h3>
            <div className="h-[1px] w-12 bg-gray-700/50" />
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <LeadershipCard
              role="Technical Head"
              org="AI Association Club"
              date="2023 - 2024"
              icon={<Bot className="w-6 h-6" />}
              color="#6366F1" // Indigo
              description="Leading technical initiatives, organizing AI/ML workshops, and mentoring members in various technical projects."
            />

            <LeadershipCard
              role="Executive Member"
              org="Red Ribbon Club"
              date="2023 - Present"
              icon={<Ribbon className="w-6 h-6" />}
              color="#EF4444" // Red
              description="Coordinating awareness programs, organizing health campaigns, and driving community outreach initiatives."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
