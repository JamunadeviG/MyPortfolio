"use client";

import { motion } from "framer-motion";
import { Bot, Ribbon, Calendar, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-5xl">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-400 mb-6"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I&apos;m <span className="text-teal-400 font-semibold">Jamunadevi</span>, a passionate B.Tech AIML student
              with a love for solving real-world problems through code and data.
            </p>
            <p>
              My focus lies in building intelligent systems, full-stack apps, and continuously exploring emerging tech.
              Currently diving deep into ML models, user-centric web apps, and playful UI design.
            </p>
          </motion.div>
        </div>

        {/* Leadership & Memberships Subsection */}
        <div className="mt-16">
          <div className="relative mb-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Leadership & Memberships</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AIA Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-br from-[rgba(99,102,241,0.3)] to-[rgba(139,92,246,0.3)]" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)' }}></div>

              <div className="relative h-full bg-white/5 backdrop-blur-xl p-6 pl-8 rounded-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)]">
                    <Bot className="w-6 h-6 text-[#6366F1]" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(99,102,241,0.15)] text-[#818CF8] text-xs font-medium border border-[rgba(99,102,241,0.2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse"></span>
                    2023 - 2024
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-1 leading-tight">Technical Head</h4>
                <p className="text-gray-300 font-normal mb-4">AI Association Club</p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Leading technical initiatives, organizing AI/ML workshops, and mentoring members in various technical projects.
                </p>
              </div>
            </motion.div>

            {/* RRC Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-br from-[rgba(239,68,68,0.3)] to-[rgba(220,38,38,0.3)]" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)' }}></div>

              <div className="relative h-full bg-white/5 backdrop-blur-xl p-6 pl-8 rounded-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)]">
                    <Ribbon className="w-6 h-6 text-[#EF4444]" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(99,102,241,0.15)] text-[#818CF8] text-xs font-medium border border-[rgba(99,102,241,0.2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse"></span>
                    2023 - 2024
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-1 leading-tight">Executive Member</h4>
                <p className="text-gray-300 font-normal mb-4">Red Ribbon Club</p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Coordinating awareness programs, organizing health campaigns, and driving community outreach initiatives.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
