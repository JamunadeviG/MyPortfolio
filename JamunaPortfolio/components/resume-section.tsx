import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Award, Calendar } from "lucide-react"

const achievements = [
  {
    title: "Best Student Award",
    organization: "Kongu Engineering College",
    date: "2023",
    icon: "🏆",
  },
  {
    title: "Academic Excellence Award",
    organization: "Kongu Engineering College",
    date: "2024",
    icon: "🏆",
  },
  {
    title: "Oracle Certified Associate APEX Developer",
    organization: "Oracle",
    date: "2024",
    icon: "💻",
  },
  {
    title: "MongoDB Certified Associate Developer",
    organization: "MongoDB",
    date: "2024",
    icon: "🧠",
  },
]

export default function ResumeSection() {
  return (
    <section id="resume-section" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">Resume</span> &
            Achievements
          </h2>
          <p className="text-gray-400 text-lg">Download my resume and explore my certifications</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto lg:mx-0 rounded-full bg-gradient-to-r from-teal-400 to-purple-400 flex items-center justify-center text-3xl mb-6">
                📄
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to collaborate?</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Download my resume to learn more about my experience, projects, and technical skills. Let's discuss how
                we can work together!
              </p>
            </div>

            <a href="/resume.pdf" download>
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25"
              >
                <Download className="mr-3 h-5 w-5" />
                Download Resume
              </Button>
            </a>
            <br /><br />
            <Card className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Achievements</h3>
                    <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                      <li>2nd Place in Paper Presentation at Karpagam Institute of Technology</li>
                      <li>2nd Place in Coding Contest at GCT College</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-teal-400" />
              Certifications & Workshops
            </h4>

            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-white">{achievement.title}</h5>
                      <p className="text-gray-400 text-sm">{achievement.organization}</p>
                    </div>
                    <div className="flex items-center gap-1 text-teal-400 text-sm">
                      <Calendar className="h-4 w-4" />
                      {achievement.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
