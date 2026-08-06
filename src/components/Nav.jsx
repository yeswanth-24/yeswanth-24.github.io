import { useEffect, useState } from "react";
import { GITHUB } from "../data/projects";

const links = [
  { href: "#about", label: "About" },
  { href: "#principles", label: "Method" },
  { href: "#hard-problem", label: "Deep dive" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled ? "border-brand/20 bg-ink/70 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#" className="font-mono text-sm font-semibold tracking-tight text-brand">
          <span className="text-muted">/</span>yeshvanth
        </a>
        <div className="hidden items-center gap-6 text-sm sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-brand/40 px-3 py-1.5 font-mono text-xs text-brand transition hover:bg-brand/10"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
