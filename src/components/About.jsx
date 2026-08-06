const facts = [
  { k: "Focus", v: "Computer vision, applied ML, real-time systems" },
  { k: "Stack", v: "Python · FastAPI · MediaPipe · React · Flutter" },
  { k: "Approach", v: "Testable cores, honest docs, shipped software" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-2xl font-bold">About</h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              I like problems where the math has to be right and the product still has to feel
              effortless. A pose estimate is only useful once it becomes "go deeper, chest up" at the
              right moment. A body measurement is only useful once it becomes a size someone trusts.
            </p>
            <p>
              That's what most of my work looks like: a rigorous core — geometry, state machines,
              classifiers — wrapped in an interface a person can actually use. I keep the core
              dependency-free and unit-tested, and inject cameras, models, and databases at the
              edges, so the hard parts stay verifiable.
            </p>
            <p>
              Everything below is open source. Read the code, run the tests, break it.
            </p>
          </div>
        </div>

        <dl className="space-y-px overflow-hidden rounded-xl border border-line bg-line">
          {facts.map((f) => (
            <div key={f.k} className="bg-panel px-5 py-4">
              <dt className="font-mono text-xs uppercase tracking-wide text-mint">{f.k}</dt>
              <dd className="mt-1 text-sm">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
