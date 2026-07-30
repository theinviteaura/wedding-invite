function Container({
  children,
  className = "",
  as: Component = "div",
}) {
  return (
    <Component
      className={`
        w-full
        max-w-[1280px]
        mx-auto
        px-6
        sm:px-8
        lg:px-10
        xl:px-12
        ${className}
      `}
    >
      {children}
    </Component>
  );
}

export default Container;