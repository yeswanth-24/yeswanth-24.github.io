import { EMAIL, GITHUB, LINKEDIN } from "../data/projects";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-panel2 to-panel p-10 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/20 blur-[100px]"
          />
          <h2 className="text-2xl font-bold sm:text-3xl">Let's build something</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Open to ML/AI engineering roles and collaborations. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-lg bg-brand px-6 py-3 font-semibold text-ink transition hover:brightness-110"
            >
              {EMAIL}
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line px-6 py-3 font-semibold transition hover:border-brand"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line px-6 py-3 font-semibold transition hover:border-brand"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
