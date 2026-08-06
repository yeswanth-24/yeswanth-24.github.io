import { skillGroups } from "../data/projects";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-bold">Skills</h2>
        <p className="mt-1 mb-9 text-muted">Used across the projects above — not aspirational.</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="hud glass rounded-xl p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-xs transition hover:border-brand/50 hover:text-brand"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      </div>
    </section>
  );
}
