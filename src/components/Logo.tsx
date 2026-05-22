import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  withWordmark?: boolean;
  asLink?: boolean;
  className?: string;
};

/**
 * BPG logomark — three rounded tiles (blue / sky / mint) bearing the letters
 * B, P, G in a serif face, paired with a tracked "LAW OFFICES" wordmark.
 *
 * Rendered inline as SVG so it scales perfectly, ships at zero raster cost,
 * and inherits parent text color via currentColor — letting the wordmark blend
 * naturally on either the light navbar or the dark footer.
 */
export function Logo({
  size = "md",
  variant = "light",
  withWordmark = true,
  asLink = true,
  className = "",
}: LogoProps) {
  const tileHeight =
    size === "lg" ? "h-12 lg:h-14" : size === "sm" ? "h-7" : "h-9 lg:h-10";

  const wordmarkColor =
    variant === "dark" ? "text-white/85" : "text-slate-700";

  const content = (
    <span
      className={`group inline-flex items-center gap-3 ${wordmarkColor} ${className}`}
    >
      <BpgMark className={`${tileHeight} w-auto transition-transform duration-300 group-hover:-translate-y-0.5`} />
      {withWordmark && (
        <span
          className={`hidden sm:inline-flex items-center font-bold tracking-[0.28em] uppercase ${
            size === "sm" ? "text-[10px]" : "text-xs lg:text-[13px]"
          }`}
        >
          Law Offices
        </span>
      )}
    </span>
  );

  if (!asLink) return content;
  return (
    <Link
      href="/"
      aria-label="BPG Law Offices — home"
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 rounded-lg"
    >
      {content}
    </Link>
  );
}

/**
 * The three-tile B/P/G logomark on its own — useful as a decorative element
 * (about page, OG image, favicon source).
 */
export function BpgMark({
  className = "",
  ariaLabel = "BPG",
}: {
  className?: string;
  ariaLabel?: string;
}) {
  // viewBox 144x48: three 40x40 tiles separated by 12px gutters.
  // Tile colors keep the spirit of the source logo (blue → sky → mint)
  // while leaning slightly toward the site's blue/indigo/purple system.
  return (
    <svg
      viewBox="0 0 144 48"
      role="img"
      aria-label={ariaLabel}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bpg-tile-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2f54c4" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="bpg-tile-p" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5fb4f2" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="bpg-tile-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5ee4b6" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>

      {/* B tile */}
      <rect x="0" y="4" width="40" height="40" rx="6" fill="url(#bpg-tile-b)" />
      <text
        x="20"
        y="34"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="26"
        fill="#ffffff"
      >
        B
      </text>

      {/* P tile */}
      <rect x="52" y="4" width="40" height="40" rx="6" fill="url(#bpg-tile-p)" />
      <text
        x="72"
        y="34"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="26"
        fill="#ffffff"
      >
        P
      </text>

      {/* G tile */}
      <rect x="104" y="4" width="40" height="40" rx="6" fill="url(#bpg-tile-g)" />
      <text
        x="124"
        y="34"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="26"
        fill="#ffffff"
      >
        G
      </text>
    </svg>
  );
}
