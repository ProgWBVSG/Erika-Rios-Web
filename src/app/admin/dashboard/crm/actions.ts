'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateContactStatus(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id') as string
  const status = formData.get('status') as string

  await supabase.from('contacts').update({ status }).eq('id', id)

  revalidatePath('/admin/dashboard/crm')
  revalidatePath(`/admin/dashboard/crm/${id}`)
}

export async function saveNote(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id') as string
  const notes = formData.get('notes') as string

  await supabase.from('contacts').update({ notes }).eq('id', id)

  revalidatePath(`/admin/dashboard/crm/${id}`)
}

export async function deleteContact(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id') as string

  await supabase.from('contacts').delete().eq('id', id)

  revalidatePath('/admin/dashboard/crm')
}
