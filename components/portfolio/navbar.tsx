"use client";

import { useState, useEffect } from "react";
import { useScrollProgress } from "../../hooks/use-scroll-animation";
import { cn } from "../../src/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(navLinks[index].href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50">
        <div
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Navbar */}
      <nav
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-500",
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex items-center gap-1 px-2 py-2 rounded-full glass-glow">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                activeSection === link.href
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeSection === link.href && (
                <span className="absolute inset-0 bg-primary rounded-full -z-10" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Side navigation dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-label={link.label}
            className="group relative flex items-center"
          >
            <span
              className={cn(
                "w-3 h-3 rounded-full border-2 transition-all duration-300",
                activeSection === link.href
                  ? "bg-primary border-primary scale-125"
                  : "border-muted-foreground hover:border-primary"
              )}
            />
            <span className="absolute right-6 px-2 py-1 text-xs glass rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
