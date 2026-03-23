import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export default async function DashboardPage() {
  const supabase = await createClient()
  
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  // Handle logout
  const signOut = async () => {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/admin/login')
  }

  // Fetch posts
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
               <span className="text-sm text-gray-600">{user.email}</span>
               <form action={signOut}>
                 <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-sm font-medium">
                   Logout
                 </button>
               </form>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Tus Cuadros y Reflexiones</h2>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm font-medium shadow">
            Nuevo Post
          </button>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          {error && <p className="p-4 text-red-500">Error loading posts: {error.message}</p>}
          {!error && (!posts || posts.length === 0) && (
            <p className="p-8 text-center text-gray-500">No tienes posts publicados todavía.</p>
          )}
          
          <ul className="divide-y divide-gray-200">
            {posts?.map((post) => (
              <li key={post.id} className="p-4 hover:bg-gray-50 flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="h-16 w-16 bg-gray-200 rounded object-cover overflow-hidden flex-shrink-0">
                    {post.image_url ? (
                       <img src={post.image_url} alt={post.title} className="h-full w-full object-cover" />
                    ) : (
                       <span className="flex items-center justify-center h-full text-xs text-gray-400">Sin foto</span>
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
                <div className="flex gap-2">
                  <button className="text-indigo-600 hover:text-indigo-900 border border-indigo-200 rounded px-3 py-1 text-sm bg-indigo-50">Editar</button>
                  <button className="text-red-600 hover:text-red-900 border border-red-200 rounded px-3 py-1 text-sm bg-red-50">Borrar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
