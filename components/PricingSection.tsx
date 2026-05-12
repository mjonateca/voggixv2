import { pricingPlans } from "@/lib/constants";
import { SectionIntro } from "@/components/SectionIntro";

type PricingSectionProps = {
  onDemoClick: () => void;
};

export function PricingSection({ onDemoClick }: PricingSectionProps) {
  return (
    <section id="precios" className="scroll-mt-24 bg-white py-20">
      <div className="section-shell">
        <SectionIntro
          title="Elige el punto de partida correcto"
          text="Precios finales configurables según país, vertical, tamaño del negocio y servicios incluidos."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-[8px] border p-6 ${
                plan.featured
                  ? "border-voggix-blue bg-voggix-navy text-white shadow-glow"
                  : "border-voggix-border bg-white text-voggix-ink shadow-soft"
              }`}
            >
              {plan.featured ? (
                <span className="mb-5 inline-flex rounded-lg bg-white px-3 py-1 text-xs font-black uppercase text-voggix-blue">
                  Recomendado
                </span>
              ) : null}
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <p className={`mt-3 min-h-[84px] leading-7 ${plan.featured ? "text-slate-300" : "text-voggix-muted"}`}>
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold">
                    <span
                      className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                        plan.featured ? "bg-cyan-300" : "bg-voggix-blue"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={onDemoClick}
                className={`mt-8 w-full rounded-lg px-4 py-3 text-sm font-black transition ${
                  plan.featured
                    ? "bg-white text-voggix-navy hover:bg-slate-100"
                    : "bg-gradient-to-r from-voggix-blue to-voggix-violet text-white hover:brightness-105"
                }`}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
