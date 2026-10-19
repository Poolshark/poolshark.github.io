import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { resume } from "@/data/resume";
import ProfilePicture from "@/components/ProfilePicture";
import SocialLinks from "@/components/SocialLinks";

const Hero: React.FC = () => {
  const roles = resume.title.split("|").map((role) => role.trim());

  return (
    <section id="about" className="relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      {/* Background: dot grid + colour glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-tech-purple/20 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-tech-blue/15 blur-[130px]" />
      </div>

      <div className="container grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div className="order-2 space-y-7 lg:order-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-sm text-muted-foreground opacity-0 animate-fade-in backdrop-blur-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </p>

          <div className="space-y-4">
            <h1 className="font-display text-5xl font-bold tracking-tight opacity-0 animate-fade-in animate-delay-100 sm:text-6xl lg:text-7xl">
              {resume.name.split(" ")[0]}{" "}
              <span className="tech-gradient">{resume.name.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-medium text-foreground/80 opacity-0 animate-fade-in animate-delay-200 md:text-2xl">
              {roles.map((role, i) => (
                // Separator lives inside the same span so it wraps together with its role
                <span key={role} className="inline-flex items-center gap-3">
                  {i > 0 && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary/70" />}
                  {role}
                </span>
              ))}
            </p>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground opacity-0 animate-fade-in animate-delay-300 md:text-lg">
            {resume.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in animate-delay-400">
            <Button size="lg" className="shadow-lg shadow-primary/20" asChild>
              <a href="/cv.pdf" download="Flo-Ragossnig-CV.pdf">
                <Download aria-hidden="true" />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <a href="#contact">
                Get in touch
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <SocialLinks className="sm:ml-2" />
          </div>

          <dl className="grid max-w-lg grid-cols-3 gap-6 border-t border-border/70 pt-7 opacity-0 animate-fade-in animate-delay-500">
            {resume.highlights.map((item) => (
              <div key={item.label} className="flex flex-col-reverse justify-end gap-1">
                <dt className="text-xs leading-snug text-muted-foreground sm:text-sm">{item.label}</dt>
                <dd className="font-display text-3xl font-bold tech-gradient md:text-4xl">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 opacity-0 animate-fade-in lg:order-2">
          <ProfilePicture />
        </div>
      </div>

      <a
        href="#experience"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary lg:flex"
      >
        Scroll
        <span aria-hidden="true" className="h-10 w-px bg-gradient-to-b from-primary to-transparent animate-pulse-glow" />
      </a>
    </section>
  );
};

export default Hero;
