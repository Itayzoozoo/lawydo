export function GradientBlobs({
  variant = "hero",
}: {
  variant?: "hero" | "subtle";
}) {
  if (variant === "subtle") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl animate-blob animation-delay-2000" />
      </div>
    );
  }
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-10 -left-20 h-[28rem] w-[28rem] rounded-full bg-blue-500/30 blur-3xl animate-blob" />
      <div className="absolute top-40 right-0 h-[26rem] w-[26rem] rounded-full bg-purple-500/30 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/3 h-[24rem] w-[24rem] rounded-full bg-indigo-500/25 blur-3xl animate-blob animation-delay-4000" />
    </div>
  );
}
