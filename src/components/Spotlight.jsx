import { GITHUB, projects } from "../data/projects";

const pipeline = [
  { step: "Capture", detail: "Guided front / side / back photos with live pose coaching" },
  { step: "Measure", detail: "Height-calibrated landmarks → elliptical circumference model" },
  { step: "Predict", detail: "Logistic-regression fit model with calibrated size probabilities" },
  { step: "Visualize", detail: "Skin-tone-matched 3D avatar + garment try-on preview" },
];

export default function Spotlight() {
  const project = projects.find((p) => p.featured) ?? projects[0];

  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-wide text-mint">Featured work</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{project.title}</h2>
        <p className="mt-3 max-w-3xl text-muted">{project.blurb}</p>

        <ol className="mt-9 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {pipeline.map((p, i) => (
            <li key={p.step} className="bg-panel p-5">
              <span className="font-mono text-xs text-brand">0{i + 1}</span>
              <h3 className="mt-2 font-semibold">{p.step}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{p.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={`${GITHUB}/${project.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-5 py-2.5 text-sm font-semibold transition hover:border-brand"
          >
            View the code ↗
          </a>
          <span className="font-mono text-xs text-muted">
            Web app · Flutter mobile client · Docker
          </span>
        </div>
      </div>
    </section>
  );
}
