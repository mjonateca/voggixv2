import { steps } from "@/lib/constants";
import { SectionIntro } from "@/components/SectionIntro";

export function HowItWorks() {
  return (
    <section className="bg-voggix-cloud py-20">
      <div className="section-shell">
        <SectionIntro title="Así funciona Voggix" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="relative rounded-[8px] border border-voggix-border bg-white p-7 shadow-soft">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-[8px] bg-voggix-navy text-lg font-black text-white">
                {index + 1}
              </div>
              <h3 className="text-2xl font-black text-voggix-ink">{step.title}</h3>
              <p className="mt-4 leading-8 text-voggix-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
