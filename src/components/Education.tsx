import React from "react";
import { GraduationCap } from "lucide-react";
import { resume } from "@/data/resume";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="container">
        <SectionHeading index="03" eyebrow="Education" title="Academic background" />

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resume.education.filter((edu) => !edu.cvOnly).map((edu, index) => (
            <Reveal as="li" key={edu.degree} delay={index * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/25">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    {edu.period.replace(/\s*-\s*/, " – ")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{edu.degree}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{edu.institution}</p>
                {edu.description && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{edu.description}</p>
                )}
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
