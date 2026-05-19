import { faqs } from "@/lib/constants";

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="section-shell">
        <div data-reveal="up" className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-voggix-blue">FAQ</p>
          <h2 className="section-title mt-5">Preguntas frecuentes</h2>
        </div>
        <div data-reveal="up" className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black text-[#071124]">
                {faq.question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-slate-100 text-voggix-blue transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-8 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
