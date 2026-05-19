export const brand = {
  name: "Voggix",
  tagline: "Conecta. Organiza. Haz crecer.",
  description:
    "Plataforma todo en uno para reservas, gestión y crecimiento de negocios de servicios.",
  colors: {
    blue: "#2563EB",
    violet: "#8B5CF6",
    pink: "#EC4899",
    cyan: "#22D3EE",
    navy: "#0F172A",
    black: "#071124",
    cloud: "#F8FAFC"
  },
  email: "hola@voggix.com",
  whatsappDisplay: "+1 829 764 7616",
  whatsappNumber: "18297647616",
  whatsappHref:
    "https://wa.me/18297647616?text=Hola%20Voggix%2C%20quiero%20crear%20mi%20experiencia%20digital.",
  loginUrl: "/login"
};

export const navItems = [
  { label: "Studio", href: "#studio" },
  { label: "Apps", href: "#apps" },
  { label: "Precios", href: "#precios" },
  { label: "Producto", href: "#screens" },
  { label: "Contacto", href: "#contacto" }
];

export const trustNumbers = [
  { value: "4", label: "Verticales activas" },
  { value: "100%", label: "Producto real" },
  { value: "<48h", label: "Activación" },
  { value: "0", label: "Compromiso inicial" }
];

export const problemPoints = [
  "Tu web no transmite lo que vale tu negocio",
  "Clientes preguntan precios y servicios por WhatsApp porque no los encuentran",
  "Reservas por llamada, mensaje o Instagram sin control",
  "No sabes cuántas citas pierdes al mes",
  "Tu competencia ya tiene presencia digital profesional",
  "No hay forma fácil de reservar desde el móvil"
];

export const studioBlocks = [
  "Webs corporativas",
  "Landing pages",
  "Webs para hoteles y negocios locales",
  "Diseño responsive premium",
  "SEO técnico y local",
  "WhatsApp, formularios y reservas",
  "Publicación en dominio propio",
  "Mantenimiento y soporte"
];

export const studioTimeline = [
  {
    title: "Briefing",
    text: "Entendemos tu negocio, servicios y qué necesitas comunicar."
  },
  {
    title: "Diseño premium",
    text: "Dirección visual de alto nivel con jerarquía clara y foco en conversión."
  },
  {
    title: "Desarrollo",
    text: "Web rápida, responsive y optimizada para SEO desde el primer día."
  },
  {
    title: "Lanzamiento",
    text: "Dominio, WhatsApp, formularios o reservas conectadas. Lista para vender."
  }
];

export const projectExamples = [
  "Hoteles boutique",
  "Restaurantes",
  "Clínicas",
  "Barberías",
  "Spas y estética",
  "Negocios locales"
];

export const systemModules = [
  "Servicios",
  "Precios",
  "Profesionales",
  "Calendario",
  "Reservas",
  "Clientes",
  "Panel de administración"
];

