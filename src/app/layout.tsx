import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

// JSON-LD schema (Structured Data) para resultados enriquecidos en Google
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'Person'],
  name: 'Erika Rios',
  description: 'Coach Ontológico y Mentora en Liderazgo Evolutivo. Acompaña a personas buscando trascender sus límites y dejar el piloto automático.',
  url: 'https://erikarios.com.ar',
  image: 'https://erikarios.com.ar/images/erika_hero_real.jpg',
  jobTitle: 'Coach Ontológico',
  address: {
    '@type': 'PostalAddress',
    'addressCountry': 'AR',
  },
  priceRange: '$$'
};

export const metadata: Metadata = {
  metadataBase: new URL('https://erikarios.com.ar'),
  title: {
    default: 'Erika Rios | Coach Ontológico y Liderazgo Evolutivo',
    template: '%s | Erika Rios',
  },
  description:
    'Acompaño tu proceso para detener el piloto automático e integrar consciencia, cuerpo y arte. Líder en transformación profunda y coaching ontológico.',
  keywords: [
    'coaching ontológico',
    'coach ontológico Argentina',
    'liderazgo evolutivo',
    'desarrollo personal',
    'mentoria grupal',
    'transformación personal',
    'bienestar consciente',
  ],
  authors: [{ name: 'Erika Rios' }],
  creator: 'Erika Rios',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://erikarios.com.ar',
    siteName: 'Erika Rios Consulting',
    title: 'Erika Rios | Coach Ontológico y Liderazgo Evolutivo',
    description:
      'Acompaño tu proceso para detener el piloto automático e integrar consciencia, cuerpo y arte.',
    images: [
      {
        url: '/images/erika_hero_real.jpg',
        width: 1200,
        height: 630,
        alt: 'Erika Rios - Coach Ontológico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erika Rios | Liderazgo Evolutivo',
    description:
      'Acompaño tu proceso para detener el piloto automático e integrar consciencia, cuerpo y arte.',
    images: ['/images/erika_hero_real.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'A3fXKzNxVfiEyL_1mtXv2U1MVAW6rXOkc0MhGDtMVdg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-stone-50 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}
