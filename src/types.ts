export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  modality: string | null;
  image_url: string | null;
  order_index: number;
  is_active: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
  is_active: boolean;
}

export interface Post {
  id: string;
  title: string;
  reflection: string;
  image_url: string;
  published_at: string;
  created_at: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string | null;
  subject: string | null;
  message: string | null;
  status: 'nuevo' | 'contactado' | 'en_proceso' | 'convertido' | 'descartado';
  notes: string | null;
  created_at: string;
}
