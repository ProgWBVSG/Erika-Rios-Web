import { createClient } from '@/utils/supabase/server'
import { updateContent } from './actions'

const SECTIONS = [
  {
    title: 'Hero (portada)',
    fields: [
      { key: 'hero_title',    label: 'Título principal (H1)',  type: 'text',     placeholder: 'Liderazgo audaz y consciencia evolutiva.' },
      { key: 'hero_subtitle', label: 'Subtítulo',              type: 'textarea', placeholder: 'Te acompaño a trascender tus límites...' },
    ],
  },
  {
    title: 'Sobre mí',
    fields: [
      { key: 'about_bio_1', label: 'Párrafo 1', type: 'textarea', placeholder: 'Soy Erika Rios, creadora de Bienvenida Consciencia...' },
      { key: 'about_bio_2', label: 'Párrafo 2', type: 'textarea', placeholder: 'Combino coaching, mentorías y talleres...' },
      { key: 'about_bio_3', label: 'Párrafo 3', type: 'textarea', placeholder: 'Mi propuesta es clara: fomentar un liderazgo audaz...' },
      { key: 'about_quote',  label: 'Cita destacada', type: 'textarea', placeholder: 'El impacto genuino no nace de la fuerza...' },
    ],
  },
  {
    title: 'Programa Estrella — Aprender a Aprender',
    fields: [
      { key: 'program_next_date',   label: 'Próxima fecha',  type: 'text',     placeholder: '30 de Julio – 20 hs (Arg)' },
      { key: 'program_description', label: 'Descripción',    type: 'textarea', placeholder: 'Un itinerario profundo de 4 meses...' },
    ],
  },
  {
    title: 'Preguntas Frecuentes',
    fields: [
      { key: 'faq_1_q', label: 'Pregunta 1', type: 'text',     placeholder: '¿Cómo son las sesiones 1 a 1?' },
      { key: 'faq_1_a', label: 'Respuesta 1', type: 'textarea', placeholder: 'Son encuentros confidenciales...' },
      { key: 'faq_2_q', label: 'Pregunta 2', type: 'text',     placeholder: '' },
      { key: 'faq_2_a', label: 'Respuesta 2', type: 'textarea', placeholder: '' },
      { key: 'faq_3_q', label: 'Pregunta 3', type: 'text',     placeholder: '' },
      { key: 'faq_3_a', label: 'Respuesta 3', type: 'textarea', placeholder: '' },
      { key: 'faq_4_q', label: 'Pregunta 4', type: 'text',     placeholder: '' },
      { key: 'faq_4_a', label: 'Respuesta 4', type: 'textarea', placeholder: '' },
    ],
  },
]

export default async function ContentPage() {
  const supabase = await createClient()

  let currentContent: Record<string, string> = {}
  let errorMsg = ''

  const { data, error } = await supabase.from('site_content').select('key, value')
  if (error) {
    errorMsg = 'Tabla de contenido no encontrada. Ejecutá el SQL en Supabase para crearla.'
  } else {
    currentContent = Object.fromEntries((data ?? []).map(r => [r.key, r.value]))
  }

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold sm:text-2xl">Contenido del Sitio</h2>
        <p className="text-sm text-gray-500 mt-1">
          Editá los textos que aparecen en la página principal. Dejá un campo vacío para usar el texto original.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {errorMsg}
        </div>
      )}

      <form action={updateContent} className="space-y-10">
        {SECTIONS.map(section => (
          <div key={section.title}>
            <h3 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {section.title}
            </h3>
            <div className="space-y-5">
              {section.fields.map(field => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={field.key}>
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.key}
                      name={field.key}
                      rows={3}
                      defaultValue={currentContent[field.key] ?? ''}
                      placeholder={field.placeholder}
                      className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
                    />
                  ) : (
                    <input
                      id={field.key}
                      name={field.key}
                      type="text"
                      defaultValue={currentContent[field.key] ?? ''}
                      placeholder={field.placeholder}
                      className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-4 flex gap-4">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 text-sm"
          >
            Guardar cambios
          </button>
          <p className="text-xs text-gray-400 self-center">
            Los cambios se verán reflejados en la web de inmediato.
          </p>
        </div>
      </form>
    </div>
  )
}
