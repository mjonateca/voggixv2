import Image from "next/image";
import { useId } from "react";

type LogoProps = {
  variant?: "dark" | "light";
  compact?: boolean;
};

type VoggixMarkProps = {
  className?: string;
  mode?: "official" | "gradient" | "mono";
  color?: string;
  appIcon?: boolean;
};

export type VerticalKey = "barber" | "dental" | "tattoo" | "beauty" | "studio";

type VerticalLogoProps = {
  name: string;
  vertical: VerticalKey;
  color: string;
  dark?: boolean;
  compact?: boolean;
};

export function Logo({ variant = "dark", compact = false }: LogoProps) {
  const shellClass = variant === "light"
    ? "rounded-[12px] border border-white/18 bg-white px-3 py-2 shadow-[0_18px_60px_rgba(37,99,235,0.22)]"
    : "";

  return (
    <span className={`inline-flex items-center ${shellClass}`}>
      <Image
        src="/voggix-logo-official.png"
        alt="Voggix"
        width={1188}
        height={333}
        className={`w-auto select-none object-contain ${compact ? "h-8" : "h-10"}`}
        draggable={false}
        priority
      />
    </span>
  );
}

export function VerticalLogo({ name, vertical, color, dark = false, compact = false }: VerticalLogoProps) {
  const label = name.replace("Voggix ", "");
  const textColor = dark ? "text-white" : "text-[#070B14]";
  const mutedColor = dark ? "text-white/70" : "text-slate-500";

  return (
    <span className="inline-flex items-center gap-3" aria-label={name}>
      <VoggixMark mode="mono" color={color} className={compact ? "h-9 w-11" : "h-11 w-14"} />
      <span className="leading-none">
        <span className={`font-display block text-[1.05rem] font-black tracking-[0.1em] ${textColor}`}>
          VOGGIX
        </span>
        <span
          className={`mt-1 flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.28em] ${mutedColor}`}
        >
          <VerticalIcon vertical={vertical} className="h-4 w-4" />
          <span style={{ color }}>{label}</span>
        </span>
      </span>
    </span>
  );
}

export function AppLogo({
  vertical,
  label,
  color,
  dark = false,
  compact = false
}: {
  vertical: VerticalKey;
  label: string;
  color: string;
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-3" aria-label={`Voggix ${label}`}>
      <span
        className={`${compact ? "h-11 w-11" : "h-14 w-14"} grid place-items-center rounded-[14px] border shadow-sm`}
        style={{
          color,
          background: dark ? "rgba(255,255,255,0.08)" : "#ffffff",
          borderColor: dark ? "rgba(255,255,255,0.14)" : "rgba(226,232,240,0.9)"
        }}
      >
        <VoggixMark mode="mono" color={color} className={compact ? "h-7 w-9" : "h-9 w-11"} />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[1.05rem] font-black tracking-[0.1em] ${dark ? "text-white" : "text-[#070B14]"}`}>
          VOGGIX
        </span>
        <span
          className="mt-1 flex items-center gap-2 text-[0.66rem] font-black uppercase tracking-[0.3em]"
          style={{ color }}
        >
          <VerticalIcon vertical={vertical} className="h-4 w-4" />
          {label}
        </span>
      </span>
    </span>
  );
}

export function VoggixMark({
  className = "h-10 w-12",
  mode = "official",
  color = "#2563EB",
  appIcon = false
}: VoggixMarkProps) {
  const gradientId = useId();
  const isGradient = mode === "gradient";
  const fill = isGradient ? `url(#${gradientId})` : color;

  if (mode === "official") {
    const officialMark = (
      <Image
        src="/voggix-logo-official-mark.png"
        alt="Isotipo Voggix"
        width={333}
        height={333}
        className={`select-none object-contain ${className}`}
        draggable={false}
      />
    );

    if (!appIcon) {
      return officialMark;
    }

    return (
      <span className="inline-grid h-12 w-12 place-items-center rounded-[12px] bg-white shadow-soft">
        {officialMark}
      </span>
    );
  }

  const mark = (
    <svg
      viewBox="0 0 96 72"
      role="img"
      aria-label="Isotipo Voggix"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="10" y1="7" x2="83" y2="66" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="0.42" stopColor="#2563EB" />
          <stop offset="0.7" stopColor="#8B5CF6" />
          <stop offset="0.9" stopColor="#EC4899" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id={`${gradientId}-shade`} x1="50" y1="4" x2="30" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5B6CFF" stopOpacity="0.95" />
          <stop offset="1" stopColor="#EC4899" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path
        d="M10.9 13.2C9.6 10.9 11.3 8 14 8H29.4C30.9 8 32.3 8.9 33 10.3L47.2 41.9C48.5 44.7 52.5 44.9 54 42.2L72.6 10.2C73.2 8.8 74.7 8 76.2 8H91.4C94.1 8 95.8 11.1 94.2 13.4L64.5 58.2C58.8 66.8 46.1 66.1 41.4 56.8L10.9 13.2Z"
        fill={fill}
      />
      <path
        d="M53.3 8H73.6C76 8 77.5 10.7 76.1 12.7L55.4 42.2C51.4 47.8 43.3 48.3 38.8 43.1L31.6 34.8L53.3 8Z"
        fill={isGradient ? `url(#${gradientId}-shade)` : color}
        opacity={isGradient ? "0.88" : "0.82"}
      />
      <rect
        x="72.8"
        y="0.6"
        width="13.6"
        height="13.6"
        rx="3"
        transform="rotate(45 72.8 0.6)"
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

export function VerticalIcon({
  vertical,
  className = "h-6 w-6"
}: {
  vertical: VerticalKey;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  if (vertical === "barber") {
    return (
      <svg {...common}>
        <path d="M9 23.5L23.5 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M9 8.5L23.5 23" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="7.3" cy="24.7" r="3.2" stroke="currentColor" strokeWidth="2" />
        <circle cx="7.3" cy="7.3" r="3.2" stroke="currentColor" strokeWidth="2" />
        <path d="M18.5 13.5L25.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (vertical === "dental") {
    return (
      <svg {...common}>
        <path
          d="M9.2 4.8C12 3.4 14.2 5.6 16 5.6C17.8 5.6 20 3.4 22.8 4.8C26.3 6.5 26.4 11.7 24.4 16.2C22.9 19.5 22.4 26.5 19.5 26.5C17.4 26.5 18 20.2 16 20.2C14 20.2 14.6 26.5 12.5 26.5C9.6 26.5 9.1 19.5 7.6 16.2C5.6 11.7 5.7 6.5 9.2 4.8Z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (vertical === "tattoo") {
    return (
      <svg {...common}>
        <path d="M7 21.5L19.5 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M17 6.5L25.5 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M14.5 11.5L20.5 17.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M5.5 23L9 26.5L6.2 28.2L3.8 25.8L5.5 23Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M21 7L24 4L28 8L25 11" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  if (vertical === "beauty") {
    return (
      <svg {...common}>
        <path
          d="M20.2 26.5C17.9 27.3 14.7 27.2 12.2 26C9 24.5 7.1 21.3 7.1 17.4C7.1 10.9 11 5.3 17.3 5.3C22.1 5.3 25.2 8.6 25.2 12.8C25.2 16.4 23 18.6 20.1 19.2"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path d="M14.2 13.6C15.6 14.6 18 14.7 20.4 13.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 20.7C15 21.8 17.5 21.8 19.6 20.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="5" y="7" width="22" height="18" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12.5 14L9.5 16.8L12.5 19.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.5 14L22.5 16.8L19.5 19.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.2 12.8L14.8 20.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
