import { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import BienestarClient from './BienestarClient'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Experiencias de Bienestar y Naturaleza',
  description: 'Encuentros, desayunos y trekkings de conexión natural. La pausa para reflexionar y volver a uno mismo siendo parte fundamental del sistema.',
  openGraph: {
    title: 'Experiencias de Bienestar y Naturaleza | Erika Rios',
    description: 'Encuentros, desayunos y trekkings de conexión natural.',
  }
}

export default async function BienestarPage() {
    const supabase = await createClient()
    const { data: services } = await supabase
        .from('services')
        .select('*')
        .eq('category', 'bienestar')
        .eq('is_active', true)
        .order('order_index')

    const activeServices = services || []

    // SCHEMAS DE SERVICIOS
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
            <BienestarClient services={activeServices} />
        </>
    )
}
