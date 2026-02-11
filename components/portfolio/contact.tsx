"use client";

import React, { useRef, useEffect, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { cn } from "../../src/lib/utils";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/rayyanahmed021", handle: "@rayyanahmed021" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rayyan-ahmed/", handle: "rayyan-ahmed" },
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-slate-950/50" // Added lighter background tint
      onMouseMove={handleMouseMove}
    >
      {/* Background spotlight */}
      <div
        className="absolute inset-0 transition-all duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(14, 165, 233, 0.08), transparent 40%)`, // Using cyan color directly if oklch fails
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section header */}
        <div
          className={cn(
            "flex items-center gap-4 mb-12 md:mb-20 transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}
        >
          <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-wider uppercase">04 / CONTACT</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left side - Big CTA */}
          <div
            className={cn(
              "flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Let&apos;s build<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">something</span><br />
              together.
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              I&apos;m currently looking for new opportunities. Whether you have a question 
              or just want to say hi, I&apos;ll do my best to get back to you!
            </p>

            {/* Main CTA button */}
            <a
              href="mailto:rahmed10@my.yorku.ca"
              className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              <span className="relative z-10 text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">
                Say Hello
              </span>
              <div className="relative z-10 p-2 rounded-full bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black group-hover:rotate-45 transition-all duration-300">
                <Send className="w-5 h-5" />
              </div>

              {/* Animated background sheen */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
          </div>

          {/* Right side - Contact info */}
          <div
            className={cn(
              "space-y-6 w-full max-w-md mx-auto lg:max-w-none transition-all duration-1000 delay-400",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {/* Email card */}
            <a
              href="mailto:rahmed10@my.yorku.ca"
              className="group block p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-500 glass-card"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-400 mb-1">Email me at</p>
                    <p className="text-sm md:text-lg font-medium text-white font-mono break-all">rahmed10@my.yorku.ca</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
            </a>

            {/* Location card */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 glass-card">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Based in</p>
                  <p className="text-lg font-medium text-white">Toronto, ON</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 glass-card">
              <p className="text-sm text-slate-400 mb-4">Find me on</p>
              <div className="space-y-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <social.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                      <span className="text-white group-hover:text-cyan-400 transition-colors">{social.label}</span>
                    </div>
                    <span className="text-sm text-slate-500 font-mono group-hover:text-cyan-400/70 transition-colors">
                      {social.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}