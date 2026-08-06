import Reveal from "./Reveal";
const stages = [
  {
    label: "The problem",
    body:
      "Estimate someone's chest, waist and hip circumference from ordinary phone photos — accurately enough to recommend a clothing size they'd actually trust.",
  },
  {
    label: "Why it's hard",
    body:
      "A photo gives you width, never depth. Pose landmarks sit on the skeleton, not on soft tissue. There's no reference object for scale, and lighting shifts every colour you sample.",
  },
  {
    label: "The approach",
    body:
      "Calibrate pixels to centimetres from stated height using standard anthropometry. Model each torso cross-section as an ellipse — front photo gives the width, side photo the depth — and take the perimeter with Ramanujan's approximation. Average a burst of frames to kill landmark jitter, and gray-world correct the photo before sampling skin tone.",
  },
  {
    label: "The outcome",
    body:
      "A four-stage pipeline (capture → measure → predict → visualize) behind a real-time web app and a Flutter client, with a fit classifier at 83.8% holdout accuracy that reports calibrated probabilities and flags between-sizes cases instead of guessing.",
  },
];

export default function CaseStudy() {
  return (
    <section id="hard-problem" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
          // Hardest problem I've solved
        </p>
        <h2 className="mt-2 text-2xl font-bold gradient-text sm:text-3xl">
          Measuring a human body from two photos
        </h2>

        <ol className="mt-10 space-y-px overflow-hidden rounded-xl border border-line bg-line">
          {stages.map((s, i) => (
            <li key={s.label} className="glass grid gap-3 p-6 sm:grid-cols-[160px_1fr]">
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs text-brand">0{i + 1}</span>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">
                  {s.label}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-6 font-mono text-xs text-muted">
          Full write-up, math and tests in the repository — including what the model{" "}
          <span className="text-mint">can't</span> do.
        </p>
      </Reveal>
      </div>
    </section>
  );
}
