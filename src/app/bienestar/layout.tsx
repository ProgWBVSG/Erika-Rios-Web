import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experiencias de Bienestar natural',
  description:
    'Pausar para pensar y volver a vos. Desayunos con propósito, tertulias profundas y conectadas en la naturaleza para recordar quién sos.',
  alternates: {
    canonical: 'https://erikarios.com.ar/bienestar',
  },
};

export default function BienestarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
