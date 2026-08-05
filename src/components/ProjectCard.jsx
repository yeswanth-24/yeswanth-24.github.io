import { GITHUB } from "../data/projects";

export default function ProjectCard({ project }) {
  const { slug, title, kicker, blurb, tags, highlights, featured } = project;
  const url = `${GITHUB}/${slug}`;

  return (
    <article
      className={`group flex flex-col rounded-xl border border-line bg-panel p-6 transition duration-200 hover:-translate-y-1 hover:border-brand ${
        featured ? "sm:col-span-2 bg-gradient-to-br from-panel2 to-panel" : ""
      }`}
    >
      <span className="w-fit rounded-full border border-line px-3 py-0.5 font-mono text-[11px] uppercase tracking-wide text-mint">
        {kicker}
      </span>

      <h3 className="mt-3 text-lg font-semibold">
        <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
          {title}
          <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">↗</span>
        </a>
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{blurb}</p>

      {highlights && (
        <ul className="mt-4 space-y-1">
          {highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-muted">
              <span className="text-mint">▸</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded bg-[#16202f] px-2 py-1 font-mono text-[11px] text-brand">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
