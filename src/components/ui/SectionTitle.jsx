function SectionTitle({
  badge,
  title,
  subtitle,
  center = true,
  light = false,
}) {
  return (
    <div
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : "text-left"
      }`}
    >
      {badge && (
        <span
          className={`
            inline-flex items-center
            px-5 py-2
            rounded-full
            text-sm
            font-semibold
            tracking-[0.25em]
            uppercase
            ${
              light
                ? "bg-white/10 text-[#E7D3A7] border border-white/20"
                : "bg-[#C8A96A]/10 text-[#C8A96A]"
            }
          `}
        >
          {badge}
        </span>
      )}

      <h2
        className={`
          mt-6
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          ${
            light
              ? "text-white"
              : "text-[#171717]"
          }
        `}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`
            mt-6
            text-lg
            leading-8
            ${
              light
                ? "text-white/80"
                : "text-gray-600"
            }
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;