import { Metadata } from 'next'
import CoachingClient from './CoachingClient'

export const metadata: Metadata = {
  title: 'Procesos de Coaching 1 a 1',
  description: 'Acompañamiento personalizado con sesiones confidenciales de 60 minutos. Explorá en profundidad aquello que querés desarmar o mirar distinto, al ritmo que necesites.',
  alternates: { canonical: 'https://erikarios.com.ar/coaching' },
  openGraph: {
    title: 'Procesos de Coaching 1 a 1 | Erika Rios',
    description: 'Acompañamiento personalizado para explorar tu autenticidad y liderar desde tu ser más elevado.',
  }
}

export default function CoachingPage() {
    return <CoachingClient />
}
