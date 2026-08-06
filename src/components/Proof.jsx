const metrics = [
  { value: "8", label: "systems shipped", sub: "all open source, all documented" },
  { value: "93", label: "automated tests", sub: "on the three newest projects alone" },
  { value: "3", label: "client surfaces", sub: "web, mobile and CLI from one backend" },
  { value: "100%", label: "with CI + README", sub: "no repo left half-finished" },
];

export default function Proof() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">// Receipts</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Evidence over adjectives</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Anyone can claim they're thorough. These are checkable — every number below comes from a
          public repository.
        </p>

        <dl className="hud scan mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="glass px-5 py-6">
              <dt className="gradient-text font-mono text-3xl font-bold">{m.value}</dt>
              <dd className="mt-2 text-sm font-semibold">{m.label}</dd>
              <dd className="mt-1 text-xs leading-relaxed text-muted">{m.sub}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
