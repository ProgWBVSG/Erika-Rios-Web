import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST(request: Request) {
  try {
    const { page } = await request.json()
    if (!page) return NextResponse.json({ ok: true })

    const supabase = await createClient()
    await supabase.from('page_views').insert({ page })
  } catch {
    // Always return 200 — tracking must never break the site
  }

  return NextResponse.json({ ok: true })
}
