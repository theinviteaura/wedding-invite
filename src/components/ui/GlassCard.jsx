function GlassCard({
  children,
  className = "",
  blur = true,
  hover = true,
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/30
        bg-white/60
        ${
          blur
            ? "backdrop-blur-2xl"
            : ""
        }
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        ${
          hover
            ? "transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
            : ""
        }
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GlassCard;