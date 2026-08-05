import { EMAIL, GITHUB, LINKEDIN } from "../data/projects";

const cta =
  "rounded-lg px-6 py-3 font-semibold transition hover:brightness-110";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-1 mb-8 text-muted">
          Open to ML/AI engineering roles and interesting problems.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${EMAIL}`} className={`${cta} bg-brand text-ink`}>
            {EMAIL}
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cta} border border-line`}
          >
            GitHub
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cta} border border-line`}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