export const verticals = [
  {
    key: "barber",
    appName: "iBarber",
    name: "Voggix Barber",
    shortName: "Barber",
    color: "#10B981",
    surface: "#ECFDF5",
    dark: "#064E3B",
    description: "Reservas, barberos, servicios y gestión para barberías que quieren dejar de perder citas.",
    heroTitle: "Página pública, barberos, servicios y agenda conectada.",
    heroText: "iBarber ordena la experiencia desde el primer clic hasta la reserva confirmada.",
    heroMetric: "Reservas por barbero",
    text: "Barberías, peluquerías masculinas y grooming.",
    cta: "Ver iBarber",
    points: [
      "Página pública con servicios y precios",
      "Selección de barbero y horario",
      "Reserva online sin llamadas",
      "Panel de gestión y métricas",
      "Notificaciones y recordatorios"
    ],
    screens: [
      "Dashboard barbería",
      "Reservas",
      "Servicios duración precio",
      "Barberos y asignación",
      "Página pública",
      "Selección fecha hora"
    ]
  },
  {
    key: "beauty",
    appName: "iBeauty",
    name: "Voggix Beauty",
    shortName: "Beauty",
    color: "#D4A13C",
    surface: "#FFFBEB",
    dark: "#92400E",
    description: "Agenda, recordatorios y seguimiento para salones que pierden huecos entre citas.",
    heroTitle: "Servicios beauty, agenda y clientes con una experiencia elegante.",
    heroText: "iBeauty conecta redes, servicios, precios, reservas y seguimiento.",
    heroMetric: "Agenda beauty",
    text: "Salones de belleza, estética, uñas, cejas, pestañas y spa.",
    cta: "Ver iBeauty",
    points: [
      "Catálogo de servicios beauty",
      "Reservas desde redes sociales",
      "Agenda y recordatorios automáticos",
      "Gestión de clientas recurrentes",
      "Panel del salón"
    ],
    screens: []
  },
  {
    key: "dental",
    appName: "iDental",
    name: "Voggix Dental",
    shortName: "Dental",
    color: "#2563EB",
    surface: "#EFF6FF",
    dark: "#1E3A8A",
    description: "Citas, tratamientos y seguimiento para clínicas que no quieren perder pacientes.",
    heroTitle: "Tratamientos, doctores y citas organizadas para clínicas.",
    heroText: "iDental estructura la agenda y la experiencia del paciente.",
    heroMetric: "Agenda clínica",
    text: "Clínicas dentales y tratamientos odontológicos.",
    cta: "Ver iDental",
    points: [
      "Tratamientos y profesionales",
      "Solicitud de cita online",
      "Seguimiento del paciente",
      "Agenda clínica digital",
      "Panel de la clínica"
    ],
    screens: []
  },
  {
    key: "tattoo",
    appName: "iTattoo",
    name: "Voggix Tattoo",
    shortName: "Tattoo",
    color: "#111827",
    surface: "#F3F4F6",
    dark: "#030712",
    description: "Consultas, sesiones y agenda para estudios que convierten interés en citas reales.",
    heroTitle: "Artistas, consultas, sesiones y agenda con estética editorial.",
    heroText: "iTattoo convierte consultas en sesiones reservadas por artista.",
    heroMetric: "Sesiones por artista",
    text: "Estudios de tatuaje, piercing y body art.",
    cta: "Ver iTattoo",
    points: [
      "Portafolio de artistas",
      "Consultas y presupuestos",
      "Sesiones organizadas",
      "Agenda por artista",
      "Estética editorial premium"
    ],
    screens: []
  }
] as const;

export const pricingPlans = [
  {
    name: "Voggix Studio",
    eyebrow: "Web premium",
    price: "250",
    currency: "USD",
    cadence: "proyecto",
    description: "Web premium que explica tu valor, muestra servicios y convierte visitas en contactos.",
    cta: "Quiero mi web",
    featured: false,
    items: [
      "Diseño responsive premium",
      "SEO técnico y local",
      "WhatsApp y formularios",
      "Dominio propio",
      "Entrega en 5-10 días"
    ]
  },
  {
    name: "Voggix Apps",
    eyebrow: "Reservas y gestión",
    price: "20",
    currency: "USD",
    cadence: "/mes",
    description: "Sistema completo de reservas, servicios, profesionales, clientes y panel de gestión.",
    cta: "Activar mi vertical",
    featured: true,
    items: [
      "Página pública con reservas",
      "Servicios, precios y horarios",
      "Panel de administración",
      "Notificaciones y recordatorios",
      "Métricas y analítica"
    ]
  },
  {
    name: "Studio + Apps",
    eyebrow: "Ecosistema completo",
    price: "Personalizado",
    currency: "",
    cadence: "",
    description: "Web premium + sistema de reservas y gestión. Todo conectado desde el día uno.",
    cta: "Solicitar propuesta",
    featured: false,
    items: [
      "Todo de Studio",
      "Todo de Apps",
      "Integración completa",
      "Soporte prioritario",
      "Onboarding guiado"
    ]
  }
];

export const customPricingNote = {
  title: "Proyectos especiales",
  text: "Hoteles, cadenas, clínicas con múltiples sedes o integraciones avanzadas se cotizan según alcance.",
  cta: "Contactar"
};

