export default function GradientButton({
  children,
  href,
  variant = "filled",
  className = "",
  download,
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm tracking-[0.08em] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  const styles =
    variant === "outline"
      ? "gradient-border bg-black text-white hover:scale-[1.02]"
      : "bg-gradient-to-r from-[#3158D4] via-[#725B9B] to-[#F47A22] text-white hover:scale-[1.02]";

  return (
    <a href={href} download={download} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
