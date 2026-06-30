import { createClient } from '@/utils/supabase/server';
import { getAllContent } from '@/utils/getContent';
import HomeClient from './HomeClient';
import { Post } from '@/types';

export default async function HomePage() {
  const supabase = await createClient();

  const [{ data: posts }, { data: testimonials }, content] = await Promise.all([
    supabase.from('posts').select('*').order('created_at', { ascending: false }),
    supabase.from('testimonials').select('author, quote').eq('is_active', true).order('created_at', { ascending: false }).limit(6),
    getAllContent(),
  ]);

  return (
    <HomeClient
      initialPosts={(posts as Post[]) ?? []}
      initialTestimonials={(testimonials as { author: string; quote: string }[]) ?? []}
      content={content}
    />
  );
}
