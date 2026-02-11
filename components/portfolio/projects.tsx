"use client";

import React, { useRef, useEffect, useState } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "../../src/lib/utils";

const featuredProjects = [
  {
    id: 3,
    title: "Awliyah",
    tagline: "2nd Position at UmmahHacks",
    description:
      "Built a Quran recitation platform with TypeScript and Supabase leveraging Jitsi Meets to facilitate remote revision for Huffaz; won 2nd place at UmmahHacks.",
    tech: ["TypeScript", "Jitsi Meets", "Supabase", "Mapbox"],
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    github: "https://github.com/Awliyah-Dev/Awliyah",
    live: "https://devpost.com/software/awliyah",
    stats: { stars: 950, forks: 85 },
  },
  {
    id: 2,
    title: "VitalWave",
    tagline: "2nd Position at Ontario Engineering Competition",
    description:
      "Built a healthcare app with React and Flask, leveraging NLP and Google Maps API to recommend facilities based on patient symptoms; won 2nd place in Ontario competition.",
    tech: ["React", "Flask", "NLP", "Google Maps API"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    github: "https://github.com/idrak888/vitalwave",
    stats: { stars: 1800, forks: 220 },
  },
  {
    id: 1,
    title: "S.E.M.S",
    tagline: "Develop for Good",
    description:
      "Developed a mobile platform with React Native, Firebase, and Adyen API to empower startups in the Philippines with access to funding, mentorship, and networking.",
    tech: ["React Native", "Firebase", "Adyen API"],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    github: "https://github.com/DFG-SAPSE/SEMS",
    stats: { stars: 2400, forks: 180 },
  }
];

const otherProjects = [
  {
    title: "Movie Recommender",
    description: "Recommend the best movies based on search preferences",
    tech: ["Python", "NLP", "Flask"],
    github: "https://github.com/rayyanahmed021/movie_recommend",
  },
  {
    title: "Faang or not",
    description: "Gamified Resume Screening to improve Freshman resumes",
    tech: ["TypeScript", "Supabase", "Next.js"],
    github: "https://github.com/rayyanahmed021/faang-or-not",
  },
  {
    title: "Hospital Triage System",
    description: "Serve the needs of the pandemic",
    tech: ["C++", "Polymorphism", "Inheritance"],
    github: "https://github.com/rayyanahmed021/General-Hospital-Pre-Triage-Application",
  },
  {
    title: "Learning Platform",
    description: "Online Courses for less privileged",
    tech: ["Python", "Django", "HTML/CSS"],
    github: "https://github.com/rayyanahmed021/Online-learning-platform",
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent, id: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
    setHoveredProject(id);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-slate-950"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section header */}
        <div
          className={cn(
            "flex items-center gap-4 mb-12 md:mb-16 transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}
        >
          <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-wider uppercase">03 / PROJECTS</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
        </div>

        {/* Big title */}
        <h2
          className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold mb-16 md:mb-24 transition-all duration-1000 delay-200 text-white",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          Selected<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-700">Works</span>
        </h2>

        {/* Featured projects */}
        <div className="space-y-20 md:space-y-32 mb-20 md:mb-32">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group relative transition-all duration-1000",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              )}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              {/* Project Number (Hidden on mobile) */}
              <div className="hidden md:block absolute -left-12 lg:-left-20 top-0 text-6xl lg:text-8xl font-black text-white/5 select-none z-0">
                0{index + 1}
              </div>

              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                
                {/* Image/Preview side */}
                <div
                  className={cn(
                    "relative aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 group-hover:scale-[1.02] transition-transform duration-700",
                    // Swaps order for zig-zag, but layout remains consistent
                    index % 2 === 1 ? "lg:order-2" : ""
                  )}
                  onMouseMove={(e) => handleMouseMove(e, project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Gradient overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-500 group-hover:opacity-60",
                      project.gradient
                    )}
                  />

                  {/* Grid pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />

                  {/* Project title in preview */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                    <span className="text-3xl md:text-5xl font-black text-white/90 tracking-tight drop-shadow-lg">
                      {project.title}
                    </span>
                  </div>

                  {/* Hover spotlight effect */}
                  {hoveredProject === project.id && (
                    <div
                      className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.1), transparent 40%)`,
                      }}
                    />
                  )}

                  {/* Action buttons overlay */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    {project.live && (
                         <a
                         href={project.live}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors"
                         aria-label="View live site"
                       >
                         <ExternalLink className="w-5 h-5 text-white" />
                       </a>
                    )}
                  </div>
                </div>

                {/* Content side - FIXED ALIGNMENT */}
                <div className={cn(
                  "flex flex-col justify-center items-start text-left",
                  index % 2 === 1 ? "lg:order-1" : ""
                )}>
                  <p className="text-cyan-400 font-mono text-xs md:text-sm mb-3 tracking-wide">{project.tagline}</p>
                  
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-500">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm md:text-lg leading-relaxed mb-6 max-w-lg">
                    {project.description}
                  </p>

                  {/* Tech stack - Always Left Aligned */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-start">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div>
          <h3
            className={cn(
              "text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-white transition-all duration-1000",
              inView ? "opacity-100" : "opacity-0"
            )}
          >
            Other Noteworthy Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {otherProjects.map((project, index) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-500 flex flex-col h-full glass-card",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100 + 800}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                    <Github className="w-6 h-6 text-slate-400 group-hover:text-cyan-400" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}