import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import webpush from 'web-push'

webpush.setVapidDetails(
  process.env.VAPID_EMAIL!,
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
)

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, website } = await request.json()

    // Honeypot: bots fill hidden fields, humans don't
    if (website) {
      return NextResponse.json({ success: true })
    }

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    const supabase = await createClient()
    const { error } = await supabase
      .from('contacts')
      .insert({ name, email, subject, message })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Send push notifications (fire-and-forget, no await)
    sendPushToAll(name, subject).catch(() => {})

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

async function sendPushToAll(name: string, subject: string | null) {
  const supabase = await createClient()
  const { data: subs } = await supabase
    .from('push_subscriptions')
    .select('endpoint, p256dh, auth')

  if (!subs || subs.length === 0) return

  const payload = JSON.stringify({
    title: `📩 Nuevo contacto: ${name}`,
    body: subject || 'Alguien envió un mensaje desde erikarios.com.ar',
    url: '/admin/dashboard/crm',
  })

  await Promise.allSettled(
    subs.map(sub =>
      webpush.sendNotification(
        { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
        payload
      )
    )
  )
}
