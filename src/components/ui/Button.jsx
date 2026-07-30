import React from "react";

const variants = {
  primary:
    "bg-[#C8A96A] text-white hover:bg-[#AF8F54] shadow-xl hover:-translate-y-1",

  secondary:
    "border-2 border-[#C8A96A] text-[#C8A96A] hover:bg-[#C8A96A] hover:text-white",

  dark:
    "bg-[#171717] text-white hover:bg-black",

  white:
    "bg-white text-[#171717] hover:bg-gray-100",
};

function Button({
  children,
  variant = "primary",
  href,
  target = "_self",
  icon,
  full = false,
  className = "",
  onClick,
  type = "button",
}) {
  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    px-8
    py-4
    rounded-full
    font-semibold
    transition-all
    duration-300
    ${variants[variant]}
    ${full ? "w-full" : ""}
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : ""}
        className={classes}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
      {icon}
    </button>
  );
}

export default Button;