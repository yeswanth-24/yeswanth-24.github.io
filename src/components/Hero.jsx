import { useEffect, useState } from "react";
import { EMAIL } from "../data/projects";

const ROLES = [
  "computer vision pipelines",
  "real-time ML systems",
  "NLP interfaces",
  "3D reconstruction",
  "mobile ML apps",
];

function useRotatingText(words, speed = 2600) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), speed);
    return () => clearInterval(t);
  }, [words.length, speed]);
  return words[i];
}

export default function Hero() {
  const role = useRotatingText(ROLES);

  return (
    <header className="relative overflow-hidden">
      {/* aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[120px]" />
        <div className="absolute -top-24 right-10 h-[360px] w-[360px] rounded-full bg-mint/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at top, #000 30%, transparent 72%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 pt-28 pb-20">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3 py-1 font-mono text-xs text-mint">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          Open to ML/AI engineering roles
        </div>

        <h1 className="animate-fade-up mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
          Hi, I'm Yeshvanth.
          <br />
          I build <span className="text-brand">{role}</span>
          <span className="ml-0.5 inline-block w-[3px] animate-pulse bg-brand align-middle text-transparent">
            |
          </span>
        </h1>

        <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          ML/AI engineer working end to end — from the geometry and model math through tested APIs,
          web and mobile clients, and one-command deploys. Eight open-source systems, all shipped.
        </p>

        <div className="animate-fade-up mt-9 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-lg bg-brand px-6 py-3 font-semibold text-ink transition hover:brightness-110"
          >
            See my work
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-lg border border-line px-6 py-3 font-semibold transition hover:border-brand"
          >
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}
