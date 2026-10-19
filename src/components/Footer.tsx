import React from "react";
import { resume } from "@/data/resume";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <a href="#about" className="font-mono text-xl font-bold tech-gradient" aria-label="Back to top">
          FR
        </a>
        <p className="text-sm text-muted-foreground">
          © {currentYear} {resume.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
