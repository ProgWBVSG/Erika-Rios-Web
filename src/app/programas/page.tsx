import { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import ProgramasClient from './ProgramasClient'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Programas Grupales y Aprendizaje',
  description: 'Inmersiones profundas como "Aprender a Aprender" y "Diseña tu Identidad". Fomentamos la escucha activa y transformamos el enfoque automático.',
  openGraph: {
    title: 'Programas Grupales y Aprendizaje | Erika Rios',
    description: 'Inmersiones profundas para fomentar la escucha y transformar el enfoque automático.',
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
