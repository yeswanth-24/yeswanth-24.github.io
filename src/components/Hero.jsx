import { useEffect, useState } from "react";
import { EMAIL } from "../data/projects";

const ROLES = [
  "computer vision pipelines",
  "real-time ML systems",
  "NLP interfaces",
  "3D reconstruction",
  "mobile ML apps",
];

const TELEMETRY = [
  ["SYS", "8 systems online"],
  ["CORE", "vision · ml · nlp"],
  ["STATUS", "open to roles"],
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="mx-auto max-w-5xl px-6 pt-28 pb-20">
      <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/5 px-3 py-1 font-mono text-xs tracking-wide text-brand">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
        </span>
        AVAILABLE FOR ML/AI ENGINEERING ROLES
      </div>

      <h1 className="animate-fade-up mt-7 text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
        Hi, I'm Yeshvanth.
        <br />
        <span className="text-muted">I build </span>
        <span key={i} className="gradient-text glow-text animate-fade-up">
          {ROLES[i]}
        </span>
        <span className="ml-1 inline-block h-[0.9em] w-[3px] animate-pulse bg-brand align-[-0.08em]" />
      </h1>

      <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        ML/AI engineer working end to end — from the geometry and model math through tested APIs,
        web and mobile clients, and one-command deploys. Eight open-source systems, all shipped.
      </p>

      <div className="animate-fade-up mt-9 flex flex-wrap gap-3">
        <a
          href="#work"
          className="glow-ring rounded-lg bg-brand px-6 py-3 font-semibold text-ink transition hover:brightness-110"
        >
          See my work
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-lg border border-line px-6 py-3 font-semibold transition hover:border-brand hover:text-brand"
        >
          Hire me
        </a>
      </div>

      <dl className="hud scan animate-fade-up mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
        {TELEMETRY.map(([k, v]) => (
          <div key={k} className="glass px-5 py-4">
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">{k}</dt>
            <dd className="mt-1 font-mono text-sm">{v}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
