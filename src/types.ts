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
