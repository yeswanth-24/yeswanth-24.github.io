export const GITHUB = "https://github.com/yeswanth-24";
export const EMAIL = "yeshvanthreddy1999@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/yeshvanth-reddy-guntaka";
export const RESUME = "Yeshvanth-Reddy-Guntaka-Resume.pdf";

export const shortBio = [
  "I'm an ML/AI and robotics engineer who likes problems where the math has to be exactly right and the product still has to feel effortless — I've architected a 12-layer autonomous drone stack as a CTO, and built eight open-source ML systems on my own time.",
  "I'm meticulous about the parts nobody sees: pure, testable cores, documented limits instead of overclaims.",
  "And I finish things — every project ships with tests, CI and a README a stranger can follow.",
];

export const experience = [
  {
    role: "Data Analyst",
    org: "VJ Creative Solutions LLC",
    period: "Jan 2026 — Present",
    place: "Casper, WY",
    domain: "ml",
    points: [
      "Translate business questions into data-driven analyses, delivering insights through SQL, dashboards and visualizations.",
      "Design and maintain ETL/ELT pipelines with data-quality checks that improve integration accuracy and cut downstream errors.",
      "Automate infrastructure deployment with Ansible/SaltStack and containerized services, reducing manual configuration time.",
    ],
  },
  {
    role: "Chief Technology Officer",
    org: "Entriya LLC",
    period: "Jul 2025 — Dec 2025",
    place: "Boston, MA",
    domain: "robotics",
    points: [
      "Architected a 12-layer autonomous drone software stack with standards for modularity, observability and scalability.",
      "Built high-performance ROS2 modules for sensor fusion, world modeling and obstacle avoidance.",
      "Integrated MPC, EKF and consensus algorithms into an intent-to-command autonomy pipeline.",
      "Directed technical strategy and cross-functional execution, improving overall system reliability.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Entriya LLC",
    period: "Feb 2025 — Jul 2025",
    place: "Boston, MA",
    domain: "robotics",
    points: [
      "Engineered EKF-based state estimation and obstacle-avoidance logic, improving robustness under sensor noise and latency.",
      "Implemented sensor-fusion and real-time messaging components for lower-latency perception and navigation.",
      "Addressed embedded constraints through micro-kernel command arbitration and performance-focused design.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "Inmovidu Tech",
    period: "May 2020 — Jul 2020",
    place: "Hyderabad, India",
    domain: "ml",
    points: [
      "Built and evaluated ML models with scikit-learn and TensorFlow, including feature engineering and hyperparameter tuning.",
      "Performed end-to-end data preparation and exploratory analysis in Python, Pandas and NumPy.",
      "Developed a real-time speech-to-text / text-to-speech assistant using NLP libraries in a production pipeline.",
    ],
  },
];

export const education = [
  {
    degree: "M.S. — Computer Information Systems",
    school: "New England College",
    place: "Henniker, NH",
    period: "Dec 2024",
    gpa: "3.67",
  },
  {
    degree: "B.Tech — Computer Science",
    school: "Anil Neerukonda Institute of Technology and Sciences",
    place: "Visakhapatnam, India",
    period: "Apr 2021",
    gpa: "3.85",
  },
];

export const projects = [
  {
    slug: "ai-digital-tailor",
    demo: "body",
    metrics: [{ v: "83.8%", k: "fit-model holdout accuracy" }, { v: "0.03 ms", k: "size inference per body" }, { v: "0.4 ms", k: "3D mesh build (462 verts)" }],
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
    demo: "pose",
    metrics: [{ v: "0.011 ms", k: "per-frame rep analysis" }, { v: "89k fps", k: "analysis-layer throughput" }, { v: "8", k: "exercises, 29 rep-logic tests" }],
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
    demo: "hand",
    metrics: [{ v: "0.011 ms", k: "per-frame gesture pipeline" }, { v: "0.004 ms", k: "voice command → source code" }, { v: "6 / 9", k: "gestures / voice intents" }],
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
    demo: "agents",
    metrics: [{ v: "5", k: "coordinating agents" }, { v: "Pub/Sub", k: "Redis message bus" }, { v: "auto", k: "failure detection & recovery" }],
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
    demo: "stream",
    metrics: [{ v: "2-tier", k: "warning + critical alert streams" }, { v: "z-score", k: "statistical anomaly detection" }, { v: "groups", k: "Redis consumer-group scaling" }],
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
    demo: "forecast",
    metrics: [{ v: "ARIMA", k: "trained + persisted artifacts" }, { v: "5-stage", k: "generate → ETL → fit → forecast → serve" }, { v: "SQLite", k: "warehouse + forecast tables" }],
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
    demo: "nlp",
    metrics: [{ v: "12", k: "finance record types routed" }, { v: "intent+NER", k: "two-stage understanding" }, { v: "React", k: "chat UI on FastAPI" }],
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
    demo: "payoff",
    metrics: [{ v: "6", k: "platforms from one codebase" }, { v: "live", k: "payoff engine + charts" }, { v: "OAuth", k: "Google sign-in, Hive offline sync" }],
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
    items: ["Python", "Computer Vision", "MediaPipe", "OpenCV", "scikit-learn", "TensorFlow", "NumPy", "Pandas", "Time-Series Forecasting", "3D Geometry"],
  },
  {
    label: "Backend & Data",
    items: ["FastAPI", "Django", "Flask", "Node.js", "REST APIs", "Redis", "SQL / SQLite / MySQL", "SQLAlchemy", "Firebase"],
  },
  {
    label: "Frontend & Mobile",
    items: ["React", "JavaScript", "Tailwind CSS", "Flutter / Dart", "Vite"],
  },
  {
    label: "Robotics & Autonomy",
    items: ["ROS2", "Sensor fusion", "EKF", "MPC", "Obstacle avoidance", "Swarm intelligence", "Agent-based modeling"],
  },
  {
    label: "Engineering Practice",
    items: ["Docker", "GitHub Actions", "pytest", "Git", "Clean Architecture", "Ansible / SaltStack"],
  },
];


export const domains = {
  vision: { label: "Computer Vision", color: "teal" },
  ml: { label: "Machine Learning", color: "blue" },
  backend: { label: "Backend / Systems", color: "violet" },
  robotics: { label: "Robotics / Autonomy", color: "amber" },
};

export const timeline = [
  {
    slug: "personal-finance-assistant",
    demo: "nlp",
    metrics: [{ v: "12", k: "finance record types routed" }, { v: "intent+NER", k: "two-stage understanding" }, { v: "React", k: "chat UI on FastAPI" }],
    title: "Personal Finance Assistant",
    note: "First end-to-end ML product: intent classification wired to a real database and a chat UI.",
    theme: "Learning to ship a model as a product",
  },
  {
    slug: "predictive-analytics-platform",
    demo: "forecast",
    metrics: [{ v: "ARIMA", k: "trained + persisted artifacts" }, { v: "5-stage", k: "generate → ETL → fit → forecast → serve" }, { v: "SQLite", k: "warehouse + forecast tables" }],
    title: "Predictive Analytics Platform",
    note: "Moved from single models to pipelines — ETL, training, persisted artifacts, forecasts.",
    theme: "Pipelines over notebooks",
  },
  {
    slug: "realtime-stream-engine",
    demo: "stream",
    metrics: [{ v: "2-tier", k: "warning + critical alert streams" }, { v: "z-score", k: "statistical anomaly detection" }, { v: "groups", k: "Redis consumer-group scaling" }],
    title: "Real-Time Stream Engine",
    note: "Redis Streams, consumer groups and anomaly detection under continuous load.",
    theme: "Systems that run without me",
  },
  {
    slug: "multi-agent-orchestrator",
    demo: "agents",
    metrics: [{ v: "5", k: "coordinating agents" }, { v: "Pub/Sub", k: "Redis message bus" }, { v: "auto", k: "failure detection & recovery" }],
    title: "Multi-Agent Orchestrator",
    note: "Five coordinating agents that plan, execute, monitor and recover autonomously.",
    theme: "Coordination and self-healing",
  },
  {
    slug: "ai-workout-coach",
    demo: "pose",
    metrics: [{ v: "0.011 ms", k: "per-frame rep analysis" }, { v: "89k fps", k: "analysis-layer throughput" }, { v: "8", k: "exercises, 29 rep-logic tests" }],
    title: "AI Workout Coach",
    note: "Computer vision in real time — pose geometry turned into coaching a person can act on.",
    theme: "Real-time constraints",
  },
  {
    slug: "gesture-coding-assistant",
    demo: "hand",
    metrics: [{ v: "0.011 ms", k: "per-frame gesture pipeline" }, { v: "0.004 ms", k: "voice command → source code" }, { v: "6 / 9", k: "gestures / voice intents" }],
    title: "Gesture Coding Assistant",
    note: "Vision plus language: gestures and speech compiled into working source code.",
    theme: "Multimodal interfaces",
  },
  {
    slug: "ai-digital-tailor",
    demo: "body",
    metrics: [{ v: "83.8%", k: "fit-model holdout accuracy" }, { v: "0.03 ms", k: "size inference per body" }, { v: "0.4 ms", k: "3D mesh build (462 verts)" }],
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
