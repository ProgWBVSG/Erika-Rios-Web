'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createPost(formData: FormData) {
  const supabase = await createClient()
  
  const title = formData.get('title') as string
  const reflection = formData.get('reflection') as string
  const image = formData.get('image') as File
  
  if (!title || !reflection || !image) {
    throw new Error('Missing required fields')
  }

  // Upload image to Storage
  const fileExt = image.name.split('.').pop()
  const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`
  const filePath = `posts/${fileName}`
  
  const { error: uploadError, data: uploadData } = await supabase.storage
    .from('art_images')
    .upload(filePath, image)

  if (uploadError) {
    throw new Error(`Error uploading image: ${uploadError.message}`)
  }

  const { data: publicUrlData } = supabase.storage
    .from('art_images')
    .getPublicUrl(uploadData.path)

  // Insert to DB
  const { error: insertError } = await supabase
    .from('posts')
    .insert({
      title,
      reflection,
      image_url: publicUrlData.publicUrl
    })

  if (insertError) {
    throw new Error(`Error creating post: ${insertError.message}`)
  }

  revalidatePath('/')
  revalidatePath('/admin/dashboard')
  redirect('/admin/dashboard')
}

export async function deletePost(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id') as string
  
  if (!id) return

  // Delete from DB (The image could be deleted via trigger or manual call too, but we keep it simple for now)
  const { error } = await supabase.from('posts').delete().eq('id', id)
  
  if (error) {
     throw new Error(error.message)
  }
  
  revalidatePath('/')
  revalidatePath('/admin/dashboard')
}
