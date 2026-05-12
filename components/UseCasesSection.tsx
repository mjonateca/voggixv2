import { useCases } from "@/lib/constants";
import { SectionIntro } from "@/components/SectionIntro";

export function UseCasesSection() {
  return (
    <section className="bg-voggix-cloud py-20">
      <div className="section-shell">
        <SectionIntro title="Diseñado para negocios que viven de su agenda" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <article key={useCase.title} className="rounded-[8px] border border-voggix-border bg-white p-6 shadow-soft">
              <h3 className="text-xl font-black text-voggix-ink">{useCase.title}</h3>
              <p className="mt-4 leading-7 text-voggix-muted">{useCase.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
