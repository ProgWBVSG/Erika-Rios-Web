import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

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

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
