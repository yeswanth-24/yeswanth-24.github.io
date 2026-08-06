import { GITHUB, timeline } from "../data/projects";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section id="journey" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">// Journey</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">How the work compounded</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Each project deliberately added a capability the last one lacked — models, then
            pipelines, then systems, then real time, then full products.
          </p>
        </Reveal>

        <ol className="relative mt-12 border-l border-line pl-8">
          {timeline.map((t, i) => (
            <Reveal key={t.slug} delay={i * 70}>
              <li className="relative pb-10 last:pb-0">
                {/* node */}
                <span
                  className="absolute -left-[41px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-brand/60 bg-ink"
                  aria-hidden
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                </span>

                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
                  Step {String(i + 1).padStart(2, "0")} · {t.theme}
                </span>
                <h3 className="mt-1 text-lg font-semibold">
                  <a
                    href={`${GITHUB}/${t.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand"
                  >
                    {t.title} <span className="text-muted">↗</span>
                  </a>
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">{t.note}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
