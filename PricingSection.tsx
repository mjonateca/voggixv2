import { customPricingNote, pricingPlans, brand } from "@/lib/constants";

type PricingSectionProps = {
  onDemoClick: () => void;
};

export function PricingSection({ onDemoClick }: PricingSectionProps) {
  return (
    <section id="precios" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="section-shell">
        <div data-reveal="up" className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-voggix-blue">Precios</p>
          <h2 className="section-title mt-5">Planes claros. Sin sorpresas.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Elige lo que necesitas hoy y escala cuando quieras. Sin permanencia, sin letra pequeña.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`pricing-card ${plan.featured ? "is-featured" : ""}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-voggix-blue px-4 py-1.5 text-xs font-black text-white">
                  Más popular
                </div>
              )}
              <p className={`text-xs font-black uppercase tracking-[0.16em] ${plan.featured ? "text-cyan-300" : "text-voggix-blue"}`}>
                {plan.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-black">{plan.name}</h3>
              <div className="mt-5 flex items-baseline gap-1">
                {plan.price !== "Personalizado" ? (
                  <>
                    <span className="text-sm font-bold text-slate-500">Desde</span>
                    <span className="text-5xl font-black">${plan.price}</span>
                    <span className={`text-sm font-bold ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>
                      {plan.currency} {plan.cadence}
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-black">{plan.price}</span>
                )}
              </div>
              <p className={`mt-5 leading-7 ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold">
                    <svg className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-cyan-300" : "text-voggix-blue"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block w-full rounded-xl px-4 py-3.5 text-center text-sm font-black transition ${
                  plan.featured
                    ? "bg-white text-[#071124] hover:bg-slate-100"
                    : "bg-[#071124] text-white hover:bg-slate-800"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <div data-reveal="up" className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-black text-[#071124]">{customPricingNote.title}</h3>
            <p className="mt-2 max-w-3xl leading-7 text-slate-600">{customPricingNote.text}</p>
          </div>
          <button
            type="button"
            onClick={onDemoClick}
            className="shrink-0 rounded-xl border border-slate-300 px-5 py-3 text-sm font-black text-slate-900 transition hover:border-slate-900"
          >
            {customPricingNote.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
