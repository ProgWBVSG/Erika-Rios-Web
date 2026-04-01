import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { upsertTestimonial } from '../../actions'

export default async function EditTestimonialPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: testimonial } = await supabase.from('testimonials').select('*').eq('id', id).single()

  if (!testimonial) redirect('/admin/dashboard/testimonials')

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Editar Testimonio</h2>
      <form action={upsertTestimonial} className="space-y-4">
        <input type="hidden" name="id" value={testimonial.id} />
        <div>
           <label className="block text-sm font-medium">Autor / Cliente</label>
           <input type="text" name="author" defaultValue={testimonial.author} required className="mt-1 block w-full rounded border-gray-300 shadow-sm border p-2" />
        </div>
        <div>
           <label className="block text-sm font-medium">Cita (Testimonio)</label>
           <textarea name="quote" rows={4} defaultValue={testimonial.quote} required className="mt-1 block w-full rounded border-gray-300 shadow-sm border p-2"></textarea>
        </div>
        <div className="flex items-center">
           <input type="checkbox" name="is_active" defaultChecked={testimonial.is_active} className="h-4 w-4 rounded border-gray-300 text-indigo-600" />
           <label className="ml-2 block text-sm text-gray-900">Activo / Visible</label>
        </div>
        <div className="flex gap-4">
            <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Guardar Cambios</button>
            <a href="/admin/dashboard/testimonials" className="px-4 py-2 border rounded hover:bg-gray-50 text-gray-700">Cancelar</a>
        </div>
      </form>
    </div>
  )
}
