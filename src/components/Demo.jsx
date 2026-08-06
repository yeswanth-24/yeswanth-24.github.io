import { useEffect, useRef, useState } from "react";
import body from "../demos/body.json";
import hand from "../demos/hand.json";
import pose from "../demos/pose.json";

/** Looping demo animations. Every coordinate here was exported from the
 *  project's own code (synthetic pose/hand frames and the reconstruction
 *  model's ellipse cross-sections) — not drawn by hand.
 *  Frames advance only while the card is on screen. */
function useFrames(count, ms, active) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!active || count < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % count), ms);
    return () => clearInterval(t);
  }, [count, ms, active]);
  return i;
}

function useOnScreen() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return setOn(true);
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, on];
}

const X = (v) => v * 200;
const Y = (v) => v * 120;

function PoseDemo({ accent, on }) {
  // ping-pong through the squat so the loop reads as one clean rep
  const seq = [...pose.frames, ...pose.frames.slice(1, -1).reverse()];
  const i = useFrames(seq.length, 90, on);
  const f = seq[i];
  const deep = f.knee < 100;

  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      {pose.bones.map(([a, b]) => {
        const pa = f.pts[a];
        const pb = f.pts[b];
        if (!pa || !pb) return null;
        return (
          <line
            key={`${a}-${b}`}
            x1={X(pa[0])} y1={Y(pa[1])} x2={X(pb[0])} y2={Y(pb[1])}
            stroke={accent} strokeWidth="1.6" strokeLinecap="round" opacity=".85"
          />
        );
      })}
      {pose.joints.map((j) =>
        f.pts[j] ? (
          <circle key={j} cx={X(f.pts[j][0])} cy={Y(f.pts[j][1])} r="1.9" fill={accent} />
        ) : null
      )}
      <text x="6" y="12" fill={accent} fontSize="8" fontFamily="monospace">
        knee {f.knee.toFixed(0)}°
      </text>
      <text x="6" y="112" fill={deep ? "var(--color-mint)" : "var(--color-muted)"} fontSize="7.5" fontFamily="monospace">
        {deep ? "✓ depth reached" : "tracking…"}
      </text>
    </svg>
  );
}

function HandDemo({ accent, on }) {
  const i = useFrames(hand.frames.length, 1100, on);
  const f = hand.frames[i];
  const HX = (v) => v * 200;
  const HY = (v) => (v - 0.15) * 150;

  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      {hand.chains.map((chain, ci) => (
        <polyline
          key={ci}
          points={chain.map((p) => `${HX(f.pts[p][0])},${HY(f.pts[p][1])}`).join(" ")}
          fill="none" stroke={accent} strokeWidth="1.6" strokeLinecap="round"
          strokeLinejoin="round" opacity=".85"
        />
      ))}
      {Object.values(f.pts).map((p, k) => (
        <circle key={k} cx={HX(p[0])} cy={HY(p[1])} r="1.7" fill={accent} />
      ))}
      <text x="6" y="12" fill={accent} fontSize="8" fontFamily="monospace">
        {f.label.replace("_", " ")}
      </text>
    </svg>
  );
}

function BodyDemo({ accent, on }) {
  const steps = 36;
  const i = useFrames(steps, 90, on);
  const theta = (i / steps) * Math.PI * 2;

  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      {body.rings.map((r, k) => {
        // rotate the ellipse cross-section: width blends a<->b with yaw
        const rx = Math.abs(r.a * Math.cos(theta)) + Math.abs(r.b * Math.sin(theta));
        const cy = 118 - r.y * 108;
        return (
          <g key={r.name}>
            <ellipse
              cx="100" cy={cy} rx={rx * 1.5} ry={r.b * 0.42}
              fill="none" stroke={accent} strokeWidth="1.2"
              opacity={0.45 + 0.14 * k}
            />
            <text x="6" y={cy + 3} fill="var(--color-muted)" fontSize="6.5" fontFamily="monospace">
              {r.name} {r.circ}cm
            </text>
          </g>
        );
      })}
      <line x1="100" y1="14" x2="100" y2="112" stroke={accent} strokeWidth=".7" opacity=".35" />
      <text x="128" y="12" fill={accent} fontSize="7.5" fontFamily="monospace">
        {body.verts} verts
      </text>
    </svg>
  );
}

function PipelineDemo({ accent, on, nodes }) {
  const i = useFrames(nodes.length, 850, on);
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      {nodes.map((n, k) => {
        const cy = 26 + k * ((92 - 26) / Math.max(nodes.length - 1, 1));
        const live = k === i;
        return (
          <g key={n}>
            {k > 0 && (
              <line
                x1="42" y1={cy - (92 - 26) / Math.max(nodes.length - 1, 1)} x2="42" y2={cy}
                stroke={accent} strokeWidth="1" opacity={k <= i ? ".8" : ".2"}
              />
            )}
            <circle
              cx="42" cy={cy} r={live ? 5 : 3.4}
              fill={live ? accent : "none"} stroke={accent}
              strokeWidth="1.3" opacity={k <= i ? 1 : 0.35}
            />
            <text
              x="56" y={cy + 3} fontSize="8" fontFamily="monospace"
              fill={live ? accent : "var(--color-muted)"}
            >
              {n}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

const PIPELINES = {
  agents: ["plan", "decompose", "execute", "monitor", "recover"],
  stream: ["ingest", "consumer group", "transform", "z-score", "alert"],
  forecast: ["events", "ETL", "ARIMA fit", "forecast", "API"],
  nlp: ["utterance", "intent", "entities", "validate", "persist"],
  payoff: ["legs", "payoff engine", "chart", "compare", "sync"],
};

export default function Demo({ kind, accent = "var(--color-brand)" }) {
  const [ref, on] = useOnScreen();

  return (
    <div
      ref={ref}
      className="hud relative mb-4 h-[120px] overflow-hidden rounded-lg border border-line bg-black/20"
      style={{ "--accent": accent }}
      aria-hidden
    >
      {kind === "pose" && <PoseDemo accent={accent} on={on} />}
      {kind === "hand" && <HandDemo accent={accent} on={on} />}
      {kind === "body" && <BodyDemo accent={accent} on={on} />}
      {PIPELINES[kind] && <PipelineDemo accent={accent} on={on} nodes={PIPELINES[kind]} />}
    </div>
  );
}
