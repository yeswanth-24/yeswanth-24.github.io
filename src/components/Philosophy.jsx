import { philosophy } from "../data/projects";
import Emblem from "./Emblem";
import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative border-t border-line">
      {/* emblem watermark */}
      <Emblem
        size={420}
        className="pointer-events-none absolute -right-24 top-1/2 -z-10 -translate-y-1/2 opacity-[0.07]"
      />

      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">// Tech philosophy</p>
          <blockquote className="mt-5 max-w-3xl text-2xl font-semibold leading-snug sm:text-4xl">
            <span className="gradient-text">"{philosophy.statement}"</span>
          </blockquote>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">{philosophy.body}</p>
        </Reveal>

        <Reveal delay={120}>
          <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
            {philosophy.pillars.map((p) => (
              <div key={p.k} className="glass px-5 py-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">{p.k}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{p.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
