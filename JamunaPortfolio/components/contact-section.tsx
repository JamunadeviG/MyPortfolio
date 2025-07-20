"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Github, Instagram, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { toast } = useToast();

  // TODO: Replace with your actual Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjkogreg";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later."
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact-section" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
              In Touch!
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Ready to collaborate? Drop me a message!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">jamunadevig.2006@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">9043249887</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {/* TODO: Replace href with your actual LinkedIn profile URL */}
                <a
                  href="https://www.linkedin.com/in/jamunadevi-g-108556322"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 bg-transparent"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                {/* TODO: Replace href with your actual GitHub profile URL */}
                <a
                  href="https://github.com/JamunadeviG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-gray-300 hover:bg-gray-800 hover:border-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110 bg-transparent"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500/20 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
