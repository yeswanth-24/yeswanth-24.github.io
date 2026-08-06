export const GITHUB = "https://github.com/yeswanth-24";
export const EMAIL = "yeshvanthreddy1999@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/";

export const projects = [
  {
    slug: "ai-digital-tailor",
    domain: "vision",
    impact: "83.8% holdout accuracy on the fit classifier",
    title: "AI Digital Tailor",
    kicker: "CV · ML · 3D",
    featured: true,
    blurb:
      "Photos to body measurements to size prediction to a skin-tone-matched 3D avatar and virtual try-on. Guided real-time browser capture with live pose-quality coaching, multi-angle reconstruction, a numpy logistic-regression fit model, and a Flutter mobile client on a Docker-deployable FastAPI backend.",
    highlights: [
      "Live pose-quality gating before capture",
      "Ellipse cross-section circumference model",
      "83.8% holdout accuracy fit classifier",
    ],
    tags: ["MediaPipe", "FastAPI", "numpy ML", "3D geometry", "Flutter", "Docker"],
  },
  {
    slug: "ai-workout-coach",
    domain: "vision",
    impact: "8 exercises coached in real time, 29 tests on rep logic",
    title: "AI Workout Coach",
    kicker: "Computer Vision",
    blurb:
      "Real-time exercise coaching: pose estimation feeds hysteresis rep-counting state machines with form cues across 8 exercises, plus a workout mode that switches exercises live and a daily-progress dashboard.",
    highlights: ["8 exercises incl. timed plank", "Per-rep form feedback", "Day-grouped history"],
    tags: ["MediaPipe", "OpenCV", "SQLite", "Streamlit"],
  },
  {
    slug: "gesture-coding-assistant",
    domain: "vision",
    impact: "6 gestures + a 9-intent voice grammar, 2 target languages",
    title: "Gesture Coding Assistant",
    kicker: "CV · NLP",
    blurb:
      "Write code with hand gestures and voice: rotation-invariant gesture classification, an edge-triggered gesture stream, a voice-command grammar, and Python/JavaScript code generation injected into any focused IDE.",
    highlights: ["Majority-vote gesture smoothing", "Regex command grammar", "Dry-run safety mode"],
    tags: ["MediaPipe Hands", "Speech", "Codegen", "pynput"],
  },
  {
    slug: "multi-agent-orchestrator",
    domain: "backend",
    impact: "5 autonomous agents with failure recovery over Redis Pub/Sub",
    title: "Multi-Agent Task Orchestrator",
    kicker: "Distributed Systems",
    blurb:
      "Five specialized agents collaborate over Redis Pub/Sub to plan, decompose, execute, monitor, and recover complex tasks, with SQLite state and a live Gantt timeline of every step's lifecycle.",
    highlights: ["Autonomous recovery", "Redis Pub/Sub coordination", "Live Gantt dashboard"],
    tags: ["Redis", "FastAPI", "SQLite", "Streamlit"],
  },
  {
    slug: "realtime-stream-engine",
    domain: "backend",
    impact: "Dual-tier alerting: threshold + z-score on Redis Streams",
    title: "Real-Time Stream Engine",
    kicker: "Streaming",
    blurb:
      "Event streaming through Redis Streams with consumer groups, threshold and z-score anomaly detection, tiered alert streams, and a dashboard showing live events beside warning and critical alerts.",
    highlights: ["Consumer-group processing", "z-score anomaly detection", "Tiered alerting"],
    tags: ["Redis Streams", "Anomaly detection", "FastAPI"],
  },
  {
    slug: "predictive-analytics-platform",
    domain: "ml",
    impact: "ARIMA pipeline from raw events to persisted forecasts",
    title: "Predictive Analytics Platform",
    kicker: "Forecasting",
    blurb:
      "End-to-end time-series pipeline: ETL into a SQLite warehouse, ARIMA training with persisted model artifacts, forecasts written back to the warehouse, exposed through an API and dashboard.",
    highlights: ["ETL to warehouse", "ARIMA artifacts", "Forecast API"],
    tags: ["ARIMA", "ETL", "FastAPI", "Streamlit"],
  },
  {
    slug: "personal-finance-assistant",
    domain: "ml",
    impact: "Intent + entity extraction across 12 finance record types",
    title: "Personal Finance Assistant",
    kicker: "NLP",
    blurb:
      'Natural-language money tracking: intent classification and entity extraction route messages like "log 240 on groceries yesterday" through validation into a personal-finance database, with a React chat UI.',
    highlights: ["Intent + entity extraction", "Validated CRUD routing", "React chat UI"],
    tags: ["scikit-learn", "FastAPI", "React", "SQLAlchemy"],
  },
  {
    slug: "options-strategy-visualizer",
    domain: "backend",
    impact: "One Flutter codebase shipping to 6 platforms",
    title: "Options Strategy Visualizer",
    kicker: "Mobile · Fintech",
    blurb:
      "Build, visualize, save, and compare options strategies with a live payoff engine. Clean-architecture Flutter app across mobile, web and desktop, backed by a FastAPI service with Google OAuth.",
    highlights: ["Live payoff charts", "Offline-first with sync", "Clean architecture"],
    tags: ["Flutter", "FastAPI", "OAuth", "Hive"],
  },
];

