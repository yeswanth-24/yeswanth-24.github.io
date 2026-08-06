const capabilities = [
  {
    title: "Computer Vision",
    body: "Pose and hand tracking, calibrated measurement, geometric reconstruction, and real-time feedback loops that run at camera framerate.",
    points: ["MediaPipe · OpenCV", "Camera-free testable cores", "Live quality gating"],
  },
  {
    title: "Applied ML",
    body: "Classifiers and forecasters trained, evaluated, and shipped behind APIs — with calibrated probabilities, not just a label.",
    points: ["scikit-learn · NumPy", "ARIMA forecasting", "Holdout evaluation"],
  },
  {
    title: "Product Delivery",
    body: "The part that makes ML useful: APIs, dashboards, mobile clients, containers, and CI so the work survives contact with users.",
    points: ["FastAPI · React · Flutter", "Docker · GitHub Actions", "pytest coverage"],
  },
];

export default function Capabilities() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold">What I do</h2>
        <p className="mt-1 mb-9 text-muted">Three things, applied together.</p>

        <div className="grid gap-5 sm:grid-cols-3">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-line bg-panel p-6 transition hover:border-brand"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
                {c.points.map((p) => (
                  <li key={p} className="font-mono text-xs text-muted">
                    <span className="text-mint">▸ </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
