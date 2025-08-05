import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, MapPin } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import ScrollReveal, { StaggeredReveal } from "@/components/scroll-reveal"

export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <ScrollReveal variant="slideDown">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">Me</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
          <ScrollReveal variant="slideLeft">
            <div className="space-y-6">
              {/* Photo removed */}
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  I'm <span className="text-teal-400 font-semibold">Jamunadevi</span>, a passionate B.Tech AIML student
                  with a love for solving real-world problems through code and data.
                </p>
                <p>
                  My focus lies in building intelligent systems, full-stack apps, and continuously exploring emerging
                  tech.
                </p>
                <p>💡 Currently diving deep into ML models, user-centric web apps, and playful UI design.</p>
                <p className="text-purple-400 font-medium">🌍 Let's build something amazing together!</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-6">
            <ScrollReveal variant="slideRight" delay={200}>
              <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Education</h3>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li><span className="font-medium text-white">B.Tech in AI & Machine Learning</span> <br/> Kongu Engineering College, 2023-2027</li>
                        <li><span className="font-medium text-white">HSC</span> <br/> Girls Government High School, 2021-2023 <br/>Percentage: 89.83%</li>
                        <li><span className="font-medium text-white">SSLC</span> <br/> Government Higher Secondary School, 2020-2021</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={400}>
              <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Clubs & Activities</h3>
                      <p className="text-gray-400">Red Ribbon Club • AI Association club</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={600}>
              <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Location</h3>
                      <p className="text-gray-400">Tiruppur, Tamil Nadu, India 🇮🇳</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
