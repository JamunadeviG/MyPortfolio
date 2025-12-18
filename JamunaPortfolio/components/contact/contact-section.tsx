"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, AlertCircle, CheckCircle2 } from "lucide-react";
import { GlassCard } from "../ui/glass-card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

// Form Schema
const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        setIsError(false);

        // EMAILJS CONFIGURATION
        // REPLACE THESE WITH YOUR ACTUAL KEYS FROM EMAILJS DASHBOARD
        const SERVICE_ID = 'service_njih509';
        const TEMPLATE_ID = 'template_pv8mkrb';
        const PUBLIC_KEY = 'a7cOQn9IjfCx0CN7F';

        try {
            // Using emailjs.send instead of sendForm to use the data object directly if less confusing, 
            // but sendForm is often easier if ref is attached. 
            // Here we use send() to have cleaner control over data passed.
            // But typically sendForm(serviceID, templateID, form.current, publicKey)

            // To ensure it works perfectly with the "jamunadevig.2006@gmail.com" requirement,
            // you must configure the EmailJS Template to send to that email.

            if (form.current) {
                await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                    publicKey: PUBLIC_KEY,
                });

                // Simulate success if keys are placeholders (remove this in partial production if keys are real)
                // if (SERVICE_ID === 'YOUR_SERVICE_ID') {
                //    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network
                // }

                setIsSuccess(true);
                reset();
                setTimeout(() => setIsSuccess(false), 5000);
            }
        } catch (error) {
            console.error(error);
            setIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2" />

            <div className="container mx-auto px-4">
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
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <a href="https://github.com/JamunadeviG" target="_blank" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/jamunadevi-g-108556322" target="_blank" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <GlassCard className="p-8 md:p-10 border-t-4 border-t-primary/80">
                        {/* Success Message Overlay */}
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                <p className="text-gray-400">Thank you for reaching out. I'll get back to you shortly.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-6 text-sm text-primary hover:underline"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1 flex gap-1">Name <span className="text-red-400">*</span></label>
                                    <input
                                        {...register("name")}
                                        name="user_name" // specific name attribute for EmailJS usually
                                        className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white/10 transition-all backdrop-blur-sm"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1 flex gap-1">Email Address <span className="text-red-400">*</span></label>
                                    <input
                                        {...register("email")}
                                        name="user_email"
                                        className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white/10 transition-all backdrop-blur-sm"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1 flex gap-1">Message <span className="text-red-400">*</span></label>
                                    <textarea
                                        {...register("message")}
                                        name="message"
                                        rows={5}
                                        className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white/10 transition-all resize-none backdrop-blur-sm"
                                        placeholder="How can I help you?"
                                    />
                                    {errors.message && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message.message}</p>}
                                </div>

                                {isError && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" />
                                        Failed to send message. Please try again or email directly.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                                            Sending...
                                        </span>
                                    ) : (
                                        <>Send Message <Send className="w-4 h-4 ml-1" /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
