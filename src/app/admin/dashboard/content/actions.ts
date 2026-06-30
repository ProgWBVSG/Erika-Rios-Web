'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const CONTENT_KEYS = [
  'hero_title', 'hero_subtitle',
  'about_bio_1', 'about_bio_2', 'about_bio_3', 'about_quote',
  'program_next_date', 'program_description',
  'faq_1_q', 'faq_1_a', 'faq_2_q', 'faq_2_a',
  'faq_3_q', 'faq_3_a', 'faq_4_q', 'faq_4_a',
]

export async function updateContent(formData: FormData) {
  const supabase = await createClient()

  const upserts = CONTENT_KEYS
    .map(key => ({ key, value: (formData.get(key) as string) ?? '' }))
    .filter(row => row.value.trim() !== '')

  if (upserts.length > 0) {
    await supabase.from('site_content').upsert(upserts, { onConflict: 'key' })
  }

  revalidatePath('/')
  redirect('/admin/dashboard/content')
}
