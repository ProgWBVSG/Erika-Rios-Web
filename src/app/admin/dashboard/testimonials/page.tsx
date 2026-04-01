import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { deleteTestimonial } from './actions'

export default async function TestimonialsPage() {
  const supabase = await createClient()
  const { data: testimonials, error } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false })

  return (
    <>
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold sm:text-2xl">Testimonios</h2>
          <Link href="/admin/dashboard/testimonials/new" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm font-medium shadow text-center cursor-pointer">
            Nuevo Testimonio
          </Link>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          {error && <p className="p-4 text-red-500">Error: {error.message}</p>}
          {!error && (!testimonials || testimonials.length === 0) && (
            <p className="p-8 text-center text-gray-500">No hay testimonios.</p>
          )}
          <ul className="divide-y divide-gray-200">
            {testimonials?.map((t) => (
              <li key={t.id} className="p-4 hover:bg-gray-50 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <h3 className="font-medium text-lg">{t.author} {t.is_active ? <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded ml-2">Activo</span> : <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded ml-2">Oculto</span>}</h3>
                  <p className="text-sm text-gray-500 italic">"{t.quote}"</p>
                </div>
                <div className="flex gap-2 self-end sm:self-auto items-center">
                  <form action={deleteTestimonial}>
                    <input type="hidden" name="id" value={t.id} />
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
