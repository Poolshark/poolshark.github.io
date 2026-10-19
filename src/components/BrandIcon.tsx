import React from "react";
import type { SimpleIcon } from "simple-icons";
import { cn } from "@/lib/utils";

interface BrandIconProps {
  icon: SimpleIcon;
  className?: string;
}

/** Monochrome brand icon. Decorative: always pair it with a visible or sr-only label. */
const BrandIcon: React.FC<BrandIconProps> = ({ icon, className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className={cn("h-4 w-4 shrink-0", className)}
  >
    <path d={icon.path} />
  </svg>
);

export default BrandIcon;
