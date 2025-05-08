
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      } py-4`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-mono font-bold tech-gradient">FR</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
          <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
          <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
        </nav>
        <Button variant="outline" className="hidden md:flex items-center gap-2" asChild>
          <a href="/cv.pdf" download>
            <FileText className="h-4 w-4" />
            <span>Resume</span>
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <span className="sr-only">Navigation</span>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
