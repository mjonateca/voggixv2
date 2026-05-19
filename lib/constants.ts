export const brand = {
  name: "Voggix",
  tagline: "Conecta. Organiza. Haz crecer.",
  description:
    "Webs premium y sistemas digitales para negocios que quieren crecer.",
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
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Producto", href: "#screens" },
  { label: "Contacto", href: "#contacto" }
];

export const trustNumbers = [
  { value: "4", label: "Verticales activas" },
  { value: "100%", label: "Producto real" },
  { value: "<48h", label: "Activación" },
  { value: "0", label: "Permanencia inicial" }
];

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

export const problemPoints = [
  "Webs desactualizadas o poco profesionales",
  "Mensajes dispersos por WhatsApp e Instagram",
  "Servicios y precios poco claros",
  "Falta de reservas o formularios simples",
  "Mala experiencia mobile",
  "Poca confianza desde el primer clic"
];

export const studioBlocks = [
  "Webs corporativas",
  "Landing pages",
  "Webs para hoteles y negocios locales",
  "Diseño responsive",
  "SEO básico",
  "WhatsApp, formularios o reservas",
  "Publicación en dominio",
  "Mantenimiento opcional"
];

export const studioTimeline = [
  {
    title: "Wireframe",
    text: "Estructura clara para explicar el valor del negocio antes de decorar."
  },
  {
    title: "Diseño visual",
    text: "Dirección premium, jerarquía fuerte y componentes pensados para conversión."
  },
  {
    title: "Mobile",
    text: "Experiencia rápida, legible y cómoda para quien llega desde redes o Google."
  },
  {
    title: "Publicación",
    text: "Dominio, SEO técnico básico, WhatsApp, formularios o reservas conectadas."
  }
];

export const projectExamples = [
  "Hotel Manila",
  "Hoteles boutique",
  "Restaurantes",
  "Clínicas",
  "Servicios profesionales",
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
    description: "Para barberías, peluquerías masculinas y grooming.",
    heroTitle: "Página pública, barberos, servicios y agenda conectada.",
    heroText:
      "iBarber ordena la experiencia desde el primer clic hasta la reserva confirmada.",
    heroMetric: "Reservas por barbero",
    text: "Barberías, peluquerías masculinas y grooming.",
    cta: "Ver iBarber",
    points: [
      "Página pública",
      "Servicios y precios",
      "Selección de barbero",
      "Fecha y hora",
      "Panel de reservas"
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
    description:
      "Para salones de belleza, estética, uñas, cejas, pestañas, spa y peluquerías beauty.",
    heroTitle: "Servicios beauty, agenda y clientes con una experiencia elegante.",
    heroText:
      "iBeauty conecta redes, servicios, precios, reservas y seguimiento de clientas.",
    heroMetric: "Agenda beauty",
    text: "Salones de belleza, estética, uñas, cejas, pestañas y spa.",
    cta: "Ver iBeauty",
    points: [
      "Catálogo beauty",
      "Duraciones y precios",
      "Reservas desde redes",
      "Agenda de clientes",
      "Estética suave"
    ],
    screens: [
      "Catálogo beauty",
      "Agenda",
      "Servicios",
      "Clientes",
      "Reserva social",
      "Panel del salón"
    ]
  },
  {
    key: "dental",
    appName: "iDental",
    name: "Voggix Dental",
    shortName: "Dental",
    color: "#2563EB",
    surface: "#EFF6FF",
    dark: "#1E3A8A",
    description: "Para clínicas dentales y tratamientos odontológicos.",
    heroTitle: "Tratamientos, doctores y citas organizadas para clínicas.",
    heroText:
      "iDental ayuda a estructurar la agenda, la experiencia del paciente y la operación clínica.",
    heroMetric: "Agenda clínica",
    text: "Clínicas dentales y tratamientos odontológicos.",
    cta: "Ver iDental",
    points: [
      "Tratamientos",
      "Profesionales",
      "Agenda",
      "Flujo del paciente",
      "Panel de clínica"
    ],
    screens: [
      "Dashboard clínica",
      "Agenda",
      "Horarios",
      "Tratamientos",
      "Paciente",
      "Confirmación"
    ]
  },
  {
    key: "tattoo",
    appName: "iTattoo",
    name: "Voggix Tattoo",
    shortName: "Tattoo",
    color: "#111827",
    surface: "#F3F4F6",
    dark: "#030712",
    description: "Para estudios de tatuaje, piercing y body art.",
    heroTitle: "Artistas, consultas, sesiones y agenda con estética editorial.",
    heroText:
      "iTattoo convierte consultas visuales en sesiones reservadas y ordenadas por artista.",
    heroMetric: "Sesiones por artista",
    text: "Estudios de tatuaje, piercing y body art.",
    cta: "Ver iTattoo",
    points: [
      "Artistas",
      "Consultas",
      "Sesiones",
      "Agenda por artista",
      "Estética editorial"
    ],
    screens: [
      "Artistas",
      "Brief",
      "Portafolio",
      "Sesiones",
      "Agenda",
      "Consulta"
    ]
  }
] as const;