export const skillGroups = [
  {
    label: "ML & Computer Vision",
    items: ["Python", "Computer Vision", "MediaPipe", "OpenCV", "scikit-learn", "NumPy", "Time-Series Forecasting", "3D Geometry"],
  },
  {
    label: "Backend & Data",
    items: ["FastAPI", "REST APIs", "Redis", "SQLite / SQL", "SQLAlchemy", "Streamlit", "Pandas"],
  },
  {
    label: "Frontend & Mobile",
    items: ["React", "JavaScript", "Tailwind CSS", "Flutter / Dart", "Vite"],
  },
  {
    label: "Engineering Practice",
    items: ["Docker", "GitHub Actions", "pytest", "Git", "Clean Architecture"],
  },
];


export const domains = {
  vision: { label: "Computer Vision", color: "teal" },
  ml: { label: "Machine Learning", color: "blue" },
  backend: { label: "Backend / Systems", color: "violet" },
};

export const timeline = [
  {
    slug: "personal-finance-assistant",
    title: "Personal Finance Assistant",
    note: "First end-to-end ML product: intent classification wired to a real database and a chat UI.",
    theme: "Learning to ship a model as a product",
  },
  {
    slug: "predictive-analytics-platform",
    title: "Predictive Analytics Platform",
    note: "Moved from single models to pipelines — ETL, training, persisted artifacts, forecasts.",
    theme: "Pipelines over notebooks",
  },
  {
    slug: "realtime-stream-engine",
    title: "Real-Time Stream Engine",
    note: "Redis Streams, consumer groups and anomaly detection under continuous load.",
    theme: "Systems that run without me",
  },
  {
    slug: "multi-agent-orchestrator",
    title: "Multi-Agent Orchestrator",
    note: "Five coordinating agents that plan, execute, monitor and recover autonomously.",
    theme: "Coordination and self-healing",
  },
  {
    slug: "ai-workout-coach",
    title: "AI Workout Coach",
    note: "Computer vision in real time — pose geometry turned into coaching a person can act on.",
    theme: "Real-time constraints",
  },
  {
    slug: "gesture-coding-assistant",
    title: "Gesture Coding Assistant",
    note: "Vision plus language: gestures and speech compiled into working source code.",
    theme: "Multimodal interfaces",
  },
  {
    slug: "ai-digital-tailor",
    title: "AI Digital Tailor",
    note: "Everything at once — CV, geometry, a trained classifier, 3D reconstruction, web + mobile clients, Docker.",
    theme: "Full-stack ML product",
  },
];

export const philosophy = {
  statement: "I design systems that stay verifiable under real-time constraints.",
  body:
    "Real time is where sloppy systems fail. A model that is only correct in a notebook is not correct. So I keep the hard part — the geometry, the state machine, the classifier — pure and provable, and let the messy world plug in at the edges. If I cannot write a test that proves it, I do not consider it built.",
  pillars: [
    { k: "Verifiable", v: "Pure cores tested against inputs with known answers" },
    { k: "Real-time", v: "Designed for camera framerate, not batch convenience" },
    { k: "Honest", v: "Documented limits and a stated upgrade path" },
    { k: "Finished", v: "Tests, CI, container, README — every repo, every time" },
  ],
};
