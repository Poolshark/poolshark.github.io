import React from "react";
import { Brain, Cloud, LayoutTemplate, Orbit, Server, Users, type LucideIcon } from "lucide-react";
import { resume, type SkillGroupId } from "@/data/resume";
import { getBrandIcon } from "@/lib/brandIcons";
import BrandIcon from "@/components/BrandIcon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const groupIcons: Record<SkillGroupId, LucideIcon> = {
  ai: Brain,
  frontend: LayoutTemplate,
  backend: Server,
  cloud: Cloud,
  leadership: Users,
  science: Orbit,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative isolate py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-tech-purple/10 blur-[120px]"
      />
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="What I work with"
          description="The tools and disciplines I rely on day to day, grouped by where they show up in my work."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resume.skills.map((group, index) => {
            const Icon = groupIcons[group.id];
            return (
              <Reveal as="li" key={group.id} delay={index * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40">
                  {/* Soft glow that appears on hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/25">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{group.summary}</p>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                    {group.skills.map((skill) => {
                      const brand = getBrandIcon(skill);
                      return (
                        <li
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1 text-sm text-foreground/90"
                        >
                          {brand && <BrandIcon icon={brand} className="h-3.5 w-3.5 text-muted-foreground" />}
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
