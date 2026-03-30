import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programas Grupales | Aprender a Aprender',
  description:
    'Inmersiones colectivas para desaprender viejos patrones y construir una nueva identidad. Programa de liderazgo evolutivo en grupo.',
  alternates: {
    canonical: 'https://erikarios.com.ar/programas',
  },
};

export default function ProgramasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
