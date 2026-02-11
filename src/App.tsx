import { Hero } from "../components/portfolio/hero";
import { Navbar } from "../components/portfolio/navbar";
import { About } from "../components/portfolio/about";
import { Experience } from "../components/portfolio/experience";
import { Projects } from "../components/portfolio/projects";
import { Contact } from "../components/portfolio/contact";
import { Footer } from "../components/portfolio/footer";
import { HorizontalScrollText, MarqueeText } from "../components/portfolio/scroll-text";

export default function Portfolio() {
  return (
    <main className="relative">
      {/* Custom cursor for desktop */}
      {/* <CustomCursor /> */}

      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Horizontal scrolling text divider */}
      <HorizontalScrollText 
        text="CREATIVE DEVELOPER • PROBLEM SOLVER • UI ENTHUSIAST" 
        speed={0.4} 
      />

      {/* About Section */}
      <About />

      {/* Scroll reveal text */}
      {/* <ScrollRevealText 
        text="I believe great software is built at the intersection of engineering excellence and thoughtful design. Every line of code is an opportunity to create something meaningful." 
      /> */}

      {/* Experience Section */}
      <Experience />

      {/* Marquee divider */}
      <MarqueeText text="SHIP IT" speed={0.8} reverse />

      {/* Projects Section */}
      <Projects />

      {/* Horizontal scrolling text */}
      <HorizontalScrollText 
        text="REACT • NEXT.JS • TYPESCRIPT • NODE.JS • PYTHON • RUST" 
        speed={0.3} 
      />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
