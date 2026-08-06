import { useEffect, useState } from "react";
import { GITHUB } from "../data/projects";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
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
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-line bg-ink/85 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#" className="font-mono text-sm font-semibold text-mint">
          yeshvanth@ml:~$
        </a>
        <div className="hidden items-center gap-6 text-sm sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted transition-colors hover:text-body">
              {l.label}
            </a>
          ))}
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-3 py-1.5 text-xs font-semibold transition hover:border-brand"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
