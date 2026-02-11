"use client";

import React, { useRef, useEffect, useState } from "react";
import { Briefcase, GraduationCap, Award, ExternalLink, Calendar } from "lucide-react";
import { cn } from "../../src/lib/utils";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Software Engineer Intern",
    company: "Wealthsimple",
    period: "May 2025 - September 2025",
    description:
      "Engineered a custom Ruby observability library that standardized Datadog metrics for 1000+ daily GraphQL and REST API calls with custom tagging, cutting incident detection time from hours to under 5 minutes.",
    tech: ["Ruby on Rails", "TypeScript", "Datadog", "GraphQL"],
    link: "https://wealthsimple.com",
    highlight: "FinTech",
  },
  {
    id: 2,
    type: "work",
    title: "Software Engineer Intern",
    company: "Electronic Arts (EA)",
    period: "May 2024 - December 2024",
    description:
      "Automated Perforce integrations using a C# tool, boosting developer productivity by 40% across NHL team.",
    tech: ["C#", "Python", "Docker", "Kubernetes", "AWS"],
    link: "https://www.ea.com/",
    highlight: "Gaming",
  },
  {
    id: 3,
    type: "work",
    title: "Software Engineer Intern",
    company: "Bell",
    period: "May 2023 - September 2023",
    description:
      "Replaced legacy storage with a Java CI/CD pipeline streaming department’s revenue data into Elasticsearch, improving processing efficiency by 40%.",
    tech: ["Java", "Kafka", "Logstash", "Grafana", "Python", "Elasticsearch"],
    link: "https://www.bell.ca/",
    highlight: "Telecom",
  },
  {
    id: 4,
    type: "work",
    title: "Software Engineer Intern",
    company: "Bell",
    period: "May 2022 - September 2022",
    description:
      "Developed a full-stack application with React, Flask, and SQL to visualize outages and upgrades, improving operational efficiency by 40%.",
    tech: ["React", "Flask", "SQL", "Python", "REST"],
    link: "https://www.bell.ca/",
    highlight: "Telecom",
  },
  {
    id: 5,
    type: "work",
    title: "Automation Developer",
    company: "Ontario Ministry",
    period: "Jan 2022 - May 2022",
    description:
      "Automated Azure load balancing with PowerShell for 400+ workloads, ensuring uptime during updates.",
    tech: ["Azure", "Powershell", "VMs", "PowerBI"],
    link: "https://www.ontario.ca/page/ministry-public-and-business-service-delivery-and-procurement",
    highlight: "Ministry",
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);
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
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "work": return Briefcase;
      case "education": return GraduationCap;
      case "award": return Award;
      default: return Briefcase;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-slate-950"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div className="text-[40vw] font-black text-cyan-500 leading-none">
          EXP
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section header */}
        <div
          className={cn(
            "flex items-center gap-4 mb-16 md:mb-24 transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">02 / EXPERIENCE</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={cn(
                    "relative grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveId(exp.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative flex items-center justify-center">
                      <div className={cn(
                        "w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-500 transition-all duration-300 border-4 border-slate-950",
                        activeId === exp.id && "scale-150 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                      )} />
                      {activeId === exp.id && (
                        <div className="absolute inset-0 rounded-full bg-cyan-500/50 animate-ping" />
                      )}
                    </div>
                  </div>

                  {/* 1. DATE / INFO SIDE */}
                  <div className={cn(
                    "pl-12 md:pl-0 flex",
                    isEven 
                      ? "md:pr-16 md:justify-end" // Even: Content aligns to right edge of box
                      : "md:order-2 md:pl-16 md:justify-start" // Odd: Content aligns to left edge of box
                  )}>
                    {/* Inner wrapper to keep Date and Icon together side-by-side */}
                    <div className={cn(
                      "flex items-center gap-4",
                      // On Desktop: Swap order based on side so Icon is always closest to center line
                      // Left Side (Even): Date -> Icon
                      // Right Side (Odd): Icon -> Date
                      !isEven && "md:flex-row-reverse" 
                    )}>
                      {/* Date Text */}
                      <span className="text-cyan-400 font-mono text-xs md:text-sm uppercase tracking-wide">
                        {exp.period}
                      </span>
                      
                      {/* Icon Box (Hidden on mobile, visible on desktop) */}
                      <div className={cn(
                        "hidden md:flex p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 shrink-0",
                        activeId === exp.id ? "border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]" : ""
                      )}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* 2. CARD SIDE */}
                  <div className={cn(
                    "pl-12 md:pl-0",
                    isEven 
                      ? "md:order-2 md:pl-16" // Even: Card on Right
                      : "md:pr-16" // Odd: Card on Left
                  )}>
                    <div
                      className="group relative p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl glass-card"
                      onMouseMove={handleMouseMove}
                    >
                      {/* Spotlight Effect */}
                      {activeId === exp.id && (
                        <div 
                          className="absolute inset-0 pointer-events-none opacity-20"
                          style={{
                            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.3), transparent 80%)`,
                          }}
                        />
                      )}

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4 relative z-10">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {exp.title}
                          </h3>
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mt-1"
                          >
                            {exp.company}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>

                        {/* Highlight Badge */}
                        <div className="self-start">
                          <span className="px-3 py-1 text-[10px] md:text-xs font-mono font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            {exp.highlight}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
                        {exp.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 relative z-10">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-slate-300 border border-white/5 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}