export const painPoints = problemPoints.map((point) => ({
  title: point,
  text: "Voggix lo convierte en una experiencia clara, moderna y orientada a conversión."
}));

export const features = [
  "Imagen premium desde el primer clic",
  "Web rápida y responsive",
  "Servicios claros",
  "Menos preguntas repetidas",
  "Flujo hacia WhatsApp, formulario o reserva",
  "Panel de gestión",
  "Activación rápida",
  "Escalable por vertical"
].map((benefit) => ({
  title: benefit,
  text: "Parte del sistema Voggix para mejorar presencia, claridad y conversión."
}));

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

export const pricingPlans = [
  {
    name: "Voggix Studio",
    eyebrow: "Web premium",
    price: "Desde 250 USD",
    cadence: "proyecto",
    description: "Para lanzar una presencia digital premium que explique tu valor y convierta visitas en contactos.",
    cta: "Crear mi web",
    featured: false,
    items: [
      "Diseño responsive premium",
      "SEO técnico y local",
      "WhatsApp o formulario",
      "Publicación en dominio",
      "Entrega en 5-10 días"
    ]
  },
  {
    name: "Voggix Apps",
    eyebrow: "Reservas y gestión",
    price: "Desde 20 USD",
    cadence: "/mes",
    description: "Para negocios que necesitan agenda, reservas, profesionales, clientes y panel de gestión.",
    cta: "Activar mi vertical",
    featured: true,
    items: [
      "Página pública con reservas",
      "Servicios, precios y horarios",
      "Panel de administración",
      "Notificaciones y recordatorios",
      "Métricas operativas"
    ]
  },
  {
    name: "Studio + Apps",
    eyebrow: "Ecosistema completo",
    price: "Personalizado",
    cadence: "",
    description: "Web premium más sistema de reservas y gestión. Todo conectado desde el día uno.",
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
  text: "Hoteles, clínicas, cadenas, integraciones y automatizaciones se cotizan según alcance.",
  cta: "Solicitar demo"
};

export const faqs = [
  {
    question: "¿Voggix es una agencia o un software?",
    answer:
      "Es ambas cosas según la necesidad: Voggix Studio crea webs premium y Voggix Apps aporta productos verticales con reservas y gestión."
  },
  {
    question: "¿Puedo empezar solo con una web?",
    answer:
      "Sí. Puedes comenzar con Voggix Studio y luego escalar a una vertical cuando necesites agenda, reservas y panel."
  },
  {
    question: "¿Las verticales comparten la misma marca?",
    answer:
      "Sí. iBarber, iBeauty, iDental e iTattoo viven dentro del ecosistema Voggix."
  },
  {
    question: "¿Cuánto tarda en estar lista mi web?",
    answer:
      "Una web de Voggix Studio normalmente se entrega en 5 a 10 días hábiles según alcance. Las verticales de reservas pueden activarse en menos de 48 horas."
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "No. Voggix se encarga de diseño, desarrollo, publicación, dominio, SEO básico y conexión con WhatsApp, formularios o reservas."
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí. Las verticales de Voggix Apps son mensuales y sin permanencia. Voggix Studio es un proyecto de pago único."
  }
];

export const ecosystemRows = [
  {
    title: "Voggix Studio",
    text: "Ideal para negocios que necesitan presencia digital premium.",
    items: ["Web", "Marca", "SEO básico", "Dominio", "WhatsApp"]
  },
  {
    title: "iBarber / iBeauty / iDental / iTattoo",
    text: "Ideal para negocios que necesitan reservas, agenda, profesionales y gestión.",
    items: ["Reservas", "Servicios", "Equipo", "Clientes", "Panel"]
  }
];

export const screenshotGroups = [
  {
    title: "Voggix Studio",
    text: "Webs para hoteles y negocios locales con hero, servicios, galería, CTA y reserva directa.",
    tone: "from-blue-500 to-violet-500"
  },
  {
    title: "iBarber",
    text: "Dashboard, reservas, servicios, barberos, página pública y selección de fecha.",
    tone: "from-emerald-400 to-teal-500"
  },
  {
    title: "iDental",
    text: "Dashboard, agenda, horarios, tratamientos y experiencia del paciente.",
    tone: "from-blue-500 to-cyan-400"
  },
  {
    title: "iBeauty",
    text: "Mockups conceptuales para servicios, agenda, clientes y reservas desde redes.",
    tone: "from-amber-300 to-pink-400"
  },
  {
    title: "iTattoo",
    text: "Mockups conceptuales para artistas, consultas, sesiones y agenda editorial.",
    tone: "from-slate-900 to-slate-600"
  }
];

export const benefits = [
  "Imagen premium desde el primer clic",
  "Web rápida y responsive",
  "Servicios claros",
  "Menos preguntas repetidas",
  "Mejor flujo hacia WhatsApp, formulario o reserva",
  "Panel de gestión cuando el negocio lo necesita",
  "Activación rápida",
  "Escalable por vertical"
];

export const businessTypeOptions = [
  "Web premium / Voggix Studio",
  "iBarber",
  "iBeauty",
  "iDental",
  "iTattoo",
  "Otro negocio de servicios"
];
