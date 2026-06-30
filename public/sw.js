self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {}
  const title = data.title || 'Nuevo contacto — Erika Rios'
  const options = {
    body: data.body || 'Alguien envió un mensaje desde la web',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    data: { url: data.url || '/admin/dashboard/crm' },
    vibrate: [200, 100, 200],
    requireInteraction: true,
  }
  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', event => {
  event.notification.close()
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      const url = event.notification.data?.url || '/admin/dashboard/crm'
      for (const client of clientList) {
        if (client.url.includes('/admin') && 'focus' in client) {
          client.navigate(url)
          return client.focus()
        }
      }
      return clients.openWindow(url)
    })
  )
})
