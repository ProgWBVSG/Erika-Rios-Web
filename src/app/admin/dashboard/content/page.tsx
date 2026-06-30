import { createClient } from '@/utils/supabase/server'
import ContentEditor from './ContentEditor'

export default async function ContentPage() {
  const supabase = await createClient()

  let currentContent: Record<string, string> = {}
  let errorMsg = ''

  const { data, error } = await supabase.from('site_content').select('key, value')
  if (error) {
    errorMsg = 'Tabla de contenido no encontrada. Ejecutá el SQL en Supabase para crearla.'
  } else {
    currentContent = Object.fromEntries((data ?? []).map(r => [r.key, r.value]))
  }

  return <ContentEditor currentContent={currentContent} errorMsg={errorMsg} />
}
