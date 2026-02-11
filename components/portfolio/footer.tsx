"use client";

import { ArrowUp } from "lucide-react";
import { MarqueeText } from "./scroll-text";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 overflow-hidden">
      {/* Background text marquee */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <MarqueeText text="RAYYAN AHMED" speed={0.5} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - copyright */}
          <div className="text-center md:text-left">
            {/* <p className="text-muted-foreground text-sm">
              Designed & Built with care
            </p>
            <p className="text-muted-foreground/60 text-xs mt-1">
              &copy; {new Date().getFullYear()} Rayyan Ahmed. All rights reserved.
            </p> */}
          </div>

          {/* Center - nav links */}
          <nav className="flex items-center gap-8">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary underline-grow transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right - back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 p-3 rounded-full glass glass-hover transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </div>
    </footer>
  );
}
