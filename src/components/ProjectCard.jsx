import { GITHUB, domains } from "../data/projects";

const ACCENT = {
  teal: "var(--color-brand)",
  blue: "var(--color-blue)",
  violet: "var(--color-violet)",
};

export default function ProjectCard({ project }) {
  const { slug, title, kicker, blurb, tags, highlights, featured, domain, impact } = project;
  const meta = domains[domain] ?? domains.vision;
  const accent = ACCENT[meta.color];

  return (
    <article
      style={{ "--accent": accent }}
      className={`hud glass glass-hover group flex flex-col rounded-xl p-6 ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="w-fit rounded-full px-3 py-0.5 font-mono text-[11px] uppercase tracking-[0.16em]"
          style={{ color: accent, border: `1px solid ${accent}55`, background: `${accent}12` }}
        >
          {kicker}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          {meta.label}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-semibold">
        <a
          href={`${GITHUB}/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors group-hover:text-[var(--accent)]"
        >
          {title}
          <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">↗</span>
        </a>
      </h3>

      {impact && (
        <p
          className="mt-2 border-l-2 pl-3 font-mono text-xs leading-relaxed"
          style={{ borderColor: accent, color: accent }}
        >
          {impact}
        </p>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{blurb}</p>

      {highlights && (
        <ul className="mt-4 space-y-1">
          {highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-muted">
              <span style={{ color: accent }}>▸</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded border border-line bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
