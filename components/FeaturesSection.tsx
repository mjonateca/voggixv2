import { features } from "@/lib/constants";
import { SectionIntro } from "@/components/SectionIntro";

export function FeaturesSection() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <SectionIntro title="Todo lo que necesitas para vender más y organizar mejor" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-[8px] border border-voggix-border bg-white p-6 transition hover:border-blue-200 hover:shadow-soft"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-blue-50 text-sm font-black text-voggix-blue">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-lg font-black text-voggix-ink">{feature.title}</h3>
              <p className="mt-3 leading-7 text-voggix-muted">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