export const faqs = [
  {
    question: "¿Voggix es una agencia o un software?",
    answer:
      "Ambas cosas según tu necesidad. Voggix Studio crea webs premium como servicio. Voggix Apps (iBarber, iBeauty, iDental, iTattoo) es software de reservas y gestión por suscripción mensual."
  },
  {
    question: "¿Puedo empezar solo con una web?",
    answer:
      "Sí. Muchos clientes comienzan con Voggix Studio y luego activan la vertical de reservas cuando la necesitan. No hay compromiso a largo plazo."
  },
  {
    question: "¿Cuánto tarda en estar lista mi web?",
    answer:
      "Una web de Voggix Studio se entrega en 5 a 10 días hábiles dependiendo del alcance. Las verticales de reservas se activan en menos de 48 horas."
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "No. Voggix se encarga de todo: diseño, desarrollo, dominio, SEO y publicación. Tú solo necesitas decirnos qué servicios ofreces."
  },
  {
    question: "¿Las verticales comparten la misma marca?",
    answer:
      "Sí. iBarber, iBeauty, iDental e iTattoo son productos del ecosistema Voggix, cada uno adaptado al lenguaje y operación de su sector."
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí. Las suscripciones de Voggix Apps son mensuales sin permanencia. Voggix Studio es un pago único por proyecto."
  }
];

export const ecosystemRows = [
  {
    title: "Voggix Studio",
    text: "Ideal para negocios que necesitan una presencia digital premium que convierta.",
    items: ["Web", "Marca", "SEO", "Dominio", "WhatsApp"]
  },
  {
    title: "iBarber / iBeauty / iDental / iTattoo",
    text: "Ideal para negocios que necesitan reservas, agenda, profesionales y gestión.",
    items: ["Reservas", "Servicios", "Equipo", "Clientes", "Panel"]
  }
];

export const benefits = [
  "Imagen premium desde el primer clic",
  "Web rápida y 100% responsive",
  "Servicios y precios siempre claros",
  "Menos preguntas repetidas por WhatsApp",
  "Flujo directo a reserva o contacto",
  "Panel de gestión cuando lo necesitas",
  "Activación en menos de 48 horas",
  "Escalable: de web a sistema completo"
];

export const businessTypeOptions = [
  "Web premium / Voggix Studio",
  "iBarber — Barbería",
  "iBeauty — Salón / Estética",
  "iDental — Clínica dental",
  "iTattoo — Estudio de tatuaje",
  "Otro negocio de servicios"
];

export const features = benefits.map((benefit) => ({
  title: benefit,
  text: "Parte del sistema Voggix para mejorar presencia, claridad y conversión."
}));

export const painPoints = problemPoints.map((point) => ({
  title: point,
  text: "Voggix lo convierte en una experiencia clara, moderna y orientada a conversión."
}));

export const heroLayers = [
  "Web premium",
  "Servicios",
  "WhatsApp",
  "Reservas",
  "Calendario",
  "Clientes",
  "Panel"
];

export const heroMicroBenefits = [
  "Webs premium",
  "Reservas",
  "Clientes",
  "Gestión",
  "Conversión"
];

export const steps = [
  {
    title: "Lanza tu presencia",
    text: "Voggix Studio crea la base premium para explicar y convertir mejor."
  },
  {
    title: "Activa reservas",
    text: "Las verticales conectan servicios, profesionales, horarios y clientes."
  },
  {
    title: "Gestiona y escala",
    text: "El negocio pasa de presencia online a sistema operativo digital."
  }
];

export const studioServices = studioBlocks.slice(0, 3).map((block) => ({
  title: block,
  text: "Diseñado con estética premium, rendimiento responsive y orientación comercial."
}));

export const useCases = verticals.map((vertical) => ({
  title: vertical.appName,
  text: vertical.description
}));

export const screenshotGroups = [
  {
    title: "iBarber",
    text: "Dashboard, reservas, servicios, barberos, página pública y selección de fecha.",
    tone: "from-emerald-400 to-teal-500"
  },
  {
    title: "iBeauty",
    text: "Experiencia pública para salón, estilistas y servicios beauty.",
    tone: "from-amber-300 to-pink-400"
  },
  {
    title: "iDental",
    text: "Clínica, profesionales, tratamientos y flujo de paciente.",
    tone: "from-blue-500 to-cyan-400"
  },
  {
    title: "iTattoo",
    text: "Estudio, artistas, servicios y panel con estética editorial.",
    tone: "from-slate-900 to-slate-600"
  }
];
