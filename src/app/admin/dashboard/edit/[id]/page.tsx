import { editPost } from '../../actions'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient()
  
  const { id } = await params;

  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-4">
          <Link href="/admin/dashboard" className="text-gray-500 hover:text-black">
            &larr; Volver
          </Link>
          <h2 className="text-2xl font-semibold">Editar Post</h2>
        </div>
        
        <form action={editPost} className="bg-white p-6 rounded-lg shadow space-y-6">
          <input type="hidden" name="id" value={post.id} />
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Título del Cuadro</label>
            <input type="text" name="title" defaultValue={post.title} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Reflexión / Descripción</label>
            <textarea name="reflection" rows={5} defaultValue={post.reflection} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:border-indigo-500 focus:ring-indigo-500"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Imagen del Cuadro (Opcional)</label>
            <p className="text-xs text-gray-500 mb-2">Si no seleccionas un archivo nuevo, se conservará la imagen anterior.</p>
            <input type="file" name="image" accept="image/*" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            
            {post.image_url && (
               <div className="mt-4 p-4 border border-gray-100 rounded bg-gray-50 inline-block">
                 <p className="text-xs text-gray-500 mb-2">Imagen actual:</p>
                 <img src={post.image_url} alt={post.title} className="h-40 rounded object-cover shadow-sm" />
               </div>
            )}
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-100 mt-6">
            <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 font-medium cursor-pointer">
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
