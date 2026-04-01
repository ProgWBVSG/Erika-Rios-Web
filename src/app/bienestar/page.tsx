import { createClient } from '@/utils/supabase/server'
import BienestarClient from './BienestarClient'

export const revalidate = 60 // revalidate at most every minute

export default async function BienestarPage() {
    const supabase = await createClient()
    const { data: services } = await supabase
        .from('services')
        .select('*')
        .eq('category', 'bienestar')
        .eq('is_active', true)
        .order('order_index')

    return <BienestarClient services={services || []} />
}
