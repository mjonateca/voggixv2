"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  benefits,
  ecosystemRows,
  problemPoints,
  projectExamples,
  studioBlocks,
  studioTimeline,
  systemModules,
  verticals
} from "@/lib/constants";
import { ContactSection } from "@/components/ContactSection";
import { DemoModal } from "@/components/DemoModal";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AppLogo, Logo, type VerticalKey } from "@/components/Logo";

const productShots = {
  ibarberPublic: "/product-shots/ibarber-public.png",
  ibarberServices: "/product-shots/ibarber-dashboard-services.png",
  ibeautyPublic: "/product-shots/ibeauty-public.png",
  identalPublic: "/product-shots/idental-public.png",
  identalOnboarding: "/product-shots/idental-onboarding.png",
  itattooPublic: "/product-shots/itattoo-public.png",
  itattooDashboard: "/product-shots/itattoo-dashboard.png"
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
        <ContinuousEvolution />
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
    <section id="inicio" className="flow-hero relative min-h-[calc(100svh-72px)] bg-[#020712] text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.48),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(139,92,246,0.28),transparent_30%),linear-gradient(180deg,#020712_0%,#071124_64%,#0b1220_100%)]" />
        <div className="cinema-grid absolute inset-0 opacity-50" />
      </div>

      <div className="section-shell relative grid min-h-[calc(100svh-72px)] items-center gap-12 py-16 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="hero-copy max-w-2xl">
          <Logo variant="light" />
          <h1 className="mt-10 font-display text-[4.4rem] font-black leading-[0.9] tracking-normal text-white sm:text-[6.5rem] lg:text-[9rem]">
            Voggix
          </h1>
          <p className="mt-7 max-w-xl text-balance text-[1.45rem] font-semibold leading-tight text-white sm:text-4xl">
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
            <button type="button" onClick={onDemoClick} className="premium-button border border-white/18 bg-white/8 text-white hover:bg-white/14">
              Solicitar demo
            </button>
          </div>
        </div>

        <div className="hero-device relative min-h-[610px]">
          <HeroConstellation />
        </div>
      </div>
    </section>
  );
}

function ContinuousEvolution() {
  return (
    <section className="evolution-river relative bg-[#F8FAFC] py-24 text-[#071124] lg:py-32">
      <div className="section-shell relative">
        <div className="flow-spine" aria-hidden="true" />
        <div className="grid gap-20">
          <StoryStep
            eyebrow="01"
            title="Tu negocio no necesita solo estar online. Necesita convertir."
            text="Mensajes, precios, servicios y reservas se sienten sueltos cuando no hay una experiencia digital clara."
            direction="left"
          >
            <ProblemCluster />
          </StoryStep>

          <StoryStep
            eyebrow="02"
            title="Primero aparece una web premium."
            text="Voggix Studio ordena la primera impresión: propuesta, servicios, confianza, WhatsApp y reserva directa."
            direction="right"
          >
            <StudioBuildMockup />
          </StoryStep>

          <StoryStep
            eyebrow="03"
            title="Después la web empieza a operar."
            text="Servicios, profesionales, calendario, clientes y panel se montan sobre la presencia digital."
            direction="left"
          >
            <SystemLayerMockup />
          </StoryStep>
        </div>
      </div>
    </section>
  );
}

function StoryStep({
  eyebrow,
  title,
  text,
  direction,
  children
}: {
  eyebrow: string;
  title: string;
  text: string;
  direction: "left" | "right";
  children: ReactNode;
}) {
  return (
    <article className={`story-step ${direction === "right" ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-[0.95fr_1.05fr]"}`}>
      <div data-reveal={direction === "right" ? "right" : "left"} className={direction === "right" ? "lg:order-2" : ""}>
        <p className="text-sm font-black uppercase tracking-[0.22em] text-voggix-blue">{eyebrow}</p>
        <h2 className="mt-5 text-balance font-display text-5xl font-black leading-[0.98] text-[#071124] md:text-6xl">
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{text}</p>
      </div>
      <div data-reveal={direction === "right" ? "left" : "right"}>{children}</div>
    </article>
  );
}

