'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'

interface Toast {
  id: string
  name: string
  subject: string | null
}

export default function NotificationProvider() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [bellCount, setBellCount] = useState(0)
  const audioCtxRef = useRef<AudioContext | null>(null)

  const playTing = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext()
      }
      const ctx = audioCtxRef.current
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.type = 'sine'
      osc.frequency.setValueAtTime(1046, ctx.currentTime)       // do5
      osc.frequency.setValueAtTime(1318, ctx.currentTime + 0.1) // mi5
      gain.gain.setValueAtTime(0.35, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.8)
    } catch { /* AudioContext not available */ }
  }, [])

  const addToast = useCallback((name: string, subject: string | null) => {
    const id = Date.now().toString()
    setToasts(prev => [...prev, { id, name, subject }])
    setBellCount(prev => prev + 1)
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 6000)
  }, [])

  const dismissToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  // --- Supabase Realtime ---
  useEffect(() => {
    const supabase = createClient()
    const channel = supabase
      .channel('contacts-live')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'contacts' },
        payload => {
          const c = payload.new as { name: string; subject: string | null }
          playTing()
          addToast(c.name, c.subject)
        }
      )
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [playTing, addToast])

  // --- Web Push registration ---
  useEffect(() => {
    const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
    if (!vapidKey || !('serviceWorker' in navigator) || !('PushManager' in window)) return

    const register = async () => {
      try {
        const reg = await navigator.serviceWorker.register('/sw.js', { scope: '/' })
        await navigator.serviceWorker.ready

        const existing = await reg.pushManager.getSubscription()
        if (existing) return // ya registrado

        const permission = await Notification.requestPermission()
        if (permission !== 'granted') return

        const sub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(vapidKey) as unknown as Uint8Array<ArrayBuffer>,
        })

        await fetch('/api/push/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sub),
        })
      } catch { /* silently fail */ }
    }

    register()
  }, [])

  return (
    <>
      {/* Bell badge in page — floats top-right of content area */}
      {bellCount > 0 && (
        <Link
          href="/admin/dashboard/crm"
          onClick={() => setBellCount(0)}
          className="fixed top-4 right-4 z-50 flex items-center gap-1.5 bg-indigo-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        >
          <span>🔔</span>
          <span>{bellCount} nuevo{bellCount > 1 ? 's' : ''}</span>
        </Link>
      )}

      {/* Toast stack */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-80">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className="bg-white border border-gray-200 rounded-xl shadow-xl p-4 flex gap-3 items-start animate-in slide-in-from-right-4 fade-in duration-300"
          >
            <span className="text-2xl shrink-0">📩</span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm">Nuevo contacto</p>
              <p className="text-gray-700 text-sm truncate">{toast.name}</p>
              {toast.subject && (
                <p className="text-gray-500 text-xs truncate mt-0.5">{toast.subject}</p>
              )}
              <Link
                href="/admin/dashboard/crm"
                className="text-indigo-600 text-xs font-medium hover:underline mt-1 inline-block"
                onClick={() => dismissToast(toast.id)}
              >
                Ver en CRM →
              </Link>
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="text-gray-400 hover:text-gray-600 text-lg leading-none shrink-0"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  return Uint8Array.from([...rawData].map(c => c.charCodeAt(0)))
}
