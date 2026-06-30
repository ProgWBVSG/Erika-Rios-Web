import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Contact } from '@/types'
import { updateContactStatus, saveNote } from '../actions'

const STATUSES = [
  { value: 'nuevo',      label: 'Nuevo' },
  { value: 'contactado', label: 'Contactado' },
  { value: 'en_proceso', label: 'En proceso' },
  { value: 'convertido', label: 'Convertido' },
  { value: 'descartado', label: 'Descartado' },
]

export default async function ContactDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data } = await supabase.from('contacts').select('*').eq('id', id).single()
  if (!data) notFound()

  const contact = data as Contact

  return (
    <div className="max-w-2xl">
      <div className="mb-6 flex items-center gap-4">
        <Link href="/admin/dashboard/crm" className="text-gray-500 hover:text-black text-sm">
          &larr; Volver al CRM
        </Link>
        <h2 className="text-xl font-semibold">Detalle de Contacto</h2>
      </div>

      {/* Contact info card */}
      <div className="bg-white rounded-lg shadow p-6 mb-6 space-y-4">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Nombre</p>
          <p className="text-lg font-semibold text-gray-900">{contact.name}</p>
        </div>
        {contact.email && (
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Email</p>
            <a href={`mailto:${contact.email}`} className="text-indigo-600 hover:underline">{contact.email}</a>
          </div>
        )}
        {contact.subject && (
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Asunto</p>
            <p className="text-gray-800">{contact.subject}</p>
          </div>
        )}
        {contact.message && (
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Mensaje</p>
            <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg text-sm leading-relaxed">{contact.message}</p>
          </div>
        )}
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Recibido</p>
          <p className="text-sm text-gray-600">
            {new Date(contact.created_at).toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>

      {/* Status update */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Estado del lead</h3>
        <form action={updateContactStatus}>
          <input type="hidden" name="id" value={contact.id} />
          <div className="flex flex-wrap gap-2 mb-4">
            {STATUSES.map(s => (
              <label key={s.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value={s.value}
                  defaultChecked={contact.status === s.value}
                  className="sr-only peer"
                />
                <span className="px-4 py-2 rounded-full border text-sm font-medium transition-colors peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600 border-gray-300 text-gray-600 hover:border-indigo-400">
                  {s.label}
                </span>
              </label>
            ))}
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-indigo-700">
            Guardar estado
          </button>
        </form>
      </div>

      {/* Notes */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Notas internas</h3>
        <form action={saveNote}>
          <input type="hidden" name="id" value={contact.id} />
          <textarea
            name="notes"
            rows={5}
            defaultValue={contact.notes ?? ''}
            placeholder="Anotá cualquier información relevante sobre este contacto..."
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
          <button type="submit" className="mt-3 bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-black">
            Guardar notas
          </button>
        </form>
      </div>
    </div>
  )
}
