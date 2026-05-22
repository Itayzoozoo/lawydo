import Link from "next/link";

export function Logo({
  size = "md",
  variant = "light",
  withSubtitle = true,
}: {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  withSubtitle?: boolean;
}) {
  const letterSize =
    size === "lg"
      ? "text-3xl lg:text-4xl"
      : size === "sm"
        ? "text-lg"
        : "text-xl lg:text-[1.6rem]";
  const subtitleSize = size === "sm" ? "text-[10px]" : "text-[11px]";

  // Each letter gets a slightly different gradient slot so BPG reads as a logomark.
  const gradient =
    "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent";

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label="BPG Law Offices — home"
    >
      <span
        className={`inline-flex items-center gap-0.5 font-black tracking-tight ${letterSize}`}
        aria-hidden="true"
      >
        <span className={gradient}>B</span>
        <span className={`${gradient} opacity-90`}>P</span>
        <span className={gradient}>G</span>
      </span>
      {withSubtitle && (
        <span className="hidden sm:flex flex-col leading-tight">
          <span
            className={`font-extrabold tracking-tight ${
              variant === "dark" ? "text-white" : "text-slate-900"
            } ${size === "sm" ? "text-xs" : "text-sm"}`}
          >
            Bachar, Pordes, Goleczki
          </span>
          <span
            className={`${subtitleSize} font-bold tracking-[0.2em] uppercase ${
              variant === "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Law Offices
          </span>
        </span>
      )}
    </Link>
  );
}
