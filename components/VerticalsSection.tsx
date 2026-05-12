import { verticals } from "@/lib/constants";
import { VoggixMark } from "@/components/Logo";
import { SectionIntro } from "@/components/SectionIntro";

type VerticalsSectionProps = {
  onDemoClick: () => void;
};

export function VerticalsSection({ onDemoClick }: VerticalsSectionProps) {
  return (
    <section id="verticales" className="scroll-mt-24 bg-voggix-cloud py-20">
      <div className="section-shell">
        <SectionIntro title="Un ecosistema diseñado para cada tipo de negocio" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {verticals.map((vertical) => (
            <article
              key={vertical.name}
              className="group rounded-[8px] border border-voggix-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center justify-between gap-3">
                <VoggixMark mode="mono" color={vertical.color} className="h-12 w-14" />
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: vertical.color }}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-xl font-black text-voggix-ink">{vertical.name}</h3>
              <p className="mt-3 min-h-[84px] leading-7 text-voggix-muted">{vertical.text}</p>
              {vertical.name === "Voggix Studio" ? (
                <a
                  href="#studio"
                  className="mt-5 inline-flex rounded-lg border border-slate-200 px-4 py-2 text-sm font-black text-voggix-ink transition hover:border-voggix-blue hover:text-voggix-blue"
                >
                  {vertical.cta}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onDemoClick}
                  className="mt-5 rounded-lg border border-slate-200 px-4 py-2 text-sm font-black text-voggix-ink transition hover:border-voggix-blue hover:text-voggix-blue"
                >
                  {vertical.cta}
                </button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
