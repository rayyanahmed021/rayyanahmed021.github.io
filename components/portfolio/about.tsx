"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Rocket,
  Code2,
  Zap,
  DollarSign,
  Camera,
  Gamepad2,
  Activity,
  GraduationCap,
  MapPin
} from "lucide-react";
import { FaFutbol } from "react-icons/fa";
import { cn } from "../../src/lib/utils"; 
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

// --- DATA ---
const skills = {
  languages: ["TypeScript", "Python", "Java"],
  frontend: ["React", "C++", "C"],
  backend: ["Node.js", "SQL", "Redis", "GraphQL"],
  tools: ["Git", "Docker", "AWS", "Azure", "Kubernetes"],
};

const stats = [
  { value: "40k+", label: "Scholarship", icon: DollarSign },
  { value: "10+", label: "Projects", icon: Rocket },
  { value: "5+", label: "Internships", icon: Code2 },
  { value: "4+", label: "Hackathon Wins", icon: Zap },
];

const interests = [
  { icon: FaFutbol, label: "Soccer", color: "from-pink-500 to-purple-500" },
  { icon: Camera, label: "Photography", color: "from-green-500 to-emerald-500" },
  { icon: Gamepad2, label: "Gaming", color: "from-cyan-500 to-blue-500" },
  { icon: Activity, label: "Running", color: "from-amber-500 to-orange-500" },
];

// --- SUB-COMPONENT: CASINO NUMBER TICKER ---
const StatCard = ({ stat, index, inViewProp }: { stat: typeof stats[0], index: number, inViewProp: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger only once when the specific card is visible

  useEffect(() => {
    if (isInView) {
      // Extract the number (e.g. "40" from "40k+")
      const numericValue = parseInt(stat.value.replace(/[^0-9]/g, "") || "0");
      
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
        delay: index * 0.1, // Stagger effect
      });

      return controls.stop;
    }
  }, [isInView, stat.value, index, count]);

  // Extract non-numeric characters for the suffix (e.g. "k+" from "40k+")
  const suffix = stat.value.replace(/[0-9]/g, "");

  return (
    <div
      ref={ref}
      className={cn(
        "p-5 rounded-3xl glass-card glass-hover transition-all duration-700 flex flex-col justify-center gap-1 group cursor-default min-h-[125px] lg:min-h-0",
        inViewProp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${(index + 1) * 100}ms` }}
    >
      <div className="flex items-center gap-2.5 mb-1">
        <stat.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
        <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-medium">
          {stat.label}
        </span>
      </div>
      <div className="flex items-baseline text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
        {/* The Animated Number */}
        <motion.span>{rounded}</motion.span>
        {/* The Static Suffix (k+, +) */}
        <span>{suffix}</span>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
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
      id="about"
      className="relative min-h-screen flex flex-col justify-center py-12 md:py-16 px-4 md:px-8 overflow-hidden bg-slate-950"
      onMouseMove={handleMouseMove}
      style={{
        "--mouse-x": `${mousePos.x}%`,
        "--mouse-y": `${mousePos.y}%`,
      } as React.CSSProperties}
    >
      {/* Background Spotlight */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(14, 165, 233, 0.15), transparent 80%)`
        }} 
      />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section header */}
        <div
          className={cn(
            "flex items-center gap-4 mb-6 md:mb-10 transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}
        >
          <span className="text-primary font-mono text-xs md:text-sm tracking-wider uppercase">01 / ABOUT</span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto lg:auto-rows-[125px]">
          
          {/* 1. UNIVERSITY CARD */}
          <div
            className={cn(
              "col-span-1 md:col-span-2 lg:row-span-2 p-6 md:p-8 rounded-3xl glass-card glass-hover transition-all duration-700 flex flex-col relative overflow-hidden group",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 shrink-0 shadow-inner shadow-primary/20">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-0.5">York University</h3>
                  <p className="text-primary/90 text-xs md:text-sm font-medium">Bachelors in Computer Science</p>
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest pl-0.5">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures", "Big Data", "AI", "Computer Vision"].map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-muted-foreground border border-white/10 hover:bg-white/10 hover:text-primary transition-colors cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. STATS CARDS (Now using the new Casino Ticker Component) */}
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inViewProp={inView} />
          ))}

          {/* 3. TECH STACK */}
          <div
            className={cn(
              "col-span-1 md:col-span-2 p-6 rounded-3xl glass-card glass-hover transition-all duration-700 flex flex-col justify-center",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-4 h-4 text-primary" />
              <h3 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.values(skills).flat().map((skill, i) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors cursor-default border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 4. INTERESTS - "Offline" section */}
          <div
            className={cn(
              "col-span-1 md:col-span-2 p-6 rounded-3xl glass-card glass-hover transition-all duration-700 flex flex-col justify-center",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "600ms" }}
          >
             <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-primary" />
              <h3 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Offline</h3>
            </div>
            {/* Grid layout fixed to prevent squishing */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interests.map((interest) => (
                <div
                  key={interest.label}
                  className="flex items-center justify-center md:justify-start gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group cursor-default border border-white/5"
                >
                  <div className={cn("p-1.5 rounded-lg bg-gradient-to-br shadow-sm", interest.color)}>
                    <interest.icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[10px] md:text-xs text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                    {interest.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}