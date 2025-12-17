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
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-indigo-500/30 p-8 rounded-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_8px_32px_rgba(99,102,241,0.2)]">
                {/* Animated Border Flow - Simulated via CSS or simpler glow */}

                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Bot className="w-8 h-8 text-indigo-400" />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Technical Head</h4>
                    <p className="text-indigo-400 font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">AI Association Club</p>
                  </div>

                  <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    2023 - Present
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Leading technical initiatives, organizing AI/ML workshops, and mentoring members in various technical projects.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RRC Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-red-500/30 p-8 rounded-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_8px_32px_rgba(239,68,68,0.2)]">

                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Ribbon className="w-8 h-8 text-red-400" />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Executive Member</h4>
                    <p className="text-red-400 font-medium bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-400">Red Ribbon Club</p>
                  </div>

                  <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    2023 - Present
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Coordinating awareness programs, organizing health campaigns, and driving community outreach initiatives.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
