import { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import ProgramasClient from './ProgramasClient'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Programas Grupales | Aprender a Aprender',
  description: 'Inmersiones colectivas para desaprender viejos patrones y construir una nueva identidad. Programa de liderazgo evolutivo en grupo con Erika Rios.',
  alternates: { canonical: 'https://erikarios.com.ar/programas' },
  openGraph: {
    title: 'Programas Grupales | Erika Rios',
    description: 'Inmersiones colectivas para desaprender viejos patrones y construir una nueva identidad.',
  }
}

export default async function ProgramasPage() {
    const supabase = await createClient()
    const { data: services } = await supabase
        .from('services')
        .select('*')
        .eq('category', 'programa')
        .eq('is_active', true)
        .order('order_index')

    const activeServices = services || []

    // SCHEMAS DE CURSOS/EDUCACIÓN
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": activeServices.map((svc, index) => ({
         "@type": "ListItem",
         "position": index + 1,
         "item": {
           "@type": "Course",
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
            <ProgramasClient services={activeServices} />
        </>
    )
}
