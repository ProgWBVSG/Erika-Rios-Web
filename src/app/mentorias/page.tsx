import { createClient } from '@/utils/supabase/server'
import MentoriasClient from './MentoriasClient'

export const revalidate = 60 // revalidate at most every minute

export default async function MentoriasPage() {
    const supabase = await createClient()
    const { data: services } = await supabase
        .from('services')
        .select('*')
        .eq('category', 'mentoria')
        .eq('is_active', true)
        .order('order_index')

    return <MentoriasClient services={services || []} />
}
