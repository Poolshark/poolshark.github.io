import React from "react";
import { resume } from "@/data/resume";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const isCurrent = (period: string) => /present/i.test(period);

// "2020 - present" -> "2020 – Present"
const formatPeriod = (period: string) =>
  period.replace(/\s*-\s*/, " – ").replace(/present/i, "Present");

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="Experience"
          title="Where I've been building"
          description="From research software at the University of Vienna to leading engineering as a CTO and founding my own products."
        />

        <div className="relative max-w-4xl">
          {/* Timeline rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-[11px] top-4 w-px bg-gradient-to-b from-primary/70 via-border to-transparent"
          />

          <ol>
            {resume.experience.map((job) => {
              const current = isCurrent(job.period);
              return (
                <Reveal
                  as="li"
                  key={`${job.company}-${job.title}`}
                  className="relative pb-8 pl-9 last:pb-0 md:pl-14"
                >
                  {/* Timeline marker */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute left-0 top-7 flex h-6 w-6 items-center justify-center rounded-full border bg-background",
                      current ? "border-primary/60" : "border-border"
                    )}
                  >
                    <span
                      className={cn(
                        "h-2.5 w-2.5 rounded-full",
                        current
                          ? "bg-primary shadow-[0_0_12px_2px_hsl(var(--primary)/0.6)]"
                          : "bg-muted-foreground/50"
                      )}
                    />
                  </span>

                  <article className="rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 sm:p-6 md:p-7">
                    <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-display text-lg font-semibold md:text-xl">{job.title}</h3>
                        <p className="mt-0.5 font-medium text-primary">{job.company}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        {current && (
                          <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
                            Current
                          </span>
                        )}
                        <span className="whitespace-nowrap rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
                          {formatPeriod(job.period)}
                        </span>
                      </div>
                    </header>

                    <ul className="mt-5 space-y-2.5">
                      {job.description.map((point) => (
                        <li key={point} className="flex gap-3 leading-relaxed text-muted-foreground">
                          <span
                            aria-hidden="true"
                            className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {job.technologies && job.technologies.length > 0 && (
                      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                        {job.technologies.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-md border border-border/70 bg-background/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
