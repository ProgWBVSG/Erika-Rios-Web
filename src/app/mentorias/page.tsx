import { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import MentoriasClient from './MentoriasClient'

export const revalidate = 60 // Revalidación estática cada minuto

// METADATA ESTÁTICA EXPORTADA DE NEXT.JS
export const metadata: Metadata = {
  title: 'Mentorías 1 a 1 y Grupales',
  description: 'Acompañamiento personalizado en módulos profundos como "Poder Personal" y "El Arte de Conversar". Transforma tu liderazgo y autenticidad con Erika Rios.',
  alternates: { canonical: 'https://erikarios.com.ar/mentorias' },
  openGraph: {
    title: 'Mentorías 1 a 1 y Grupales | Erika Rios',
    description: 'Acompañamiento personalizado en módulos profundos. Transforma tu liderazgo y autenticidad.',
  }
}

export default async function MentoriasPage() {
    const supabase = await createClient()
    const { data: services } = await supabase
        .from('services')
        .select('*')
        .eq('category', 'mentoria')
        .eq('is_active', true)
        .order('order_index')

    const activeServices = services || []

    // GENERAR SCHEMA.ORG SERVICE RICH SNIPPETS
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": activeServices.map((svc, index) => ({
         "@type": "ListItem",
         "position": index + 1,
         "item": {
           "@type": "Service",
           "name": svc.title,
           "description": svc.description,
           "provider": {
             "@type": "Person",
             "name": "Erika Rios"
           }
         }
      }))
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <MentoriasClient services={activeServices} />
        </>
    )
}
