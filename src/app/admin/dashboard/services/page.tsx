import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { deleteService } from './actions'

export default async function ServicesPage() {
  const supabase = await createClient()
  const { data: services, error } = await supabase.from('services').select('*').order('category').order('order_index')

  return (
    <>
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold sm:text-2xl">Servicios (Mentorías, Bienestar, Programas)</h2>
          <Link href="/admin/dashboard/services/new" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm font-medium shadow text-center cursor-pointer">
            Nuevo Servicio
          </Link>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          {error && <p className="p-4 text-red-500">Error: {error.message}</p>}
          {!error && (!services || services.length === 0) && (
            <p className="p-8 text-center text-gray-500">No hay servicios.</p>
          )}
          <ul className="divide-y divide-gray-200">
            {services?.map((s) => (
              <li key={s.id} className="p-4 hover:bg-gray-50 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <h3 className="font-medium text-lg">{s.title} <span className="text-xs bg-gray-200 px-2 py-1 rounded ml-2 uppercase text-gray-700">{s.category}</span></h3>
                  <p className="text-sm text-gray-500">{s.description.substring(0,60)}...</p>
                </div>
                <div className="flex gap-2 self-end sm:self-auto items-center">
                  <Link href={`/admin/dashboard/services/edit/${s.id}`} className="text-indigo-600 border border-indigo-200 rounded px-3 py-1 text-sm bg-indigo-50 cursor-pointer">
                    Editar
                  </Link>
                  <form action={deleteService}>
                    <input type="hidden" name="id" value={s.id} />
                    <button type="submit" className="text-red-600 border border-red-200 rounded px-3 py-1 text-sm bg-red-50 cursor-pointer">Borrar</button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </>
  )
}
