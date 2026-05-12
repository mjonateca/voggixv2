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
    cloud: "#F8FAFC"
  },
  email: "hola@voggix.com",
  // TODO: Reemplazar por el número oficial en formato internacional, sin signos ni espacios.
  whatsappPlaceholder: "REEMPLAZAR_WHATSAPP",
  // TODO: Reemplazar REEMPLAZAR_WHATSAPP antes de producción.
  whatsappHref:
    "https://wa.me/REEMPLAZAR_WHATSAPP?text=Hola%20Voggix%2C%20quiero%20digitalizar%20mi%20negocio.",
  // TODO: Reemplazar por la URL real de la aplicación cuando esté disponible.
  loginUrl: "/login"
};

export const navItems = [
  { label: "Para negocios", href: "#para-negocios" },
  { label: "Verticales", href: "#verticales" },
  { label: "Studio", href: "#studio" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" }
];

export const heroMicroBenefits = [
  "Reservas online",
  "Clientes",
  "Gestión",
  "Promoción",
  "Presencia digital"
];

export const painPoints = [
  {
    title: "Citas perdidas",
    text: "Clientes escriben y nadie responde a tiempo."
  },
  {
    title: "Agenda desordenada",
    text: "Reservas duplicadas, cambios manuales y poca visibilidad."
  },
  {
    title: "No-shows",
    text: "Ausencias por falta de recordatorios claros."
  },
  {
    title: "Presencia débil",
    text: "Depender solo de Instagram limita la confianza y el alcance."
  }
];

export const verticals = [
  {
    name: "Voggix Barber",
    shortName: "Barber",
    color: "#10B981",
    text: "Gestiona barberías, barberos, servicios y clientes recurrentes.",
    cta: "Ver más"
  },
  {
    name: "Voggix Dental",
    shortName: "Dental",
    color: "#2563EB",
    text: "Organiza citas, recordatorios y seguimiento para clínicas dentales.",
    cta: "Ver más"
  },
  {
    name: "Voggix Tattoo",
    shortName: "Tattoo",
    color: "#111827",
    text: "Convierte consultas en sesiones reservadas y muestra tu portafolio.",
    cta: "Ver más"
  },
  {
    name: "Voggix Beauty",
    shortName: "Beauty",
    color: "#D4A13C",
    text: "Impulsa salones, spas, uñas, estilistas y beauty pros.",
    cta: "Ver más"
  },
  {
    name: "Voggix Studio",
    shortName: "Studio",
    color: "#2563EB",
    text: "Crea tu web, identidad visual y presencia digital conectada a reservas.",
    cta: "Conocer Studio"
  }
];

export const features = [
  {
    title: "Reservas online",
    text: "Tus clientes reservan 24/7 desde cualquier dispositivo."
  },
  {
    title: "Agenda inteligente",
    text: "Controla servicios, horarios, disponibilidad y equipo."
  },
  {
    title: "Gestión de clientes",
    text: "Historial, preferencias, notas y seguimiento en un solo perfil."
  },
  {
    title: "Recordatorios automáticos",
    text: "Reduce ausencias con recordatorios y confirmaciones."
  },
  {
    title: "Reportes y métricas",
    text: "Entiende qué vende más, cuándo y con qué clientes."
  },
  {
    title: "Promoción digital",
    text: "Ofertas, campañas y herramientas para atraer clientes."
  },
  {
    title: "Perfil profesional",
    text: "Servicios, fotos, horarios, ubicación y botón de reservar."
  },
  {
    title: "Presencia web con Studio",
    text: "Web profesional conectada a reservas, WhatsApp, Google y redes."
  }
];

export const steps = [
  {
    title: "Crea tu perfil",
    text: "Agrega tu negocio, servicios, horarios, precios, equipo y fotos."
  },
  {
    title: "Recibe reservas",
    text: "Tus clientes eligen servicio, fecha y hora desde tu perfil o página web."
  },
  {
    title: "Haz crecer tu negocio",
    text: "Gestiona clientes, reduce ausencias, promociona servicios y mide resultados."
  }
];

export const studioServices = [
  {
    title: "Páginas web",
    text: "Sitios rápidos, modernos y optimizados para convertir visitas en reservas."
  },
  {
    title: "Identidad visual",
    text: "Logo, colores, tipografía y presencia profesional."
  },
  {
    title: "Presencia digital",
    text: "SEO local, redes, Google y conexión directa con tus clientes."
  }
];

export const pricingPlans = [
  {
    name: "Start",
    description: "Para negocios que quieren empezar con reservas digitales.",
    cta: "Solicitar demo",
    featured: false,
    items: [
      "Perfil profesional",
      "Reservas básicas",
      "Agenda y servicios",
      "Formulario de contacto"
    ]
  },
  {
    name: "Pro",
    description: "Para negocios que necesitan más control, clientes y crecimiento.",
    cta: "Quiero Pro",
    featured: true,
    items: [
      "Todo en Start",
      "Gestión de clientes",
      "Recordatorios",
      "Reportes y promociones"
    ]
  },
  {
    name: "Studio",
    description: "Para negocios que necesitan web, marca y presencia digital.",
    cta: "Cotizar Studio",
    featured: false,
    items: [
      "Landing o web completa",
      "Identidad visual",
      "Google y WhatsApp",
      "Reservas conectadas"
    ]
  },
  {
    name: "Custom",
    description: "Para clínicas, cadenas, equipos grandes o integraciones especiales.",
    cta: "Hablar con ventas",
    featured: false,
    items: [
      "Implementación a medida",
      "Soporte avanzado",
      "Integraciones",
      "Onboarding personalizado"
    ]
  }
];

export const useCases = [
  {
    title: "Barberías",
    text: "Agenda por barbero, servicios recurrentes y promociones para días flojos."
  },
  {
    title: "Clínicas dentales",
    text: "Confirmación de citas, recordatorios y mejor organización por doctor."
  },
  {
    title: "Estudios tattoo",
    text: "Portafolio, consultas previas y reservas de sesiones."
  },
  {
    title: "Beauty pros",
    text: "Paquetes, servicios por duración y seguimiento a clientas frecuentes."
  }
];

export const faqs = [
  {
    question: "¿Voggix es solo una app de reservas?",
    answer:
      "No. Voggix combina reservas, agenda, gestión de clientes, promoción digital y presencia web con Voggix Studio."
  },
  {
    question: "¿Puedo usar Voggix si mi negocio hoy solo usa WhatsApp?",
    answer:
      "Sí. La idea es ayudarte a pasar de mensajes manuales a una experiencia más profesional y organizada."
  },
  {
    question: "¿Voggix Studio crea páginas web?",
    answer:
      "Sí. Studio puede crear landing pages, webs completas, identidad visual y presencia digital conectada con reservas."
  },
  {
    question: "¿Los colores de cada vertical se mantienen?",
    answer:
      "Sí. Barber usa verde, Dental azul, Tattoo negro, Beauty dorado y Studio azul."
  }
];

export const businessTypeOptions = [
  "Barbería",
  "Clínica dental",
  "Estudio tattoo",
  "Salón / beauty",
  "Necesito web / Studio",
  "Otro"
];
