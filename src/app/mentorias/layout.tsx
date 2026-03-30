import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentorías 1 a 1',
  description:
    'Acompañamiento personalizado en módulos profundos: Poder Personal, El Arte de Conversar y Modelo de Negocio. Un espacio íntimo para escucharte.',
  alternates: {
    canonical: 'https://erikarios.com.ar/mentorias',
  },
};

export default function MentoriasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
