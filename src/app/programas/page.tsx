import { createClient } from '@/utils/supabase/server'
import ProgramasClient from './ProgramasClient'

export const revalidate = 60

export default async function ProgramasPage() {
    const supabase = await createClient()
    const { data: services } = await supabase
        .from('services')
        .select('*')
        .eq('category', 'programa')
        .eq('is_active', true)
        .order('order_index')

    return <ProgramasClient services={services || []} />
}
