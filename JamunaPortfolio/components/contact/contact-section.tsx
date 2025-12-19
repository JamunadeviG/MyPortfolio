"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { GlassCard } from "../ui/glass-card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

// Custom LeetCode Icon
const LeetCodeIcon = ({ className }: { className?: string }) => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="currentColor"
    >
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.173 5.423a1.398 1.398 0 0 0-.437.961 1.394 1.394 0 0 0 .437.961l5.348 4.985a1.597 1.597 0 0 0 2.096-.15 1.533 1.533 0 0 0 .15-2.096l-3.23-3.13 3.659-3.41a1.394 1.394 0 0 0 .437-.961 1.385 1.385 0 0 0-.437-.961 1.38 1.38 0 0 0-.96-.438h-.733Zm-2.5 13.063c-.15 0-.301.033-.438.095l-5.111 2.379a1.53 1.53 0 0 0-.742 2.016 1.528 1.528 0 0 0 2.016.742l3.359-1.562 3.359 1.562a1.531 1.531 0 0 0 2.016-.742 1.525 1.525 0 0 0-.742-2.016l-3.376-1.57a1.328 1.328 0 0 0-.341-.094Zm6.917.433-5.348 4.985a1.395 1.395 0 0 0-.437.961 1.398 1.398 0 0 0 .437.961l5.349 4.985a1.366 1.366 0 0 0 .96.438c.36 0 .723-.15.961-.438a1.398 1.398 0 0 0 .437-.961 1.394 1.394 0 0 0-.437-.961l-3.66-3.41 3.231-3.13a1.542 1.542 0 0 0 .15-2.096 1.63 1.63 0 0 0-2.196-.28Z" />
    </svg>
);

// Form Schema
const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: ContactFormValues) => {
        console.log("Form submitted:", data); // Debugging
        setIsSubmitting(true);
        setNotification(null);

        // EMAILJS CONFIGURATION
        const SERVICE_ID = 'service_njih509';
        const TEMPLATE_ID = 'template_pv8mkrb';
        const PUBLIC_KEY = 'a7cOQn9IjfCx0CN7F';

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                    to_email: 'jamunadevig.2006@gmail.com'
                },
                PUBLIC_KEY
            );

            setNotification({
                type: 'success',
                message: "✅ Message sent successfully! I'll get back to you soon"
            });
            reset();

            // Auto dismiss success
            setTimeout(() => {
                setNotification(null);
            }, 5000);

        } catch (error) {
            console.error(error);
            setNotification({
                type: 'error',
                message: "❌ Oops! Something went wrong. Please try again or email directly at jamunadevig.2006@gmail.com"
            });

            // Auto dismiss error
            setTimeout(() => {
                setNotification(null);
            }, 7000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div className="grid gap-6">
                            {[
                                { icon: Mail, label: "Email", value: "jamunadevig.2006@gmail.com", href: "mailto:jamunadevig.2006@gmail.com" },
                                // Removed Phone from visual display if requested, but user said "remove phone input". 
                                // I will keep the contact info display unless asked to remove.
                                { icon: Phone, label: "Phone", value: "+91 9043249887", href: "tel:+919043249887" }
                            ].map((item, idx) => (
                                <GlassCard key={idx} className="p-6 flex items-center gap-6 hover:border-primary/50 transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground">{item.label}</h4>
                                        <a href={item.href} className="text-lg font-semibold hover:text-primary transition-colors">
                                            {item.value}
                                        </a>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 justify-center lg:justify-start relative z-20">
                            <a href="https://github.com/JamunadeviG" target="_blank" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/jamunadevi2006" target="_blank" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://leetcode.com/u/JamunaDevi_2006" target="_blank" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
                                <LeetCodeIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <GlassCard className="p-8 md:p-10 border-t-4 border-t-primary/80 relative overflow-hidden z-20">

                        {/* Notification Toasts */}
                        <div className="absolute top-0 left-0 right-0 z-50 flex justify-center p-2 pointer-events-none">
                            {notification && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className={`px-4 py-3 rounded-lg shadow-xl text-sm font-semibold flex items-center gap-2 pointer-events-auto ${notification.type === 'success' ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'
                                        }`}
                                >
                                    {notification.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                    {notification.message}
                                </motion.div>
                            )}
                        </div>

                        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6 pt-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1 flex gap-1">Name <span className="text-red-400">*</span></label>
                                <input
                                    {...register("name")}
                                    className={`w-full bg-white/5 border-2 rounded-xl px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all backdrop-blur-sm ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary/50 focus:bg-white/10'
                                        }`}
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1 flex gap-1">Email <span className="text-red-400">*</span></label>
                                <input
                                    {...register("email")}
                                    className={`w-full bg-white/5 border-2 rounded-xl px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all backdrop-blur-sm ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary/50 focus:bg-white/10'
                                        }`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1 flex gap-1">Message <span className="text-red-400">*</span></label>
                                <textarea
                                    {...register("message")}
                                    rows={5}
                                    className={`w-full bg-white/5 border-2 rounded-xl px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none backdrop-blur-sm ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary/50 focus:bg-white/10'
                                        }`}
                                    placeholder="How can I help you?"
                                />
                                {errors.message && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative z-50 cursor-pointer ${isSubmitting ? 'bg-primary/50 text-white/50' :
                                    notification?.type === 'success' ? 'bg-green-500 text-white' :
                                        notification?.type === 'error' ? 'bg-red-500 text-white' :
                                            'bg-gradient-to-r from-primary to-accent text-white'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : notification?.type === 'success' ? (
                                    <>Message Sent! <CheckCircle2 className="w-5 h-5" /></>
                                ) : notification?.type === 'error' ? (
                                    <>Failed ✗ Try Again</>
                                ) : (
                                    <>Send Message</>
                                )}
                            </button>
                        </form>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
