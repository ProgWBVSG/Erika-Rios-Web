'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Analytics } from '@vercel/analytics/react'

export default function PageTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Skip admin routes
    if (pathname.startsWith('/admin')) return
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: pathname }),
    }).catch(() => {})
  }, [pathname])

  return <Analytics />
}
