import { faqs } from "@/lib/constants";
import { SectionIntro } from "@/components/SectionIntro";

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20">
      <div className="section-shell">
        <SectionIntro title="Preguntas frecuentes" />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-[8px] border border-voggix-border bg-white shadow-soft">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black text-voggix-ink">
                {faq.question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] bg-slate-100 text-voggix-blue transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-8 text-voggix-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
