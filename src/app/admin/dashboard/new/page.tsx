import { createPost } from '../actions'
import Link from 'next/link'

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-4">
          <Link href="/admin/dashboard" className="text-gray-500 hover:text-black">
            &larr; Volver
          </Link>
          <h2 className="text-2xl font-semibold">Crear Nuevo Post</h2>
        </div>
        
        <form action={createPost} className="bg-white p-6 rounded-lg shadow space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Título del Cuadro</label>
            <input type="text" name="title" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Reflexión / Descripción</label>
            <textarea name="reflection" rows={5} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:border-indigo-500 focus:ring-indigo-500"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Imagen del Cuadro</label>
            <input type="file" name="image" accept="image/*" required className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
          </div>

          <div className="flex justify-end pt-4">
            <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 font-medium cursor-pointer">
              Publicar Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
