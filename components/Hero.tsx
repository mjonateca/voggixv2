import { heroMicroBenefits } from "@/lib/constants";

type HeroProps = {
  onDemoClick: () => void;
};

const appointments = [
  { name: "Corte + barba", time: "10:30", color: "#10B981" },
  { name: "Limpieza dental", time: "12:00", color: "#2563EB" },
  { name: "Consulta tattoo", time: "15:15", color: "#111827" },
  { name: "Color + peinado", time: "17:00", color: "#D4A13C" }
];

export function Hero({ onDemoClick }: HeroProps) {
  return (
    <section id="inicio" className="navy-grid overflow-hidden text-white">
      <div className="section-shell grid items-center gap-8 py-10 sm:gap-12 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-lg border border-white/16 bg-white/8 px-3 py-2 text-sm font-bold text-cyan-100">
            Conecta. Organiza. Haz crecer.
          </p>
          <h1 className="text-balance text-[2.35rem] font-black leading-[1.12] tracking-normal text-white sm:text-5xl lg:text-[4rem]">
            La plataforma que conecta, organiza y hace crecer tu negocio
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Reservas online, gestión de clientes, recordatorios, promoción digital y presencia web
            para negocios de servicios.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onDemoClick}
              className="rounded-lg bg-gradient-to-r from-voggix-blue via-voggix-violet to-voggix-pink px-5 py-3.5 text-sm font-black text-white shadow-glow transition hover:brightness-105"
            >
              Quiero una demo
            </button>
            <a
              href="#verticales"
              className="rounded-lg border border-white/18 px-5 py-3.5 text-center text-sm font-black text-white transition hover:bg-white/10"
            >
              Ver verticales
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8" aria-label="Microbeneficios de Voggix">
            {heroMicroBenefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-lg border border-white/12 bg-white/8 px-2.5 py-1.5 text-sm font-semibold text-slate-200 sm:px-3 sm:py-2"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <>
      <MobileHeroMockup />
      <DesktopHeroMockup />
    </>
  );
}

function DesktopHeroMockup() {
  return (
    <div className="relative mx-auto hidden w-full max-w-[620px] pb-14 pt-4 sm:block lg:pb-10" aria-label="Mockup del dashboard y app móvil de Voggix">
      <div className="glass-panel rounded-[8px] p-3">
        <div className="rounded-[8px] border border-white/10 bg-slate-950/76 p-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>
            <span className="rounded-lg bg-white/8 px-3 py-1 text-xs font-bold text-slate-300">
              Voggix Dashboard
            </span>
          </div>

          <div className="grid gap-4 pt-5 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-400">Agenda de hoy</p>
                <h2 className="mt-1 text-2xl font-black text-white">24 reservas hoy</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Metric label="Clientes" value="128" />
                <Metric label="Crecimiento" value="+18%" accent />
              </div>
              <div className="rounded-[8px] border border-white/10 bg-white/6 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-slate-400">Ocupación</span>
                  <span className="text-xs font-bold text-cyan-200">78%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
                </div>
              </div>
            </div>

            <div className="rounded-[8px] border border-white/10 bg-white p-4 text-voggix-ink">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">Próximas citas</p>
                  <p className="text-lg font-black">Servicios confirmados</p>
                </div>
                <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-black text-voggix-blue">
                  Live
                </span>
              </div>
              <div className="space-y-3">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.name}
                    className="flex items-center justify-between rounded-[8px] border border-slate-100 bg-slate-50 px-3 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="h-9 w-1 rounded-full"
                        style={{ backgroundColor: appointment.color }}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-black">{appointment.name}</span>
                    </div>
                    <span className="text-sm font-bold text-slate-500">{appointment.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-2 w-[168px] rounded-[24px] border border-white/18 bg-slate-950 p-2 shadow-glow sm:right-8 sm:w-[188px]">
        <div className="rounded-[18px] bg-white p-3 text-voggix-ink">
          <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-slate-300" aria-hidden="true" />
          <p className="text-xs font-bold uppercase text-voggix-blue">Reserva tu cita</p>
          <p className="mt-1 text-lg font-black leading-tight">Elige servicio</p>
          <div className="mt-4 space-y-2">
            {["Barba", "Dental", "Tattoo"].map((item) => (
              <div key={item} className="rounded-[8px] border border-slate-200 px-3 py-2 text-xs font-bold">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-[8px] bg-gradient-to-r from-voggix-blue to-voggix-violet py-2 text-center text-xs font-black text-white">
            Reservar ahora
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileHeroMockup() {
  return (
    <div className="relative mx-auto mt-2 h-[310px] w-full max-w-[360px] sm:hidden" aria-label="Mockup compacto de Voggix">
      <div className="glass-panel rounded-[8px] p-2">
        <div className="rounded-[8px] border border-white/10 bg-slate-950/82 p-3">
          <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-red-300" />
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
            </div>
            <span className="text-xs font-black text-slate-300">Dashboard</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <CompactMetric label="Reservas" value="24" />
            <CompactMetric label="Clientes" value="128" />
            <CompactMetric label="Crec." value="+18%" accent />
          </div>
          <div className="mt-3 rounded-[8px] bg-white p-3 text-voggix-ink">
            <p className="text-xs font-black uppercase text-slate-400">Próximas citas</p>
            <div className="mt-2 space-y-1.5">
              {appointments.map((appointment) => (
                <div key={appointment.name} className="flex items-center justify-between rounded-[8px] bg-slate-50 px-2.5 py-2">
                  <span className="flex items-center gap-2 truncate text-[0.72rem] font-black">
                    <span
                      className="h-5 w-1 rounded-full"
                      style={{ backgroundColor: appointment.color }}
                      aria-hidden="true"
                    />
                    {appointment.name}
                  </span>
                  <span className="text-[0.7rem] font-bold text-slate-500">{appointment.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-3 w-[126px] rounded-[18px] border border-white/18 bg-slate-950 p-1.5 shadow-glow">
        <div className="rounded-[14px] bg-white p-2 text-voggix-ink">
          <div className="mx-auto mb-2 h-1 w-7 rounded-full bg-slate-300" aria-hidden="true" />
          <p className="text-[0.64rem] font-black uppercase text-voggix-blue">Reserva</p>
          <p className="mt-1 text-sm font-black leading-tight">Tu cita</p>
          <div className="mt-2 rounded-[8px] border border-slate-200 px-2 py-1.5 text-[0.66rem] font-bold">
            Barbería
          </div>
          <div className="mt-2 rounded-[8px] bg-gradient-to-r from-voggix-blue to-voggix-violet py-1.5 text-center text-[0.64rem] font-black text-white">
            Reservar
          </div>
        </div>
      </div>
    </div>
  );
}

function CompactMetric({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-white/6 p-2">
      <p className="text-[0.62rem] font-bold uppercase text-slate-400">{label}</p>
      <p className={`mt-1 text-base font-black ${accent ? "gradient-text" : "text-white"}`}>{value}</p>
    </div>
  );
}

function Metric({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-white/6 p-4">
      <p className="text-xs font-bold uppercase text-slate-400">{label}</p>
      <p className={`mt-2 text-2xl font-black ${accent ? "gradient-text" : "text-white"}`}>{value}</p>
    </div>
  );
}
