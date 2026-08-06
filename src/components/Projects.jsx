import { GITHUB, domains, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const SWATCH = {
  teal: "var(--color-brand)",
  blue: "var(--color-blue)",
  violet: "var(--color-violet)",
  amber: "var(--color-amber)",
};

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">// Everything else</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Projects</h2>
          <p className="mt-3 text-muted">
            All open source ·{" "}
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
              github.com/yeswanth-24
            </a>
          </p>

          {/* colour legend */}
          <div className="mt-5 flex flex-wrap gap-4">
            {Object.entries(domains).filter(([k]) => projects.some((p) => p.domain === k)).map(([, d]) => (
              <span key={d.label} className="flex items-center gap-2 font-mono text-[11px] text-muted">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: SWATCH[d.color] }}
                  aria-hidden
                />
                {d.label}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60} className={p.featured ? "sm:col-span-2" : ""}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
