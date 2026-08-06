import { useEffect, useState } from "react";
import { EMAIL, RESUME, shortBio } from "../data/projects";
import Avatar from "./Avatar";

const ROLES = [
  "computer vision pipelines",
  "real-time ML systems",
  "NLP interfaces",
  "3D reconstruction",
  "mobile ML apps",
];

const TELEMETRY = [
  ["SHIPPED", "8 systems · all open source"],
  ["RIGOR", "93 tests · CI on every repo"],
  ["RANGE", "model math → mobile app"],
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <header id="top" className="relative mx-auto max-w-5xl px-6 pt-24 pb-20">
      {/* emblem artwork, faint, behind the name */}
      <img
        src={`${import.meta.env.BASE_URL}emblem.png`}
        alt=""
        aria-hidden
        width="640"
        height="601"
        decoding="async"
        className="emblem-mark left-[-90px] top-[40px] w-[560px] max-w-none"
      />

      <div className="grid items-center gap-12 md:grid-cols-[1.25fr_1fr]">
        <div className="relative">
          <div className="name-fx" aria-hidden>
            <span />
            <span />
            <span />
          </div>

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

          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I take on the problems that don't have a library — and finish them. Model math through
            tested APIs, web and mobile clients, and one-command deploys.
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn-primary glow-ring rounded-lg bg-brand px-6 py-3 font-semibold text-ink hover:brightness-110"
            >
              See my work
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${RESUME}`}
              download
              className="btn-ghost rounded-lg border border-brand/50 px-6 py-3 font-semibold text-brand hover:bg-brand/10"
            >
              ↓ Download resume
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="btn-ghost rounded-lg border border-line px-6 py-3 font-semibold hover:border-brand hover:text-brand"
            >
              Hire me
            </a>
          </div>
        </div>

        <div className="animate-fade-up order-first md:order-last">
          <Avatar />
        </div>
      </div>

      {/* tiny about — three lines, above the fold */}
      <div className="hud glass animate-fade-up mt-14 rounded-xl p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">// About me</p>
        <div className="mt-3 space-y-1.5">
          {shortBio.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-muted">
              {line}
            </p>
          ))}
        </div>
      </div>

      <dl className="hud scan animate-fade-up mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
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
