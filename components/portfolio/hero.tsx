"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useMotionValue
} from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Globe } from "lucide-react";
import Beams from "../../src/Beams";

// --- THE 3D CARD COMPONENT ---
const FifaCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["30deg", "-30deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-30deg", "30deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        transformStyle: "preserve-3d",
      }}
      // Responsive width/height: smaller on mobile (280px), larger on desktop (380px)
      className="relative w-[280px] h-[375px] md:w-[380px] md:h-[500px] cursor-pointer group perspective-1000"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full transition-all duration-500 ease-out"
      >
        {/* 1. The Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: "translateZ(20px)",
            filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))"
          }}
        >
          <img
            src="/img.png" // Ensure this is your transparent PNG
            alt="Rayyan Ahmed FIFA Card"
            className="w-full h-full object-contain pointer-events-none"
          />
        </div>

        {/* 2. The Glare Effect */}
        <motion.div
          style={{
            transform: "translateZ(21px)",
            maskImage: "url(/img.png)",
            WebkitMaskImage: "url(/img.png)",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            background: useMotionTemplate`
              radial-gradient(
                circle at ${useTransform(xSpring, [-0.5, 0.5], ["30%", "70%"])} ${useTransform(ySpring, [-0.5, 0.5], ["30%", "70%"])},
                rgba(255, 255, 255, 0.4) 0%, 
                transparent 50%
              )
            `,
          }}
          className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
        />
      </motion.div>
    </motion.div>
  );
};


// --- MAIN HERO COMPONENT ---
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax for text
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse Spotlight Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-slate-950 text-white selection:bg-cyan-500/30 py-12 md:py-20"
    >
      {/* --- Dynamic Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#00d5ff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* --- Main Content Grid --- */}
      {/* Changes: 
          1. max-w-6xl: Pulls content closer together on large screens.
          2. px-4 md:px-8: Proper side padding on mobile.
          3. gap-8 lg:gap-20: Tighter gap on mobile, spacious gap on desktop.
      */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

        {/* Left Column: Text Content */}
        {/* Mobile: Order 2 (Bottom), Center Aligned. Desktop: Order 1 (Left), Left Aligned */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm mb-6 md:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs md:text-sm font-mono text-green-100 tracking-wide">TORONTO, ON</span>
          </motion.div>

          {/* Name */}
          <motion.div style={{ y: y1, opacity }} className="relative z-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 leading-[0.9]">
              <span className="block text-white">RAYYAN</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">AHMED</span>
            </h1>
          </motion.div>

          {/* Bio Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed font-light max-w-lg mb-8"
          >
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-2 md:gap-4 mt-2 text-sm font-mono opacity-70">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Toronto, Ontario
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" /> 2026 Graduate
              </span>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 items-center"
          >
            <SocialLink href="https://github.com/rayyanahmed021" icon={Github} />
            <SocialLink href="https://www.linkedin.com/in/rayyan-ahmed/" icon={Linkedin} />
            <SocialLink href="mailto:rahmed10@my.yorku.ca" icon={Mail} />
          </motion.div>
        </div>

        {/* Right Column: FIFA Card */}
        {/* Mobile: Order 1 (Top). Desktop: Order 2 (Right) */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-container">
          <FifaCard />
        </div>

      </div>
    </section>
  );
}

// --- Helper Components ---
const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 group"
    >
      <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
    </a>
  );
};
