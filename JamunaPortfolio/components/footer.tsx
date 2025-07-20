import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Jamunadevi</h3>
            <p className="text-gray-400">AI/ML Enthusiast & Full Stack Developer</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end gap-2">
              Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by{" "}
              <span className="text-teal-400 font-semibold">Jammy</span>
            </p>
            <p className="text-gray-500 text-sm mt-1">© 2024 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
