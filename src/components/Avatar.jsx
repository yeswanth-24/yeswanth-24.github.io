export default function Avatar() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] select-none">
      {/* orbit rings */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 animate-[spin_28s_linear_infinite] rounded-full border border-brand/25"
      />
      <div
        aria-hidden
        className="absolute inset-4 -z-10 animate-[spin_20s_linear_infinite_reverse] rounded-full border border-dashed border-violet/25"
      />
      {/* backlight */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-20 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[80px]"
      />

      {/* portrait plate */}
      <div className="hud scan relative overflow-hidden rounded-full border border-brand/30 bg-gradient-to-b from-white/[0.06] to-transparent">
        <img
          src={`${import.meta.env.BASE_URL}avatar.png`}
          alt="Yeshvanth — stylized avatar"
          width="800"
          height="800"
          decoding="async"
          fetchPriority="high"
          className="relative z-10 w-full drop-shadow-[0_0_28px_rgba(34,211,238,0.35)]"
        />
        {/* base glow under the figure */}
        <div
          aria-hidden
          className="absolute inset-x-6 bottom-0 z-20 h-16 bg-gradient-to-t from-ink to-transparent"
        />
      </div>

      {/* HUD readouts */}
      <span className="absolute -left-2 top-8 hidden rounded border border-brand/30 bg-ink/70 px-2 py-1 font-mono text-[10px] tracking-[0.16em] text-brand backdrop-blur sm:block">
        CV · NLP
      </span>
      <span className="absolute -right-3 bottom-14 hidden rounded border border-violet/30 bg-ink/70 px-2 py-1 font-mono text-[10px] tracking-[0.16em] text-violet backdrop-blur sm:block">
        SHIPS FAST
      </span>
    </div>
  );
}
