"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  benefits,
  brand,
  ecosystemRows,
  problemPoints,
  projectExamples,
  studioBlocks,
  studioTimeline,
  systemModules,
  trustNumbers,
  verticals
} from "@/lib/constants";
import { ContactSection } from "@/components/ContactSection";
import { DemoModal } from "@/components/DemoModal";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PricingSection } from "@/components/PricingSection";
import { AppLogo, Logo, type VerticalKey } from "@/components/Logo";

const productShots = {
  ibarberPublic: "/product-shots/ibarber-public.png",
  ibarberServices: "/product-shots/ibarber-dashboard-services.png",
  ibeautyPublic: "/product-shots/ibeauty-public.png",
  identalPublic: "/product-shots/idental-public.png",
  identalOnboarding: "/product-shots/idental-onboarding.png",
  itattooPublic: "/product-shots/itattoo-public.png",
  itattooDashboard: "/product-shots/itattoo-dashboard.png",
  heroMockup: "/product-shots/hero-mockup-ibarber.png"
} as const;

const verticalShotMap: Record<VerticalKey, { public: string; panel: string; label: string }> = {
  barber: {
    public: productShots.ibarberPublic,
    panel: productShots.ibarberServices,
    label: "Página pública y panel iBarber"
  },
  beauty: {
    public: productShots.ibeautyPublic,
    panel: productShots.ibeautyPublic,
    label: "Página pública iBeauty"
  },
  dental: {
    public: productShots.identalPublic,
    panel: productShots.identalOnboarding,
    label: "Página pública y onboarding iDental"
  },
  tattoo: {
    public: productShots.itattooPublic,
    panel: productShots.itattooDashboard,
    label: "Página pública y panel iTattoo"
  },
  studio: {
    public: productShots.ibarberPublic,
    panel: productShots.ibarberServices,
    label: "Proyecto Voggix Studio"
  }
};

export function LandingPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.querySelectorAll("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header onDemoClick={() => setIsDemoOpen(true)} />
      <main className="overflow-clip">
        <Hero onDemoClick={() => setIsDemoOpen(true)} />
        <TrustBar />
        <ProblemSection />
        <StudioSection />
        <SystemSection />
        <AppsSection />
        <ScreensSection />
        <PricingSection onDemoClick={() => setIsDemoOpen(true)} />
        <BenefitsSection />
        <FAQSection />
        <FinalCTA onDemoClick={() => setIsDemoOpen(true)} />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
}

