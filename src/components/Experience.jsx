import { education, experience } from "../data/projects";
import Reveal from "./Reveal";

const ACCENT = {
  ml: "var(--color-blue)",
  robotics: "var(--color-amber)",
  vision: "var(--color-brand)",
  backend: "var(--color-violet)",
};

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">// Experience</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Where I've built</h2>
          <p className="mt-3 max-w-2xl text-muted">
            From EKF state estimation on real drones to production data pipelines — shipped systems
            with consequences, not sandboxes.
          </p>
        </Reveal>

        <div className="mt-10 space-y-4">
          {experience.map((job, i) => {
            const accent = ACCENT[job.domain] ?? ACCENT.ml;
            return (
              <Reveal key={`${job.org}-${job.role}`} delay={i * 70}>
                <article
                  style={{ "--accent": accent }}
                  className="hud glass glass-hover rounded-xl p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold">
                      {job.role}
                      <span className="text-muted"> · </span>
                      <span style={{ color: accent }}>{job.org}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {job.period} · {job.place}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm leading-relaxed text-muted">
                        <span style={{ color: accent }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <h3 className="mt-14 font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
            Education
          </h3>
          <div className="mt-4 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {education.map((e) => (
              <div key={e.degree} className="glass p-6">
                <h4 className="font-semibold">{e.degree}</h4>
                <p className="mt-1 text-sm text-muted">{e.school}</p>
                <p className="mt-2 font-mono text-xs text-muted">
                  {e.place} · {e.period} · GPA {e.gpa}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
