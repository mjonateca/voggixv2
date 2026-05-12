import { painPoints } from "@/lib/constants";
import { SectionIntro } from "@/components/SectionIntro";

export function ProblemSection() {
  return (
    <section id="para-negocios" className="scroll-mt-24 bg-white py-20">
      <div className="section-shell">
        <SectionIntro
          title="Tu negocio no debería depender de mensajes perdidos"
          text="Si tus citas viven en WhatsApp, Instagram, notas o llamadas, estás perdiendo tiempo, clientes y oportunidades de venta. Voggix centraliza tu agenda, tus clientes y tu presencia digital en un solo lugar."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, index) => (
            <article
              key={point.title}
              className="rounded-[8px] border border-voggix-border bg-white p-6 shadow-soft"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] bg-slate-100 text-sm font-black text-voggix-blue">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-lg font-black text-voggix-ink">{point.title}</h3>
              <p className="mt-3 leading-7 text-voggix-muted">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
