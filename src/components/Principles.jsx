import Reveal from "./Reveal";
const principles = [
  {
    n: "01",
    title: "The core must be provable",
    body:
      "Camera code is untestable, so I don't put logic in it. Geometry, state machines and classifiers stay pure — cameras, models and databases get injected at the edges.",
    proof: "Rep counting and body measurement are verified against synthetic poses with exact known joint angles. No webcam required to prove correctness.",
  },
  {
    n: "02",
    title: "Nothing ships without tests and CI",
    body:
      "A repo that only runs on my machine isn't finished. Every project gets a test suite, a GitHub Actions pipeline, and a container where it makes sense.",
    proof: "93 automated tests across the three most recent systems; CI on every push; Docker Compose for one-command demos.",
  },
  {
    n: "03",
    title: "Document the limits, not just the wins",
    body:
      "Overstating a system is how trust dies. My READMEs name the simplifications and the upgrade path as plainly as the features.",
    proof: "The 3D reconstruction is documented as a parametric avatar — not SMPL-style learned reconstruction — with the segmentation-based upgrade path spelled out.",
  },
  {
    n: "04",
    title: "Design for the person, not the demo",
    body:
      "The model output is the halfway point. The work is finished when a person can act on it without reading the source.",
    proof: "Instead of failing after a bad photo, the capture UI coaches you in real time — 'step back', 'level your shoulders' — before the shutter fires.",
  },
];

export default function Principles() {
  return (
    <section id="principles" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">// How I work</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
          Standards I don't negotiate on
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Four rules that decide what I build and when I consider it done.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {principles.map((p) => (
            <article key={p.n} className="hud glass glass-hover rounded-xl p-6">
              <span className="font-mono text-xs tracking-[0.2em] text-brand">{p.n}</span>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              <p className="mt-4 border-t border-line pt-4 font-mono text-xs leading-relaxed text-mint">
                {p.proof}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
      </div>
    </section>
  );
}
