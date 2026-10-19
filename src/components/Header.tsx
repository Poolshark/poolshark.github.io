import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FileText, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full border-b py-4 transition-all duration-300",
        scrolled
          ? "border-border/60 bg-background/75 shadow-lg shadow-black/10 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#about" className="font-mono text-xl font-bold tech-gradient" aria-label="Flo Ragossnig, back to top">
          FR
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button variant="outline" className="hidden bg-transparent md:inline-flex" asChild>
          <a href="/cv.pdf" download>
            <FileText aria-hidden="true" />
            Resume
          </a>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-border bg-background" aria-describedby={undefined}>
            <SheetTitle className="font-mono tech-gradient">FR</SheetTitle>
            <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <Button className="mt-8 w-full" asChild>
              <a href="/cv.pdf" download>
                <FileText aria-hidden="true" />
                Download CV
              </a>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
