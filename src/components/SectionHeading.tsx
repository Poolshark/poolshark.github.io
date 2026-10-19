import React from "react";
import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ index, eyebrow, title, description }) => (
  <Reveal className="mb-12 max-w-2xl">
    <p className="mb-3 flex items-center gap-3 font-mono text-sm text-primary">
      <span>{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-primary/50" />
      <span className="uppercase tracking-widest">{eyebrow}</span>
    </p>
    <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>}
  </Reveal>
);

export default SectionHeading;
