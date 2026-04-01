'use server'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function upsertTestimonial(formData: FormData) {
  const supabase = await createClient()
  
  const id = formData.get('id') as string | null
  const author = formData.get('author') as string
  const quote = formData.get('quote') as string
  const is_active = formData.get('is_active') === 'on'
  
  const payload = { author, quote, is_active }
  
  if (id) {
      await supabase.from('testimonials').update(payload).eq('id', id)
  } else {
      await supabase.from('testimonials').insert(payload)
  }

  revalidatePath('/')
  redirect('/admin/dashboard/testimonials')
}

export async function deleteTestimonial(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id') as string
  if (id) {
      await supabase.from('testimonials').delete().eq('id', id)
      revalidatePath('/')
  }
}
