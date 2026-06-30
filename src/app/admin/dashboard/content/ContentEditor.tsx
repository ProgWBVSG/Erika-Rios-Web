'use client'

import RichTextEditor from './RichTextEditor'
import { updateContent } from './actions'
import { useState } from 'react'

interface Props {
  currentContent: Record<string, string>
  errorMsg?: string
}

type FieldDef =
  | { key: string; label: string; type: 'text'; placeholder: string }
  | { key: string; label: string; type: 'rich'; placeholder: string; minHeight?: string }

interface Section {
  title: string
  hint?: string
  fields: FieldDef[]
}

const SECTIONS: Section[] = [
  {
    title: '🏠 Hero — Portada',
    fields: [
      {
        key: 'hero_title',
        label: 'Título principal (H1)',
        type: 'text',
        placeholder: 'Liderazgo audaz y consciencia evolutiva.',
      },
      {
        key: 'hero_subtitle',
        label: 'Subtítulo',
        type: 'rich',
        placeholder: 'Te acompaño a trascender tus límites, explorar tu autenticidad y liderar desde tu ser más elevado.',
      },
    ],
  },
  {
    title: '👩 Sobre mí',
    fields: [
      {
        key: 'about_bio_1',
        label: 'Párrafo 1',
        type: 'rich',
        placeholder: 'Soy Erika Rios, creadora de Bienvenida Consciencia...',
        minHeight: '100px',
      },
      {
        key: 'about_bio_2',
        label: 'Párrafo 2',
        type: 'rich',
        placeholder: 'Combino coaching, mentorías y talleres de aprendizaje...',
        minHeight: '100px',
      },
      {
        key: 'about_bio_3',
        label: 'Párrafo 3',
        type: 'rich',
        placeholder: 'Mi propuesta es clara: fomentar un liderazgo audaz...',
        minHeight: '100px',
      },
      {
        key: 'about_quote',
        label: 'Cita destacada (entre comillas en la página)',
        type: 'rich',
        placeholder: 'El impacto genuino no nace de la fuerza, sino de la presencia...',
      },
    ],
  },
  {
    title: '🛠️ Sección Servicios',
    fields: [
      {
        key: 'services_heading',
        label: 'Título de la sección',
        type: 'text',
        placeholder: 'Desde tu ser, transforma lo complejo en algo simple.',
      },
      {
        key: 'services_subheading',
        label: 'Subtítulo de la sección',
        type: 'rich',
        placeholder: 'Diseño espacios de reflexión, aprendizaje y evolución para que puedas construir tu camino con claridad y propósito.',
      },
    ],
  },
  {
    title: '🧭 Card: Mentorías',
    fields: [
      {
        key: 'mentorias_desc',
        label: 'Descripción de la card',
        type: 'rich',
        placeholder: 'Acompañamiento grupal o personalizado en módulos profundos. Un espacio íntimo para escucharte y organizar tu verdad.',
      },
    ],
  },
  {
    title: '✨ Card: Experiencias de Bienestar',
    fields: [
      {
        key: 'bienestar_desc',
        label: 'Descripción de la card',
        type: 'rich',
        placeholder: 'Desayunos y Meriendas propósito, tertulia entre colegas: "El arte de envejecer", jornadas al aire libre...',
        minHeight: '100px',
      },
    ],
  },
  {
    title: '👥 Card: Programas Grupales',
    fields: [
      {
        key: 'programas_desc',
        label: 'Descripción de la card',
        type: 'rich',
        placeholder: 'Inmersiones profundas como "Diseña tu Identidad" o "Aprender a Aprender"...',
        minHeight: '100px',
      },
    ],
  },
  {
    title: '❤️ Card: Coaching 1 a 1',
    fields: [
      {
        key: 'coaching_desc',
        label: 'Descripción de la card',
        type: 'rich',
        placeholder: 'Acompañamiento personalizado para explorar en profundidad aquello que querés desarmar o mirar distinto...',
      },
    ],
  },
  {
    title: '⭐ Programa Estrella — Aprender a Aprender',
    fields: [
      {
        key: 'program_next_date',
        label: 'Próxima fecha',
        type: 'text',
        placeholder: '30 de Julio – 20 hs (Arg)',
      },
      {
        key: 'program_description',
        label: 'Descripción del programa',
        type: 'rich',
        placeholder: 'Un itinerario profundo de 4 meses diseñado para quienes buscan desaprender viejos patrones...',
        minHeight: '110px',
      },
    ],
  },
  {
    title: '🎨 Arte y Reflexión',
    fields: [
      {
        key: 'arte_title',
        label: 'Título de la sección',
        type: 'text',
        placeholder: 'El lienzo como espejo del alma.',
      },
      {
        key: 'arte_desc',
        label: 'Descripción',
        type: 'rich',
        placeholder: 'Un espacio donde el color y la pintura se encuentran con el autodescubrimiento...',
      },
    ],
  },
  {
    title: '✉️ Sección Contacto',
    fields: [
      {
        key: 'contact_title',
        label: 'Título',
        type: 'text',
        placeholder: 'Empecemos tu proceso.',
      },
      {
        key: 'contact_subtitle',
        label: 'Párrafo introductorio',
        type: 'rich',
        placeholder: 'Este es un espacio confidencial, sin juicios ni apuros. Si algo de lo que leíste te resonó...',
        minHeight: '110px',
      },
    ],
  },
  {
    title: '❓ Preguntas Frecuentes',
    fields: [
      { key: 'faq_1_q', label: 'Pregunta 1', type: 'text', placeholder: '¿Cómo son las sesiones 1 a 1?' },
      { key: 'faq_1_a', label: 'Respuesta 1', type: 'rich', placeholder: 'Son encuentros confidenciales...', minHeight: '80px' },
      { key: 'faq_2_q', label: 'Pregunta 2', type: 'text', placeholder: '¿En qué se diferencia el Programa?' },
      { key: 'faq_2_a', label: 'Respuesta 2', type: 'rich', placeholder: 'No es un curso teórico...', minHeight: '80px' },
      { key: 'faq_3_q', label: 'Pregunta 3', type: 'text', placeholder: '¿Necesito conocimientos previos?' },
      { key: 'faq_3_a', label: 'Respuesta 3', type: 'rich', placeholder: 'En absoluto...', minHeight: '60px' },
      { key: 'faq_4_q', label: 'Pregunta 4', type: 'text', placeholder: '¿Qué medios de pago aceptan?' },
      { key: 'faq_4_a', label: 'Respuesta 4', type: 'rich', placeholder: 'Aceptamos transferencias...', minHeight: '80px' },
    ],
  },
]

