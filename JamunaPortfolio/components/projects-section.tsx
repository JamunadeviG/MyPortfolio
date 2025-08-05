import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

const projects = [
  {
    title: "💬 Chatbot for Agricultural Purpose",
    description:
      "An intelligent assistant for farmers — answers crop-related queries, shares weather insights, and provides farming guidance.",
    tech: ["Python", "ML", "Flask", "HTML/CSS"],
    gradient: "from-green-500 to-emerald-500",
    github: "https://github.com/JamunadeviG/JamChatbot.git",
  },
  {
    title: "✅ Full-Stack To-Do List App",
    description:
      "A user-authenticated to-do app with sleek UI, task status updates, and MongoDB integration for real-time data.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    gradient: "from-blue-500 to-cyan-500",
    github: "https://github.com/JamunadeviG/SCT_WD_4.git",
  },
  {
    title: "🛒 Purchase Prediction Model",
    description:
      "Machine Learning model predicting customer purchase behavior using historical data with Random Forest.",
    tech: ["Scikit-Learn", "Pandas", "Matplotlib"],
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/JamunadeviG/PurchasePredictionSystem.git",
  },
  {
    title: "🎓 Student Management System",
    description: "Web portal for managing student records with login and role-based access. Easy CRUD operations.",
    tech: ["Java", "MySQL"],
    gradient: "from-orange-500 to-red-500",
    github: "https://github.com/JamunadeviG/CollegeStudentManagementSystem.git",
  },
  {
    title: "🧾 VendorX – College Procurement System",
    description:
      "Automated system for handling department procurement requests, tracking purchase history, and admin approval flows.",
    tech: ["MERN Stack", "Tailwind CSS"],
    gradient: "from-teal-500 to-blue-500",
    github: "https://github.com/JamunadeviG/VendorX.git",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <ScrollReveal variant="slideDown">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">Projects</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fadeIn" delay={200}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of projects showcasing my skills in AI/ML, full-stack development, and problem-solving
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} variant="zoomIn" delay={index * 150}>
              <Card
                className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
              <CardHeader>
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-4`}></div>
                <CardTitle className="text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-slate-700 text-gray-300 hover:bg-slate-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-gray-300 hover:bg-slate-700 bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
