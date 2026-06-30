import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Contact } from '@/types'

const STATUS_COLORS: Record<string, string> = {
  nuevo:      'bg-blue-100 text-blue-800',
  contactado: 'bg-yellow-100 text-yellow-800',
  en_proceso: 'bg-purple-100 text-purple-800',
  convertido: 'bg-green-100 text-green-800',
  descartado: 'bg-gray-100 text-gray-500',
}

export default async function OverviewPage() {
  const supabase = await createClient()

  // --- Analytics ---
  let totalViews = 0
  let viewsPerDay: { label: string; count: number }[] = []
  let topPages: [string, number][] = []

  try {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    const { data: views } = await supabase
      .from('page_views')
      .select('page, created_at')
      .gte('created_at', sevenDaysAgo)

    if (views) {
      totalViews = views.length

      // Build day-by-day map (last 7 days)
      const dayMap: Record<string, number> = {}
      for (let i = 6; i >= 0; i--) {
        const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000)
        dayMap[d.toISOString().split('T')[0]] = 0
      }
      views.forEach(v => {
        const day = v.created_at.split('T')[0]
        if (day in dayMap) dayMap[day]++
      })
      viewsPerDay = Object.entries(dayMap).map(([date, count]) => ({
        label: new Date(date + 'T12:00:00').toLocaleDateString('es-AR', { weekday: 'short' }),
        count,
      }))

      // Top pages
      const pageMap: Record<string, number> = {}
      views.forEach(v => { pageMap[v.page] = (pageMap[v.page] || 0) + 1 })
      topPages = Object.entries(pageMap).sort(([, a], [, b]) => b - a).slice(0, 5)
    }
  } catch { /* tabla no existe aún */ }

  // --- CRM ---
  let recentContacts: Contact[] = []
  const statusCounts = { nuevo: 0, contactado: 0, en_proceso: 0, convertido: 0 }

  try {
    const { data } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50)

    if (data) {
      recentContacts = (data as Contact[]).slice(0, 5)
      ;(data as Contact[]).forEach(c => {
        if (c.status in statusCounts) statusCounts[c.status as keyof typeof statusCounts]++
      })
    }
  } catch { /* tabla no existe aún */ }

  const maxViews = Math.max(...viewsPerDay.map(d => d.count), 1)

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Resumen General</h2>

      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Visitas (7 días)</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{totalViews}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Leads nuevos</p>
          <p className="text-3xl font-bold text-blue-600 mt-1">{statusCounts.nuevo}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">En proceso</p>
          <p className="text-3xl font-bold text-purple-600 mt-1">{statusCounts.en_proceso}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Convertidos</p>
          <p className="text-3xl font-bold text-green-600 mt-1">{statusCounts.convertido}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Views chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Visitas por día (últimos 7 días)</h3>
          {totalViews === 0 ? (
            <p className="text-sm text-gray-400 text-center py-8">
              Aún sin datos. Las visitas se registran automáticamente al navegar el sitio.
            </p>
          ) : (
            <div className="flex items-end gap-2 h-32">
              {viewsPerDay.map((day, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-xs font-medium text-gray-600">{day.count > 0 ? day.count : ''}</span>
                  <div
                    className="w-full bg-indigo-500 rounded-t"
                    style={{ height: `${Math.max((day.count / maxViews) * 96, day.count > 0 ? 4 : 2)}px` }}
                  />
                  <span className="text-xs text-gray-400 capitalize">{day.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Top pages */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Páginas más visitadas</h3>
          {topPages.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-8">Sin datos aún.</p>
          ) : (
            <ul className="space-y-3">
              {topPages.map(([page, count]) => (
                <li key={page} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 font-mono">{page || '/'}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${(count / topPages[0][1]) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 w-6 text-right">{count}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Recent contacts */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-900">Últimos contactos</h3>
          <Link href="/admin/dashboard/crm" className="text-sm text-indigo-600 hover:underline">
            Ver todos
          </Link>
        </div>

        {recentContacts.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-6">
            Aún no hay contactos. Cuando alguien llene el formulario, aparece aquí.
          </p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {recentContacts.map(c => (
              <li key={c.id} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{c.name}</p>
                  <p className="text-sm text-gray-500">{c.subject || c.email || '—'}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLORS[c.status] ?? ''}`}>
                    {c.status}
                  </span>
                  <Link href={`/admin/dashboard/crm/${c.id}`} className="text-xs text-indigo-600 hover:underline">
                    Ver
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