export default function ContentEditor({ currentContent, errorMsg }: Props) {
  const [saved, setSaved] = useState(false)

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold sm:text-2xl">Contenido del Sitio</h2>
        <p className="text-sm text-gray-500 mt-1">
          Editá todos los textos que aparecen en la página. Los campos con barra de herramientas admiten negrita, cursiva, colores y más.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {errorMsg}
        </div>
      )}

      {saved && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
          ✓ Cambios guardados. Los textos de la web ya se actualizaron.
        </div>
      )}

      <form
        action={async (formData) => {
          await updateContent(formData)
          setSaved(true)
          setTimeout(() => setSaved(false), 4000)
        }}
        className="space-y-10"
      >
        {SECTIONS.map(section => (
          <div key={section.title}>
            <h3 className="text-base font-semibold text-gray-900 mb-1 pb-2 border-b border-gray-200">
              {section.title}
            </h3>
            {section.hint && (
              <p className="text-xs text-gray-400 mb-3">{section.hint}</p>
            )}
            <div className="space-y-5 mt-4">
              {section.fields.map(field => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {field.label}
                    {field.type === 'rich' && (
                      <span className="ml-2 text-xs font-normal text-indigo-500 bg-indigo-50 px-1.5 py-0.5 rounded">
                        texto enriquecido
                      </span>
                    )}
                  </label>

                  {field.type === 'rich' ? (
                    <RichTextEditor
                      name={field.key}
                      defaultValue={currentContent[field.key] ?? ''}
                      placeholder={field.placeholder}
                      minHeight={field.minHeight}
                    />
                  ) : (
                    <input
                      type="text"
                      name={field.key}
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

        <div className="pt-4 flex gap-4 items-center sticky bottom-0 bg-gray-50 py-4 -mx-4 px-4 border-t border-gray-200">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 text-sm"
          >
            Guardar todos los cambios
          </button>
          <p className="text-xs text-gray-400">
            Los cambios se ven en la web de inmediato.
          </p>
        </div>
      </form>
    </div>
  )
}
