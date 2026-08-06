import { EMAIL, GITHUB, LINKEDIN } from "../data/projects";
import Emblem from "./Emblem";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <div className="hud scan glass relative overflow-hidden rounded-2xl p-10 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/25 blur-[110px]"
            />
            <Emblem size={44} className="mx-auto" glow />

            <h2 className="mt-5 text-2xl font-bold sm:text-4xl">
              <span className="gradient-text">Let's build something autonomous together.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
              I'm looking for ML/AI engineering work where the problem is genuinely hard and the
              result has to hold up in real time. If that's what you're building, let's talk.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="glow-ring rounded-lg bg-brand px-6 py-3 font-semibold text-ink transition hover:brightness-110"
              >
                {EMAIL}
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-line px-6 py-3 font-semibold transition hover:border-brand hover:text-brand"
              >
                GitHub
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-line px-6 py-3 font-semibold transition hover:border-brand hover:text-brand"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
