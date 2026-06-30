import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Contact } from '@/types'
import { DeleteContactButton } from './DeleteContactButton'

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  nuevo:       { label: 'Nuevo',       color: 'bg-blue-100 text-blue-800' },
  contactado:  { label: 'Contactado',  color: 'bg-yellow-100 text-yellow-800' },
  en_proceso:  { label: 'En proceso',  color: 'bg-purple-100 text-purple-800' },
  convertido:  { label: 'Convertido',  color: 'bg-green-100 text-green-800' },
  descartado:  { label: 'Descartado',  color: 'bg-gray-100 text-gray-500' },
}

export default async function CRMPage() {
  const supabase = await createClient()

  let contacts: Contact[] = []
  let errorMsg = ''

  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    errorMsg = 'Tabla de contactos no encontrada. Ejecutá el SQL en Supabase para crearla.'
  } else {
    contacts = (data as Contact[]) ?? []
  }

  const statusCounts = { nuevo: 0, contactado: 0, en_proceso: 0, convertido: 0, descartado: 0 }
  contacts.forEach(c => {
    if (c.status in statusCounts) statusCounts[c.status as keyof typeof statusCounts]++
  })

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold sm:text-2xl">CRM — Contactos y Leads</h2>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {errorMsg}
        </div>
      )}

      {/* Pipeline counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {([
          ['nuevo', 'Nuevos', 'bg-blue-50 border-blue-200 text-blue-800'],
          ['contactado', 'Contactados', 'bg-yellow-50 border-yellow-200 text-yellow-800'],
          ['en_proceso', 'En proceso', 'bg-purple-50 border-purple-200 text-purple-800'],
          ['convertido', 'Convertidos', 'bg-green-50 border-green-200 text-green-800'],
        ] as [keyof typeof statusCounts, string, string][]).map(([key, label, cls]) => (
          <div key={key} className={`p-4 rounded-lg border ${cls} flex flex-col items-center`}>
            <span className="text-3xl font-bold">{statusCounts[key]}</span>
            <span className="text-sm font-medium mt-1">{label}</span>
          </div>
        ))}
      </div>

      {/* Contacts list */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {contacts.length === 0 && !errorMsg && (
          <p className="p-8 text-center text-gray-500">
            Aún no hay contactos. Cuando alguien llene el formulario de la web, aparecerá aquí.
          </p>
        )}

        <ul className="divide-y divide-gray-200">
          {contacts.map(contact => {
            const st = STATUS_LABELS[contact.status] ?? STATUS_LABELS.nuevo
            return (
              <li key={contact.id} className="p-4 hover:bg-gray-50 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-semibold text-gray-900 truncate">{contact.name}</span>
                    <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${st.color}`}>{st.label}</span>
                  </div>
                  {contact.email && <p className="text-sm text-gray-500 truncate">{contact.email}</p>}
                  {contact.subject && <p className="text-sm text-gray-600 font-medium mt-0.5 truncate">{contact.subject}</p>}
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(contact.created_at).toLocaleDateString('es-AR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                <div className="flex gap-2 self-end sm:self-auto shrink-0">
                  <Link
                    href={`/admin/dashboard/crm/${contact.id}`}
                    className="text-indigo-600 hover:text-indigo-900 border border-indigo-200 rounded px-3 py-1 text-sm bg-indigo-50"
                  >
                    Ver detalle
                  </Link>
                  <DeleteContactButton id={contact.id} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
