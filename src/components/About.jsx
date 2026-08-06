import Reveal from "./Reveal";
const facts = [
  { k: "Focus", v: "Computer vision, applied ML, robotics & autonomy" },
  { k: "Stack", v: "Python · ROS2 · FastAPI · MediaPipe · React · Flutter" },
  { k: "Range", v: "EKF & control → model math → web + mobile → deploy" },
  { k: "Education", v: "M.S. Computer Information Systems · B.Tech CS" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">// About</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            I go after the problems that don't have a library
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted">
            <p>
              Most of my work starts where the tutorial stops. Pose estimation gives you 33 points
              in space — turning that into "go deeper, chest up" at the right instant is the actual
              problem. A photo gives you width but never depth; turning that into a waist
              measurement someone trusts takes geometry, anthropometry and a lot of care about what
              you're allowed to assume.
            </p>
            <p>
              I'm meticulous about the parts nobody sees. The math lives in a pure, dependency-free
              core that's unit-tested against synthetic inputs with known answers, so correctness is
              provable without a camera. Cameras, models and databases plug in at the edges. When a
              system has a limitation, the README says so — I'd rather be trusted than impressive.
            </p>
            <p>
              As CTO at Entriya I architected a 12-layer autonomous drone stack — ROS2 sensor
              fusion, EKF state estimation, MPC control — where a wrong assumption doesn't produce a
              bad metric, it produces a crash. That standard carries into everything else I build.
            </p>
            <p>
              And I finish things. Every project here has tests, CI, a README that a stranger can
              follow, and where it matters a web client, a mobile client and a container. Eight of
              them, all open source. Read the code, run the tests, break it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
        <dl className="hud scan space-y-px self-start overflow-hidden rounded-xl border border-line bg-line">
          {facts.map((f) => (
            <div key={f.k} className="glass px-5 py-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
                {f.k}
              </dt>
              <dd className="mt-1 text-sm">{f.v}</dd>
            </div>
          ))}
        </dl>
        </Reveal>
      </div>
    </section>
  );
}