/* ── Hero ── */
function Hero({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section id="inicio" className="flow-hero relative min-h-[calc(100svh-72px)] bg-[#020712] text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.48),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(139,92,246,0.28),transparent_30%),linear-gradient(180deg,#020712_0%,#071124_64%,#0b1220_100%)]" />
        <div className="cinema-grid absolute inset-0 opacity-50" />
      </div>

      <div className="section-shell relative grid min-h-[calc(100svh-72px)] items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="hero-copy max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm font-bold text-slate-300">Plataforma activa — verticales funcionando</span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[0.92] tracking-tight text-white">
            Tu negocio merece una experiencia digital que
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent"> convierta</span>.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            Webs premium, reservas online, gestión de servicios y panel de control.
            Todo lo que necesitas para que tu negocio deje de perder clientes por falta de presencia digital.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button bg-emerald-500 text-white hover:bg-emerald-400"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Hablar por WhatsApp
            </a>
            <button
              type="button"
              onClick={onDemoClick}
              className="premium-button border border-white/18 bg-white/8 text-white hover:bg-white/14"
            >
              Solicitar demo
            </button>
          </div>
        </div>

        <div className="hero-device relative hidden min-h-[520px] lg:block">
          <div className="hero-mockup-container">
            <Image
              src={productShots.heroMockup}
              alt="iBarber by Voggix — Sistema de reservas para barberías con panel de gestión, agenda y pagos"
              fill
              sizes="(min-width: 1024px) 620px, 0px"
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* Mobile: show a simpler version */}
        <div className="relative lg:hidden">
          <div className="hero-product-cinema main-device-mobile">
            <div className="device-toolbar"><span /><span /><span /><strong>i-barber.com</strong></div>
            <div className="hero-shot-frame-mobile">
              <Image
                src={productShots.ibarberPublic}
                alt="Página pública real de iBarber"
                fill
                sizes="92vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Trust Bar ── */
function TrustBar() {
  return (
    <section className="relative z-10 -mt-1 border-b border-slate-200 bg-white py-8">
      <div className="section-shell">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustNumbers.map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-3xl font-black text-[#071124] md:text-4xl">{item.value}</p>
              <p className="mt-1 text-sm font-bold text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Problem Section ── */
function ProblemSection() {
  return (
    <section className="relative bg-[#F8FAFC] py-24 text-[#071124] lg:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div data-reveal="left">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-voggix-blue">El problema</p>
            <h2 className="mt-5 text-balance font-display text-5xl font-black leading-[0.98] text-[#071124] md:text-6xl">
              Tu negocio pierde clientes cada día sin una presencia digital clara.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Cuando un cliente busca tus servicios y no encuentra una web profesional con precios, horarios y forma de reservar, se va con tu competencia.
            </p>
          </div>
          <div data-reveal="right" className="grid gap-3 sm:grid-cols-2">
            {problemPoints.map((point, index) => (
              <div
                key={point}
                className={`rounded-2xl border p-5 ${
                  index === problemPoints.length - 1
                    ? "border-transparent bg-[#071124] text-white"
                    : "border-slate-200 bg-white text-[#071124]"
                }`}
              >
                <span className={`text-xs font-black ${index === problemPoints.length - 1 ? "text-cyan-300" : "text-voggix-blue"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-[0.95rem] font-bold leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Studio Section ── */
function StudioSection() {
  return (
    <section id="studio" className="relative overflow-clip bg-white py-24 text-[#071124] lg:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div data-reveal="left">
          <AppLogo vertical="studio" label="Studio" color="#2563EB" />
          <h2 className="section-title mt-8">La primera impresión que tu negocio merece.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Voggix Studio diseña y desarrolla webs premium para negocios que necesitan explicar mejor su valor
            y convertir más visitas en contactos, reservas o ventas.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {projectExamples.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700">
                {item}
              </span>
            ))}
          </div>
          <a
            href={brand.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#071124] px-6 py-3 text-sm font-black text-white transition hover:bg-slate-800"
          >
            Quiero mi web premium
          </a>
        </div>

        <div data-reveal="right" className="space-y-5">
          <StudioPortfolioMockup />
          <div className="grid gap-3 sm:grid-cols-2">
            {studioBlocks.map((block, index) => (
              <div key={block} className="studio-block" style={{ transitionDelay: `${index * 35}ms` }}>
                {block}
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-4">
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

/* ── System Section ── */
function SystemSection() {
  return (
    <section className="relative overflow-clip bg-[#071124] py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(37,99,235,0.32),transparent_30%),radial-gradient(circle_at_22%_70%,rgba(34,211,238,0.18),transparent_28%)]" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div data-reveal="left">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">Más que una web</p>
          <h2 className="section-title mt-5 text-white">
            Cuando necesitas más, Voggix activa el sistema completo.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Servicios, profesionales, calendario, clientes, reservas y panel de gestión.
            Todo montado sobre tu presencia digital.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {systemModules.map((module) => (
              <span key={module} className="module-chip-inline">{module}</span>
            ))}
          </div>
        </div>
        <div data-reveal="right" className="relative min-h-[480px]">
          <SystemLayerMockup dark />
        </div>
      </div>
    </section>
  );
}

/* ── Apps Section ── */
function AppsSection() {
  const [active, setActive] = useState(0);
  const current = verticals[active];

  return (
    <section id="apps" className="relative bg-[#F8FAFC] py-24 text-[#071124] lg:py-32">
      <div className="section-shell">
        <div data-reveal="up" className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-voggix-blue">Verticales</p>
          <h2 className="section-title mt-5">Un motor. Cuatro verticales. Tu negocio.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Voggix Apps adapta reservas, servicios, profesionales y gestión a la forma en que opera cada tipo de negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <div data-reveal="left" className="space-y-3">
            {verticals.map((vertical, index) => (
              <button
                key={vertical.key}
                type="button"
                onClick={() => setActive(index)}
                className={`vertical-tab ${active === index ? "is-active" : ""}`}
                style={{ "--accent": vertical.color } as CSSProperties}
              >
                <AppLogo
                  vertical={vertical.key as VerticalKey}
                  label={vertical.shortName}
                  color={vertical.color}
                  compact
                />
              </button>
            ))}
          </div>

          <div data-reveal="right" className="app-stage" style={{ "--accent": current.color } as CSSProperties}>
            <div className="grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
              <div>
                <AppLogo vertical={current.key as VerticalKey} label={current.shortName} color={current.color} />
                <h3 className="mt-7 text-4xl font-black">{current.appName}</h3>
                <p className="mt-4 leading-8 text-slate-600">{current.description}</p>
                <ul className="mt-7 space-y-3">
                  {current.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-black text-slate-800">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: current.color }} />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#precios"
                  className="mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-black text-white transition hover:opacity-90"
                  style={{ backgroundColor: current.color }}
                >
                  Ver precios
                </a>
              </div>
              <VerticalScene vertical={current} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Screens Section ── */
function ScreensSection() {
  const galleryShots = [
    {
      title: "iBarber — Página pública",
      text: "Barberos, servicios, ubicación y reserva online desde un solo enlace.",
      src: productShots.ibarberPublic,
      className: "lg:col-span-2"
    },
    {
      title: "iBarber — Panel",
      text: "Servicios, duración, precio y activación desde el panel de gestión.",
      src: productShots.ibarberServices
    },
    {
      title: "iBeauty",
      text: "Estilistas, servicios beauty y reserva para salones.",
      src: productShots.ibeautyPublic
    },
    {
      title: "iDental",
      text: "Profesionales, tratamientos y flujo de paciente.",
      src: productShots.identalPublic
    },
    {
      title: "iTattoo",
      text: "Artistas, portafolio y agenda con estética editorial.",
      src: productShots.itattooPublic
    }
  ];

  return (
    <section id="screens" className="overflow-clip bg-[#071124] py-24 text-white lg:py-32">
      <div className="section-shell">
        <div data-reveal="up" className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">Producto real</p>
          <h2 className="section-title mt-5 text-white">Esto no es un mockup. Es producto funcionando.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Capturas reales de las verticales activas. Páginas públicas, paneles de gestión y flujos de reserva.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {galleryShots.map((group, index) => (
            <article key={group.title} data-reveal={index % 2 === 0 ? "left" : "right"} className={`screenshot-card ${group.className ?? ""}`}>
              <RealShot src={group.src} alt={group.title} className="screenshot-real" />
              <h3>{group.title}</h3>
              <p>{group.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Benefits ── */
function BenefitsSection() {
  return (
    <section className="bg-[#F8FAFC] py-24 text-[#071124] lg:py-32">
      <div className="section-shell">
        <div data-reveal="up" className="max-w-4xl">
          <h2 className="section-title">Más percepción. Más claridad. Más conversión.</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article key={benefit} data-reveal="up" className="benefit-card" style={{ transitionDelay: `${index * 35}ms` }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{benefit}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ── */
function FinalCTA({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section className="relative overflow-clip bg-white py-24 text-[#071124] lg:py-32">
      <div className="section-shell">
        <div data-reveal="up" className="final-cta">
          <div className="relative z-10 max-w-4xl">
            <Logo variant="light" />
            <h2 className="mt-10 text-balance font-display text-5xl font-black leading-[0.98] text-white md:text-7xl">
              Tu competencia ya tiene presencia digital. ¿Y tú?
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Empieza con una web premium o activa un sistema completo de reservas y gestión.
              Sin compromiso a largo plazo. Sin complicaciones técnicas.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button bg-emerald-500 text-white hover:bg-emerald-400"
              >
                Hablar por WhatsApp
              </a>
              <a href="#precios" className="premium-button border border-white/18 bg-white/8 text-white hover:bg-white/14">
                Ver precios
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

/* ── Floating WhatsApp ── */
function FloatingWhatsApp() {
  return (
    <a
      href={brand.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

/* ── Reusable Components ── */

function StudioPortfolioMockup() {
  return (
    <div className="portfolio-mockup">
      <div className="portfolio-browser">
        <div className="device-toolbar"><span /><span /><span /><strong>Voggix Studio</strong></div>
        <RealShot
          src={productShots.ibarberPublic}
          alt="Proyecto real iBarber como página pública con reservas"
          className="portfolio-real-shot"
        />
      </div>
      <div className="portfolio-phone">
        <Image
          src={productShots.ibeautyPublic}
          alt="Vista real de iBeauty"
          fill
          sizes="180px"
        />
      </div>
    </div>
  );
}

function SystemLayerMockup({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`system-mockup ${dark ? "is-dark" : ""}`}>
      <div className="system-browser">
        <div className="device-toolbar"><span /><span /><span /><strong>Panel de gestión</strong></div>
        <div className="system-shot-grid">
          <RealShot
            src={productShots.ibarberServices}
            alt="Panel real de servicios iBarber"
            className="system-shot-main"
          />
          <RealShot
            src={productShots.itattooDashboard}
            alt="Dashboard real de iTattoo"
            className="system-shot-side"
          />
        </div>
      </div>
    </div>
  );
}

function VerticalScene({ vertical }: { vertical: (typeof verticals)[number] }) {
  const shots = verticalShotMap[vertical.key as VerticalKey];

  return (
    <div className="vertical-scene">
      <div className="vertical-browser">
        <div className="device-toolbar"><span /><span /><span /><strong>{vertical.appName}</strong></div>
        <RealShot
          src={shots.public}
          alt={`${vertical.appName}: ${shots.label}`}
          className="vertical-real-main"
        />
      </div>
      <div className="vertical-phone" style={{ "--accent": vertical.color } as CSSProperties}>
        <Image
          src={shots.panel}
          alt={`${vertical.appName}: panel o configuración real`}
          fill
          sizes="220px"
        />
      </div>
    </div>
  );
}

function RealShot({
  src,
  alt,
  className = "",
  label
}: {
  src: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  return (
    <div className={`real-shot ${className}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 560px, 92vw" />
      {label ? <span>{label}</span> : null}
    </div>
  );
}
