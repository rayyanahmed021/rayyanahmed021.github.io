"use client";

import React from "react"

import { useEffect, useState, useRef } from "react";
import { cn } from "../../src/lib/utils";

interface MarqueeTextProps {
  text: string;
  className?: string;
  reverse?: boolean;
  speed?: number;
}

export function MarqueeText({ text, className, reverse = false, speed = 1 }: MarqueeTextProps) {
  const duration = 30 / speed;

  return (
    <div className={cn("overflow-hidden whitespace-nowrap py-8", className)}>
      <div
        className={cn(
          "inline-flex",
          reverse ? "marquee-reverse" : "marquee"
        )}
        style={{ "--duration": `${duration}s` } as React.CSSProperties}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-muted/10 mx-8 select-none"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

interface HorizontalScrollTextProps {
  text: string;
  speed?: number;
}

export function HorizontalScrollText({ text, speed = 0.3 }: HorizontalScrollTextProps) {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far through the viewport the element has scrolled
      const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      setScrollX(scrollProgress * speed * 1000);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className="overflow-hidden py-16 relative">
      {/* Background line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div
        className="flex whitespace-nowrap"
        style={{ transform: `translateX(-${scrollX}px)` }}
      >
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground/5 mx-8 select-none flex items-center gap-8"
          >
            {text.split(" • ").map((word, j) => (
              <span key={j} className="flex items-center gap-8">
                {word}
                {j < text.split(" • ").length - 1 && (
                  <span className="w-3 h-3 rounded-full bg-primary/30" />
                )}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export function ScrollRevealText({ text, className }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Start revealing when element enters viewport, complete when it's centered
      const scrollProgress = Math.max(0, Math.min(1, 
        (viewportHeight - rect.top) / (viewportHeight * 0.8)
      ));
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={cn("py-20 px-6", className)}>
      <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-5xl mx-auto">
        {words.map((word, i) => {
          const wordProgress = Math.max(0, Math.min(1, 
            (progress * words.length - i) / 1
          ));
          return (
            <span
              key={i}
              className="inline-block mr-[0.3em] transition-all duration-300"
              style={{
                opacity: 0.2 + wordProgress * 0.8,
                transform: `translateY(${(1 - wordProgress) * 20}px)`,
                color: wordProgress > 0.5 ? "oklch(0.95 0.01 260)" : "oklch(0.4 0.01 260)",
              }}
            >
              {word}
            </span>
          );
        })}
      </p>
    </div>
  );
}
