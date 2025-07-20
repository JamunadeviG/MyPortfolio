"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "C", "C++", "Python", "JavaScript"],
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    icon: "🌐",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AI/ML",
    skills: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
    icon: "🧠",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "UI/UX",
    skills: ["Tailwind CSS", "Figma", "Canva"],
    icon: "🎨",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Tools",
    skills: ["GitHub", "Postman", "VS Code", "MySQL", "PostgreSQL"],
    icon: "🛠️",
    color: "from-teal-500 to-blue-500",
  },
]

export default function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl mb-4 transition-transform duration-300 ${hoveredCategory === index ? "scale-110" : ""}`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200"
                    >
                      <span className="text-gray-300">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i < 4 ? `bg-gradient-to-r ${category.color}` : "bg-slate-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
