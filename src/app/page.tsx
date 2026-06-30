import { createClient } from '@/utils/supabase/server';
import { getAllContent } from '@/utils/getContent';
import HomeClient from './HomeClient';
import { Post } from '@/types';

export default async function HomePage() {
  const supabase = await createClient();

  const [{ data: posts }, content] = await Promise.all([
    supabase.from('posts').select('*').order('created_at', { ascending: false }),
    getAllContent(),
  ]);

  return <HomeClient initialPosts={(posts as Post[]) ?? []} content={content} />;
}
