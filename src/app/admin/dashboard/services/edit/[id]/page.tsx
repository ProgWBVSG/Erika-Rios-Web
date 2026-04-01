import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { upsertService } from '../../actions'

export default async function EditServicePage({ params }: { params: { id: string } }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: service } = await supabase.from('services').select('*').eq('id', id).single()

  if (!service) redirect('/admin/dashboard/services')

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Editar Servicio</h2>
      <form action={upsertService} className="space-y-4">
        <input type="hidden" name="id" value={service.id} />
        <div>
           <label className="block text-sm font-medium">Categoría</label>
           <select name="category" defaultValue={service.category} className="mt-1 block w-full rounded border-gray-300 shadow-sm border p-2" required>
              <option value="mentoria">Mentoría</option>
              <option value="bienestar">Experiencia Bienestar</option>
              <option value="programa">Programa Grupal</option>
           </select>
        </div>
        <div>
           <label className="block text-sm font-medium">Título</label>
           <input type="text" name="title" defaultValue={service.title} required className="mt-1 block w-full rounded border-gray-300 shadow-sm border p-2" />
        </div>
        <div>
           <label className="block text-sm font-medium">Modalidad / Info Corta</label>
           <input type="text" name="modality" defaultValue={service.modality || ''} placeholder="Ej: 4 encuentros · 1h c/u" className="mt-1 block w-full rounded border-gray-300 shadow-sm border p-2" />
        </div>
        <div>
           <label className="block text-sm font-medium">Descripción</label>
           <textarea name="description" rows={6} defaultValue={service.description} required className="mt-1 block w-full rounded border-gray-300 shadow-sm border p-2"></textarea>
        </div>
        <div>
           <label className="block text-sm font-medium">Orden de aparición (número)</label>
           <input type="number" name="order_index" defaultValue={service.order_index} className="mt-1 block w-full rounded border-gray-300 shadow-sm border p-2" />
        </div>
        <div className="flex items-center">
           <input type="checkbox" name="is_active" defaultChecked={service.is_active} className="h-4 w-4 rounded border-gray-300 text-indigo-600" />
           <label className="ml-2 block text-sm text-gray-900">Activo / Visible</label>
        </div>
        <div className="flex gap-4">
            <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Guardar Cambios</button>
            <a href="/admin/dashboard/services" className="px-4 py-2 border rounded hover:bg-gray-50 text-gray-700">Cancelar</a>
        </div>
      </form>
    </div>
  )
}
