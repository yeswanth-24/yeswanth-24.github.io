/** Geometric diamond emblem — personal mark, used in the nav, footer and as a
 *  faint background watermark. Pure SVG so it scales and themes for free. */
export default function Emblem({ className = "", size = 28, glow = false }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label="Yeshvanth emblem"
      className={className}
      style={glow ? { filter: "drop-shadow(0 0 12px color-mix(in srgb, var(--color-brand) 60%, transparent))" } : undefined}
    >
      <defs>
        <linearGradient id="em-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-brand)" />
          <stop offset="60%" stopColor="var(--color-violet)" />
          <stop offset="100%" stopColor="var(--color-mint)" />
        </linearGradient>
      </defs>
      {/* outer diamond */}
      <path d="M50 4 96 50 50 96 4 50Z" fill="none" stroke="url(#em-a)" strokeWidth="2.5" />
      {/* inner facets */}
      <path d="M50 18 78 50 50 82 22 50Z" fill="url(#em-a)" opacity=".14" />
      <path d="M50 18 78 50 50 82 22 50Z" fill="none" stroke="url(#em-a)" strokeWidth="1.2" opacity=".8" />
      <path d="M22 50 50 50 50 18M78 50 50 50 50 82" fill="none" stroke="url(#em-a)" strokeWidth="1" opacity=".55" />
      {/* core */}
      <circle cx="50" cy="50" r="3.4" fill="url(#em-a)" />
    </svg>
  );
}
