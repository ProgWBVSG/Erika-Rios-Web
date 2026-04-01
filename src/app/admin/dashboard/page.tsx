import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { deletePost } from './actions'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: posts, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false })

  return (
    <>
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold sm:text-2xl">Tus Cuadros y Reflexiones</h2>
          <Link href="/admin/dashboard/new" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm font-medium shadow text-center cursor-pointer">
            Nuevo Post
          </Link>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          {error && <p className="p-4 text-red-500">Error loading posts: {error.message}</p>}
          {!error && (!posts || posts.length === 0) && (
            <p className="p-8 text-center text-gray-500">No tienes posts publicados todavía.</p>
          )}
          
          <ul className="divide-y divide-gray-200">
            {posts?.map((post) => (
              <li key={post.id} className="p-4 hover:bg-gray-50 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div className="flex gap-4 items-center">
                  <div className="h-16 w-16 bg-gray-200 rounded object-cover overflow-hidden flex-shrink-0">
                    {post.image_url ? (
                       <img src={post.image_url} alt={post.title} className="h-full w-full object-cover" />
                    ) : (
                       <span className="flex items-center justify-center h-full text-xs text-gray-400 text-center">Sin foto</span>
                    )}
                  </div>
                  <div>
                     <h3 className="font-medium text-lg">{post.title}</h3>
                     <p className="text-sm text-gray-500 line-clamp-1">{post.reflection}</p>
                     <p className="text-xs text-gray-400 mt-1">
                        Publicado: {new Date(post.published_at).toLocaleDateString()}
                     </p>
                  </div>
                </div>
                <div className="flex gap-2 self-end sm:self-auto items-center">
                  <Link href={`/admin/dashboard/edit/${post.id}`} className="text-indigo-600 hover:text-indigo-900 border border-indigo-200 rounded px-3 py-1 text-sm bg-indigo-50 cursor-pointer">
                    Editar
                  </Link>
                  <form action={deletePost}>
                    <input type="hidden" name="id" value={post.id} />
                    <button type="submit" className="text-red-600 hover:text-red-900 border border-red-200 rounded px-3 py-1 text-sm bg-red-50 cursor-pointer">Borrar</button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </>
  )
}