function StudioSection() {
  return (
    <section id="studio" className="relative overflow-clip bg-white py-24 text-[#071124] lg:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div data-reveal="left">
          <AppLogo vertical="studio" label="Studio" color="#2563EB" />
          <h2 className="section-title mt-8">Voggix Studio crea la primera impresión que tu negocio merece.</h2>
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

function SystemSection() {
  return (
    <section className="relative overflow-clip bg-[#071124] py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(37,99,235,0.32),transparent_30%),radial-gradient(circle_at_22%_70%,rgba(34,211,238,0.18),transparent_28%)]" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div data-reveal="left">
          <h2 className="section-title text-white">
            Y cuando tu negocio necesita más que una web, Voggix activa el sistema.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Algunos negocios solo necesitan una web premium. Otros necesitan agenda, reservas,
            profesionales, servicios, clientes y panel de gestión.
          </p>
        </div>
        <div data-reveal="right" className="relative min-h-[580px]">
          <SystemLayerMockup dark />
          <div className="absolute inset-0 pointer-events-none">
            {systemModules.map((module, index) => (
              <span
                key={module}
                className="module-chip"
                style={{
                  left: `${index % 2 === 0 ? 1 : 67}%`,
                  top: `${6 + index * 11}%`
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
    <section id="apps" className="relative bg-[#F8FAFC] py-24 text-[#071124] lg:py-32">
      <div className="section-shell">
        <div data-reveal="up" className="max-w-4xl">
          <h2 className="section-title">Un mismo motor. Verticales diseñadas para cada negocio.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Voggix Apps adapta reservas, servicios, profesionales y gestión a la forma en que opera cada vertical.
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
        <div data-reveal="up" className="max-w-4xl">
          <h2 className="section-title">Empieza con una web. Escala con un sistema.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Voggix no es solo diseño. No es solo software. Es una forma de convertir negocios reales en
            experiencias digitales claras, modernas y preparadas para vender.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {ecosystemRows.map((row, index) => (
            <article key={row.title} data-reveal={index === 0 ? "left" : "right"} className="ecosystem-panel">
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
  const galleryShots = [
    {
      title: "iBarber público",
      text: "Página pública real con barberos, servicios, ubicación y reserva.",
      src: productShots.ibarberPublic,
      className: "lg:col-span-2"
    },
    {
      title: "Panel iBarber",
      text: "Servicios, duración, precio y activación desde el panel real.",
      src: productShots.ibarberServices
    },
    {
      title: "iBeauty",
      text: "Experiencia pública para salón, estilistas y servicios beauty.",
      src: productShots.ibeautyPublic
    },
    {
      title: "iDental",
      text: "Clínica, profesionales, tratamientos y flujo de paciente.",
      src: productShots.identalPublic
    },
    {
      title: "iTattoo",
      text: "Estudio, artistas, servicios y panel con estética editorial.",
      src: productShots.itattooPublic
    }
  ];

  return (
    <section id="screens" className="overflow-clip bg-[#071124] py-24 text-white lg:py-32">
      <div className="section-shell">
        <div data-reveal="up" className="max-w-4xl">
          <h2 className="section-title text-white">Producto real, diseño real, negocio real.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Capturas reales de las verticales funcionando: páginas públicas, servicios, paneles y flujos de activación.
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

function FinalCTA({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section className="relative overflow-clip bg-white py-24 text-[#071124] lg:py-32">
      <div className="section-shell">
        <div data-reveal="up" className="final-cta">
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

function HeroConstellation() {
  return (
    <div className="constellation">
      <div className="hero-product-cinema main-device">
        <div className="device-toolbar"><span /><span /><span /><strong>i-barber.com</strong></div>
        <div className="hero-shot-frame">
          <Image
            src={productShots.ibarberPublic}
            alt="Página pública real de iBarber con servicios y reservas"
            fill
            sizes="(min-width: 1024px) 660px, 92vw"
            priority
          />
        </div>
      </div>
      <div className="floating-card card-left">
        <span className="floating-eyebrow">Producto real</span>
        <strong>Web, servicios y reserva en una sola experiencia.</strong>
      </div>
      <div className="floating-card card-right hero-mini-panel">
        <Image
          src={productShots.ibarberServices}
          alt="Panel real de servicios iBarber"
          fill
          sizes="260px"
          priority
        />
      </div>
      <div className="hero-phone-shot phone-mock">
        <Image
          src={productShots.identalOnboarding}
          alt="Onboarding real de iDental"
          fill
          sizes="210px"
          priority
        />
      </div>
    </div>
  );
}

function ProblemCluster() {
  return (
    <div className="problem-cluster">
      {problemPoints.map((point, index) => (
        <div key={point} className={index === problemPoints.length - 1 ? "is-clean" : ""}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{point}</p>
        </div>
      ))}
    </div>
  );
}

function StudioBuildMockup() {
  return (
    <div className="build-mockup real-build">
      <RealShot
        src={productShots.ibeautyPublic}
        alt="Web real de iBeauty con estilistas y servicios"
        className="wireframe-layer real-shot-card"
        label="Web pública"
      />
      <RealShot
        src={productShots.ibarberPublic}
        alt="Web real de iBarber con barberos, servicios y ubicación"
        className="visual-layer real-shot-card"
        label="Servicios y reserva"
      />
      <RealShot
        src={productShots.identalPublic}
        alt="Web real de iDental con profesionales y tratamientos"
        className="mobile-layer real-shot-card"
        label="Mobile ready"
      />
    </div>
  );
}

function SystemLayerMockup({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`system-mockup ${dark ? "is-dark" : ""}`}>
      <div className="system-browser">
        <div className="device-toolbar"><span /><span /><span /><strong>Panel real</strong></div>
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
