import { createClient } from '@/utils/supabase/server'

export async function getAllContent(): Promise<Record<string, string>> {
  try {
    const supabase = await createClient()
    const { data } = await supabase.from('site_content').select('key, value')
    return Object.fromEntries((data ?? []).map(r => [r.key, r.value]))
  } catch {
    return {}
  }
}
