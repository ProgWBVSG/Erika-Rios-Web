'use server'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function upsertService(formData: FormData) {
  const supabase = await createClient()
  
  const id = formData.get('id') as string | null
  const category = formData.get('category') as string
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const modality = formData.get('modality') as string
  const order_index = parseInt((formData.get('order_index') as string) || '0')
  const is_active = formData.get('is_active') === 'on'
  
  const payload = { category, title, description, modality, order_index, is_active }
  
  if (id) {
      await supabase.from('services').update(payload).eq('id', id)
  } else {
      await supabase.from('services').insert(payload)
  }

  revalidatePath('/mentorias')
  revalidatePath('/bienestar')
  revalidatePath('/programas')
  redirect('/admin/dashboard/services')
}

export async function deleteService(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id') as string
  if (id) {
      await supabase.from('services').delete().eq('id', id)
      revalidatePath('/mentorias')
      revalidatePath('/bienestar')
      revalidatePath('/programas')
  }
}
