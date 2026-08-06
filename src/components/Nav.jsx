import { useEffect, useState } from "react";
import { GITHUB } from "../data/projects";
import Emblem from "./Emblem";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "about", label: "About" },
  { id: "philosophy", label: "Philosophy" },
  { id: "hard-problem", label: "Deep dive" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.4] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled ? "border-line bg-ink/70 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold text-brand">
          <Emblem size={22} />
          <span className="hidden sm:inline">yeshvanth</span>
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                active === l.id ? "text-brand" : "text-muted hover:text-body"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
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
