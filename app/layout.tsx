import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const title = "Voggix — Webs premium y sistemas digitales para negocios";
const description =
  "Voggix crea páginas web premium y productos verticales para negocios de servicios, citas, reservas, clientes y crecimiento digital.";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voggix.com"),
  title,
  description,
  icons: {
    icon: "/voggix-logo-official-mark.png"
  },
  openGraph: {
    title,
    description,
    url: "https://voggix.com",
    siteName: "Voggix",
    images: [
      {
        url: "/voggix-logo-official.png",
        width: 1188,
        height: 333,
        alt: "Logo oficial de Voggix"
      }
    ],
    locale: "es_DO",
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Voggix",
      url: "https://voggix.com",
      email: "hola@voggix.com",
      slogan: "Conecta. Organiza. Haz crecer.",
      logo: "https://voggix.com/voggix-logo-official.png"
    },
    {
      "@type": "SoftwareApplication",
      name: "Voggix",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
