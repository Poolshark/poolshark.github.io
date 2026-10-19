import React from "react";
import { siBluesky, siGithub } from "simple-icons";
import BrandIcon from "@/components/BrandIcon";
import { resume } from "@/data/resume";
import { cn } from "@/lib/utils";

// LinkedIn is no longer part of simple-icons, so it gets its own path.
const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className={cn("h-4 w-4 shrink-0", className)}
  >
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

const links = [
  {
    label: "GitHub",
    href: resume.contact.github,
    icon: <BrandIcon icon={siGithub} />,
  },
  {
    label: "LinkedIn",
    href: resume.contact.linkedin,
    icon: <LinkedInIcon />,
  },
  {
    label: "Bluesky",
    href: resume.contact.bluesky,
    icon: <BrandIcon icon={siBluesky} />,
  },
].filter((link): link is typeof link & { href: string } => Boolean(link.href));

const SocialLinks: React.FC<{ className?: string }> = ({ className }) => (
  <ul className={cn("flex items-center gap-2", className)}>
    {links.map((link) => (
      <li key={link.label}>
        <a
          href={`https://${link.href}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${link.label} (opens in a new tab)`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/40 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {link.icon}
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
