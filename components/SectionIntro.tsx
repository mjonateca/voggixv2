type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionIntro({ eyebrow, title, text, align = "center", dark = false }: SectionIntroProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleColor = dark ? "text-white" : "text-voggix-ink";
  const textColor = dark ? "text-slate-300" : "text-voggix-muted";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className={`mb-3 text-sm font-black uppercase ${dark ? "text-cyan-200" : "text-voggix-blue"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-balance text-3xl font-black tracking-normal ${titleColor} sm:text-4xl`}>
        {title}
      </h2>
      {text ? <p className={`mt-4 text-lg leading-8 ${textColor}`}>{text}</p> : null}
    </div>
  );
}
