"use client";

import { Heart, ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden">
      {/* Wave Separator (SVG) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-[calc(100%+1.3px)] fill-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Jamunadevi</h2>
            <p className="text-sm text-gray-400 mt-2">Crafting digital experiences with passion and code.</p>
          </div>

          <div className="flex gap-8">
            {["About", "Projects", "Skills", "Contact"].map(link => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-primary transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse fill-red-500" /> by Jamunadevi
          </div>
        </div>
      </div>
    </footer>
  );
}
