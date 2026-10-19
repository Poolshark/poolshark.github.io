import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { resume } from "@/data/resume";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-primary/20 bg-card/60 px-6 py-14 text-center md:px-16 md:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="bg-dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-tech-purple/25 blur-[100px]" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-tech-blue/20 blur-[100px]" />
            </div>

            <p className="mb-3 flex items-center justify-center gap-3 font-mono text-sm text-primary">
              <span>04</span>
              <span aria-hidden="true" className="h-px w-8 bg-primary/50" />
              <span className="uppercase tracking-widest">Contact</span>
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Let's <span className="tech-gradient">work together</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi,
              I'll get back to you as soon as possible.
            </p>

            <div className="mt-9 flex flex-col items-center gap-5">
              <Button size="lg" className="shadow-lg shadow-primary/20" asChild>
                <a href={`mailto:${resume.contact.email}`}>
                  <Mail aria-hidden="true" />
                  Send me an email
                </a>
              </Button>
              <a
                href={`mailto:${resume.contact.email}`}
                className="font-mono text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                {resume.contact.email}
              </a>
              <SocialLinks className="mt-2" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
