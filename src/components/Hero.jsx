import { EMAIL, projects } from "../data/projects";

const stats = [
  { value: projects.length, label: "shipped projects" },
  { value: "8", label: "exercises coached in real time" },
  { value: "3", label: "clients: web, mobile, CLI" },
];

export default function Hero() {
  return (
    <header className="mx-auto max-w-5xl px-6 pt-24 pb-16">
      <p className="animate-fade-up font-mono text-sm text-mint">// ML/AI Engineer</p>
      <h1 className="animate-fade-up mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
        I build machine-learning
        <br />
        systems <span className="text-brand">end to end.</span>
      </h1>
      <p className="animate-fade-up mt-6 max-w-2xl text-lg text-muted">
        Computer vision, NLP, and real-time ML — from the geometry and model math to tested APIs,
        web and mobile clients, and one-command deploys.
      </p>

      <div className="animate-fade-up mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-brand px-6 py-3 font-semibold text-ink transition hover:brightness-110"
        >
          See my work
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-lg border border-line px-6 py-3 font-semibold transition hover:border-brand"
        >
          Get in touch
        </a>
      </div>

      <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-panel px-5 py-4">
            <dt className="font-mono text-2xl font-semibold text-brand">{s.value}</dt>
            <dd className="mt-1 text-sm text-muted">{s.label}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
