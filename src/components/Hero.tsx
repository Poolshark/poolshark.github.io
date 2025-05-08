
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { resume } from "@/data/resume";
import ProfilePicture from "@/components/ProfilePicture";

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-16 relative">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <ProfilePicture />
      </div>
      <div className="container relative z-10">
        <div className="max-w-3xl space-y-6 bg-background/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <p className="text-primary font-mono opacity-0 animate-fade-in">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl font-bold opacity-0 animate-fade-in animate-delay-100">
            {resume.name}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground opacity-0 animate-fade-in animate-delay-200">
            {resume.title}
          </h2>
          <p className="text-muted-foreground max-w-xl opacity-0 animate-fade-in animate-delay-300">
            {resume.summary}
          </p>
          <div className="flex gap-4 pt-4 opacity-0 animate-fade-in animate-delay-400">
            <Button asChild>
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block z-10">
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <div className="w-px h-8 bg-primary/50 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
