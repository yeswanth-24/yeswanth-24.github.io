import { useEffect, useState } from "react";
import { GITHUB } from "../data/projects";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
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
        <span className="font-mono text-sm font-semibold text-mint">yeshvanth@ml:~$</span>
        <div className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted transition-colors hover:text-body">
              {l.label}
            </a>
          ))}
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-body"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
