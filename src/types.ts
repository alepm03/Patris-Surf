export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration: string;
  level: 'All Levels' | 'Beginner' | 'Intermediate' | 'Advanced';
  spots: string;
  image: string;
  videoUrl?: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
  category: 'surfing' | 'community' | 'lifestyle' | 'nature';
  aspectRatio: 'aspect-square' | 'aspect-[4/3]' | 'aspect-[3/4]' | 'aspect-[16/9]';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  years: number;
}
