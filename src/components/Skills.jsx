import { skillGroups } from "../data/projects";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold">Skills</h2>
        <p className="mt-1 mb-9 text-muted">Used across the projects above — not aspirational.</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-xl border border-line bg-panel p-6">
              <h3 className="font-mono text-sm text-mint">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-line bg-ink px-3 py-1.5 font-mono text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
