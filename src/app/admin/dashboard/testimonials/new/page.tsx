import { upsertTestimonial } from '../actions'

export default function NewTestimonialPage() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Crear Testimonio</h2>
      <form action={upsertTestimonial} className="space-y-4">
        <div>
           <label className="block text-sm font-medium">Autor / Cliente</label>
           <input type="text" name="author" required className="mt-1 block w-full rounded border-gray-300 shadow-sm border p-2" />
        </div>
        <div>
           <label className="block text-sm font-medium">Cita (Testimonio)</label>
           <textarea name="quote" rows={4} required className="mt-1 block w-full rounded border-gray-300 shadow-sm border p-2"></textarea>
        </div>
        <div className="flex items-center">
           <input type="checkbox" name="is_active" defaultChecked className="h-4 w-4 rounded border-gray-300 text-indigo-600" />
           <label className="ml-2 block text-sm text-gray-900">Activo / Visible</label>
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Guardar</button>
      </form>
    </div>
  )
}
