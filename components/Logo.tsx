import { useId } from "react";

type LogoProps = {
  variant?: "dark" | "light";
  compact?: boolean;
};

type VoggixMarkProps = {
  className?: string;
  mode?: "gradient" | "mono";
  color?: string;
  appIcon?: boolean;
};

export function Logo({ variant = "dark", compact = false }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[#070B14]";
  const slashColor = variant === "light" ? "from-white via-white to-cyan-200" : "from-voggix-blue via-voggix-violet to-voggix-pink";

  return (
    <span className="inline-flex items-center gap-3" aria-label="Voggix">
      <VoggixMark className={compact ? "h-9 w-10" : "h-10 w-12"} />
      <span className={`font-display text-[1.45rem] font-black leading-none tracking-[0.04em] ${textColor}`}>
        VOGGI
        <span className="relative inline-block pr-0.5">
          X
          <span
            className={`absolute right-[-0.05rem] top-[0.13rem] h-1.5 w-4 -rotate-45 rounded-full bg-gradient-to-r ${slashColor}`}
            aria-hidden="true"
          />
        </span>
      </span>
    </span>
  );
}

export function VoggixMark({
  className = "h-10 w-12",
  mode = "gradient",
  color = "#2563EB",
  appIcon = false
}: VoggixMarkProps) {
  const gradientId = useId();
  const fill = mode === "gradient" ? `url(#${gradientId})` : color;

  const mark = (
    <svg
      viewBox="0 0 72 58"
      role="img"
      aria-label="Isotipo Voggix"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="7" y1="6" x2="62" y2="55" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="0.48" stopColor="#8B5CF6" />
          <stop offset="0.76" stopColor="#EC4899" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <path
        d="M5.9 9.4C5.2 8 6.2 6.3 7.8 6.3H19.2C20.1 6.3 20.9 6.9 21.3 7.7L33.4 34.4C34 35.8 35.9 35.9 36.7 34.6L51.9 7.5C52.3 6.8 53 6.3 53.9 6.3H65.1C66.8 6.3 67.8 8.2 66.9 9.7L43.5 49.2C39.8 55.5 30.6 55.1 27.4 48.5L5.9 9.4Z"
        fill={fill}
      />
      <path
        d="M39.5 7.2H53.8C55.5 7.2 56.5 9.2 55.4 10.5L40.2 29.5C37.4 33 32.3 33.5 28.8 30.7L25.7 28.2L39.5 7.2Z"
        fill={fill}
        opacity={mode === "gradient" ? "0.78" : "0.86"}
      />
      <rect
        x="50.6"
        y="0.8"
        width="12.8"
        height="12.8"
        rx="3"
        transform="rotate(45 50.6 0.8)"
        fill={fill}
      />
    </svg>
  );

  if (!appIcon) {
    return mark;
  }

  return (
    <span className="inline-grid h-12 w-12 place-items-center rounded-[12px] bg-[#071124] shadow-soft">
      {mark}
    </span>
  );
}
