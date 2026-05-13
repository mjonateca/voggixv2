"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import {
  benefits,
  ecosystemRows,
  heroLayers,
  problemPoints,
  projectExamples,
  screenshotGroups,
  studioBlocks,
  studioTimeline,
  systemModules,
  verticals
} from "@/lib/constants";
import { ContactSection } from "@/components/ContactSection";
import { DemoModal } from "@/components/DemoModal";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Logo, VerticalIcon, VoggixMark, type VerticalKey } from "@/components/Logo";

export function LandingPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <Header onDemoClick={() => setIsDemoOpen(true)} />
      <main>
        <Hero onDemoClick={() => setIsDemoOpen(true)} />
        <ProblemSection />
        <StudioSection />
        <SystemSection />
        <AppsSection />
        <EcosystemSection />
        <ScreensSection />
        <BenefitsSection />
        <FinalCTA onDemoClick={() => setIsDemoOpen(true)} />
        <ContactSection />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
}

function Hero({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section id="inicio" className="relative min-h-[185vh] overflow-clip bg-[#020712] text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(37,99,235,0.35),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(236,72,153,0.28),transparent_32%),linear-gradient(180deg,#020712_0%,#071124_54%,#F8FAFC_100%)]" />
        <div className="cinema-grid absolute inset-0 opacity-45" />
      </div>

      <div className="sticky top-[72px] z-10 flex min-h-[calc(100svh-72px)] items-center">
        <div className="section-shell grid items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-2xl">
            <div className="hero-copy">
              <h1 className="font-display text-[4.2rem] font-black leading-[0.92] tracking-normal text-white sm:text-[6rem] lg:text-[8.5rem]">
                Voggix
              </h1>
              <p className="mt-6 max-w-xl text-balance text-2xl font-semibold leading-tight text-white sm:text-4xl">
                Webs premium y sistemas digitales para negocios que quieren crecer.
              </p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Creamos experiencias digitales que convierten visitas, mensajes y consultas en clientes,
                reservas y oportunidades reales.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#studio" className="premium-button bg-white text-[#071124] hover:bg-slate-100">
                  Explorar Voggix Studio
                </a>
                <a href="#apps" className="premium-button border border-white/18 bg-white/8 text-white hover:bg-white/14">
                  Ver verticales
                </a>
                <button type="button" onClick={onDemoClick} className="sr-only">
                  Solicitar demo
                </button>
              </div>
            </div>
          </div>

          <div className="hero-device relative min-h-[560px]">
            <CentralMockup mode="hero" />
            <LayerRail />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="relative overflow-clip bg-[#F8FAFC] py-24 text-[#071124] lg:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div data-reveal>
          <h2 className="section-title max-w-3xl">
            Tu negocio no necesita solo estar online. Necesita convertir.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Voggix organiza señales dispersas y las convierte en una experiencia clara: presencia,
            propuesta, contacto, reserva y seguimiento.
          </p>
        </div>

        <div data-reveal className="grid gap-4 sm:grid-cols-2">
          {problemPoints.map((point, index) => (
            <div key={point} className="problem-card" style={{ transitionDelay: `${index * 40}ms` }}>
              <span className="text-sm font-black text-voggix-blue">0{index + 1}</span>
              <p className="mt-5 text-xl font-black leading-tight">{point}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-shell mt-16" data-reveal>
        <TransformationStrip />
      </div>
    </section>
  );
}

function StudioSection() {
  return (
    <section id="studio" className="relative overflow-clip bg-white py-24 text-[#071124] lg:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="lg:sticky lg:top-28" data-reveal>
          <h2 className="section-title">
            Voggix Studio crea la primera impresión que tu negocio merece.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Diseñamos y desarrollamos páginas web premium para negocios que necesitan verse mejor,
            explicar mejor su valor y convertir más visitas en contactos, reservas o ventas.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {projectExamples.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-7">
          <div data-reveal className="studio-device">
            <WebPreview />
          </div>
          <div data-reveal className="grid gap-3 sm:grid-cols-2">
            {studioBlocks.map((block) => (
              <div key={block} className="studio-block">
                {block}
              </div>
            ))}
          </div>
          <div data-reveal className="grid gap-4 md:grid-cols-4">
            {studioTimeline.map((step, index) => (
              <article key={step.title} className="timeline-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemSection() {
  return (
    <section className="relative overflow-clip bg-[#071124] py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(139,92,246,0.26),transparent_30%),radial-gradient(circle_at_28%_70%,rgba(34,211,238,0.18),transparent_28%)]" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div data-reveal>
          <h2 className="section-title text-white">
            Y cuando tu negocio necesita más que una web, Voggix activa el sistema.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Algunos negocios solo necesitan una web premium. Otros necesitan agenda, reservas,
            profesionales, servicios, clientes y panel de gestión. Para ellos existen las verticales de Voggix.
          </p>
        </div>
        <div data-reveal className="relative min-h-[560px]">
          <CentralMockup mode="system" />
          <div className="absolute inset-0 pointer-events-none">
            {systemModules.map((module, index) => (
              <span
                key={module}
                className="module-chip"
                style={{
                  left: `${index % 2 === 0 ? 0 : 68}%`,
                  top: `${12 + index * 11}%`
                }}
              >
                {module}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AppsSection() {
  const [active, setActive] = useState(0);
  const current = verticals[active];

  return (
    <section id="apps" className="bg-[#F8FAFC] py-24 text-[#071124] lg:py-32">
      <div className="section-shell">
        <div data-reveal className="max-w-4xl">
          <h2 className="section-title">Un mismo motor. Verticales diseñadas para cada negocio.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Voggix Apps adapta reservas, servicios, profesionales y gestión a la forma en que opera cada vertical.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
          <div data-reveal className="space-y-3">
            {verticals.map((vertical, index) => (
              <button
                key={vertical.key}
                type="button"
                onClick={() => setActive(index)}
                className={`vertical-tab ${active === index ? "is-active" : ""}`}
                style={{ "--accent": vertical.color } as CSSProperties}
              >
                <span className="grid h-12 w-12 place-items-center rounded-[8px]" style={{ backgroundColor: vertical.surface, color: vertical.color }}>
                  <VerticalIcon vertical={vertical.key as VerticalKey} />
                </span>
                <span>
                  <strong>{vertical.appName}</strong>
                  <small>{vertical.description}</small>
                </span>
              </button>
            ))}
          </div>

          <div data-reveal className="app-stage" style={{ "--accent": current.color } as CSSProperties}>
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: current.color }}>
                  {current.name}
                </p>
                <h3 className="mt-4 text-4xl font-black">{current.appName}</h3>
                <p className="mt-4 leading-8 text-slate-600">{current.description}</p>
                <ul className="mt-7 space-y-3">
                  {current.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-black text-slate-800">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: current.color }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <VerticalScene vertical={current} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  return (
    <section id="ecosistema" className="bg-white py-24 text-[#071124] lg:py-32">
      <div className="section-shell">
        <div data-reveal className="max-w-4xl">
          <h2 className="section-title">Empieza con una web. Escala con un sistema.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Voggix no es solo diseño. No es solo software. Es una forma de convertir negocios reales en
            experiencias digitales claras, modernas y preparadas para vender.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {ecosystemRows.map((row) => (
            <article key={row.title} data-reveal className="ecosystem-panel">
              <h3>{row.title}</h3>
              <p>{row.text}</p>
              <div>
                {row.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreensSection() {
  return (
    <section id="screens" className="overflow-clip bg-[#071124] py-24 text-white lg:py-32">
      <div className="section-shell">
        <div data-reveal className="max-w-4xl">
          <h2 className="section-title text-white">Producto real, diseño real, negocio real.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Galería premium con mockups de producto y escenas reales disponibles en el ecosistema Voggix. Las
            verticales sin capturas finales se muestran como mockups conceptuales coherentes.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {screenshotGroups.map((group, index) => (
            <article key={group.title} data-reveal className={`screenshot-card ${index === 0 ? "lg:col-span-2" : ""}`}>
              <div className={`screenshot-visual bg-gradient-to-br ${group.tone}`}>
                <div className="mock-browser">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mock-lines">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-[#F8FAFC] py-24 text-[#071124] lg:py-32">
      <div className="section-shell">
        <div data-reveal className="max-w-4xl">
          <h2 className="section-title">Más percepción. Más claridad. Más conversión.</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article key={benefit} data-reveal className="benefit-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{benefit}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section className="relative overflow-clip bg-white py-24 text-[#071124] lg:py-32">
      <div className="section-shell">
        <div data-reveal className="final-cta">
          <div className="relative z-10 max-w-4xl">
            <Logo variant="light" />
            <h2 className="mt-10 text-balance font-display text-5xl font-black leading-[0.98] text-white md:text-7xl">
              Construyamos la experiencia digital que tu negocio merece.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Con Voggix Studio puedes lanzar una web premium. Con Voggix Apps puedes convertirla en un
              sistema de reservas y gestión para tu vertical.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#studio" className="premium-button bg-white text-[#071124] hover:bg-slate-100">
                Crear mi web
              </a>
              <a href="#apps" className="premium-button border border-white/18 bg-white/8 text-white hover:bg-white/14">
                Ver productos
              </a>
              <button type="button" onClick={onDemoClick} className="premium-button bg-voggix-blue text-white hover:bg-blue-500">
                Solicitar demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CentralMockup({ mode }: { mode: "hero" | "system" }) {
  return (
    <div className="relative mx-auto max-w-[720px]">
      <div className="absolute -inset-10 rounded-[40px] bg-gradient-to-br from-blue-500/26 via-violet-500/20 to-pink-500/22 blur-3xl" />
      <div className="relative rounded-[28px] border border-white/12 bg-white/10 p-3 shadow-[0_35px_120px_rgba(0,0,0,0.34)] backdrop-blur-xl">
        <div className="rounded-[22px] bg-white p-4 text-[#071124]">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-300" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-300" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              {mode === "hero" ? "Premium web" : "Voggix OS"}
            </span>
          </div>
          <div className="grid gap-5 pt-5 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[18px] bg-[#071124] p-5 text-white">
              <VoggixMark className="h-12 w-14" />
              <h3 className="mt-7 text-3xl font-black leading-tight">
                {mode === "hero" ? "Una web que explica, convence y convierte." : "Agenda, equipo y clientes en un solo sistema."}
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                {mode === "hero"
                  ? "Hero claro, servicios, galería, CTA, WhatsApp y reservas listas para crecer."
                  : "Servicios, horarios, profesionales, reservas y panel para operar cada día."}
              </p>
            </div>
            <div className="space-y-3">
              {heroLayers.slice(mode === "hero" ? 0 : 2).map((layer, index) => (
                <div key={layer} className="flex items-center justify-between rounded-[14px] border border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="font-black">{layer}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-voggix-blue shadow-sm">
                    {index === 0 ? "Base" : "Live"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LayerRail() {
  return (
    <div className="absolute -bottom-10 left-1/2 grid w-[min(92vw,680px)] -translate-x-1/2 grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
      {heroLayers.map((layer) => (
        <span key={layer} className="rounded-full border border-white/12 bg-white/10 px-3 py-2 text-center text-xs font-black text-white backdrop-blur">
          {layer}
        </span>
      ))}
    </div>
  );
}

function TransformationStrip() {
  return (
    <div className="grid gap-4 rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft lg:grid-cols-3">
      {["Mensajes sueltos", "Pantallas antiguas", "Experiencia Voggix"].map((item, index) => (
        <div key={item} className={`rounded-[22px] p-5 ${index === 2 ? "bg-[#071124] text-white" : "bg-slate-50 text-[#071124]"}`}>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">{item}</p>
          <div className="mt-7 space-y-3">
            <span className="block h-4 w-2/3 rounded-full bg-current opacity-15" />
            <span className="block h-4 w-full rounded-full bg-current opacity-10" />
            <span className="block h-12 rounded-[12px] bg-current opacity-10" />
          </div>
        </div>
      ))}
    </div>
  );
}

function WebPreview() {
  return (
    <div className="rounded-[24px] bg-[#071124] p-4 text-white">
      <div className="rounded-[18px] bg-white p-4 text-[#071124]">
        <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[16px] bg-[#F8FAFC] p-6">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-voggix-blue">Hotel Manila</p>
            <h3 className="mt-5 text-4xl font-black leading-tight">Una web premium lista para reservas directas.</h3>
            <div className="mt-8 flex gap-3">
              <span className="rounded-lg bg-[#071124] px-4 py-3 text-sm font-black text-white">Reservar</span>
              <span className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-black">WhatsApp</span>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="h-36 rounded-[16px] bg-gradient-to-br from-blue-500 to-violet-500" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-24 rounded-[16px] bg-slate-100" />
              <div className="h-24 rounded-[16px] bg-slate-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalScene({
  vertical
}: {
  vertical: (typeof verticals)[number];
}) {
  return (
    <div className="relative min-h-[420px]">
      <div className="absolute right-2 top-0 h-[360px] w-[190px] rounded-[30px] border border-slate-200 bg-[#071124] p-2 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
        <div className="h-full rounded-[24px] bg-white p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: vertical.color }}>
            Reserva
          </p>
          <h4 className="mt-4 text-xl font-black leading-tight">{vertical.appName}</h4>
          <div className="mt-5 space-y-2">
            {vertical.points.slice(0, 4).map((point) => (
              <span key={point} className="block rounded-[10px] border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-bold">
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-12 w-[78%] rounded-[24px] border border-slate-200 bg-white p-4 shadow-soft">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Panel</span>
          <span className="rounded-full px-3 py-1 text-xs font-black" style={{ backgroundColor: vertical.surface, color: vertical.color }}>
            {vertical.appName}
          </span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {vertical.screens.slice(0, 6).map((screen) => (
            <div key={screen} className="rounded-[14px] bg-slate-50 p-3">
              <span className="block h-2.5 w-10 rounded-full" style={{ backgroundColor: vertical.color }} />
              <p className="mt-4 text-sm font-black">{screen}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
