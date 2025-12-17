"use client";

import { motion, useScroll, useAnimation } from "framer-motion";
import { ArrowUp, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingControls() {
    const { scrollYProgress } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    // Check scroll for BackTop visibility
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* FAB - Let's Talk */}
            <motion.a
                href="#contact"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 1 }}
                className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/30 flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
            >
                <MessageSquare className="w-5 h-5" />
                <span className="hidden md:inline">Let's Talk!</span>
            </motion.a>

            {/* Back to Top */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
                className="fixed bottom-20 right-6 md:bottom-24 md:right-10 z-40 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white hover:bg-primary transition-colors"
            >
                <ArrowUp className="w-5 h-5" />
            </motion.button>
        </>
    );
}

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('.cursor-pointer')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mousemove', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[9999] hidden md:block mix-blend-difference"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: isHovering ? 1.5 : 1,
                opacity: 1
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
        >
            <div className={`w-2 h-2 bg-accent rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${isHovering ? 'scale-[20] opacity-10' : ''}`} />
        </motion.div>
    );
}
