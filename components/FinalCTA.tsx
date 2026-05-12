import { brand } from "@/lib/constants";

type FinalCTAProps = {
  onDemoClick: () => void;
};

export function FinalCTA({ onDemoClick }: FinalCTAProps) {
  return (
    <section className="bg-voggix-black py-20 text-white">
      <div className="section-shell rounded-[8px] border border-white/12 bg-gradient-to-r from-blue-600/24 via-violet-500/20 to-cyan-400/16 p-8 text-center md:p-12">
        <h2 className="text-balance text-3xl font-black sm:text-4xl">Digitaliza tu negocio con Voggix</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          Menos tareas manuales. Más reservas. Más clientes.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onDemoClick}
            className="rounded-lg bg-gradient-to-r from-voggix-blue via-voggix-violet to-voggix-pink px-5 py-3.5 text-sm font-black text-white transition hover:brightness-105"
          >
            Quiero una demo
          </button>
          <a
            href={brand.whatsappHref}
            className="rounded-lg border border-white/18 px-5 py-3.5 text-sm font-black text-white transition hover:bg-white/10"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
