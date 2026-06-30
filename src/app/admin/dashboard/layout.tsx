import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import NotificationProvider from './components/NotificationProvider'

const NAV = [
  { href: '/admin/dashboard/overview',     label: 'Resumen' },
  { href: '/admin/dashboard/crm',          label: 'Contactos' },
  { href: '/admin/dashboard',              label: 'Arte' },
  { href: '/admin/dashboard/services',     label: 'Servicios' },
  { href: '/admin/dashboard/content',      label: 'Contenido' },
  { href: '/admin/dashboard/testimonials', label: 'Testimonios' },
  { href: '/admin/dashboard/guide',        label: '📋 Guía' },
]

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const signOut = async () => {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <h1 className="text-xl font-bold">Admin · Erika Rios</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 hidden sm:block">{user.email}</span>
              <form action={signOut}>
                <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-sm font-medium cursor-pointer">
                  Salir
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
        <div className="border-b border-gray-200 overflow-x-auto">
          <nav className="-mb-px flex space-x-1 sm:space-x-6">
            {NAV.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-2 sm:px-1 border-b-2 font-medium text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      <NotificationProvider />
    </div>
  )
}
