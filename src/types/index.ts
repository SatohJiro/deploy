export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'daxay' | 'sinhto' | 'suachua' | 'trasua' | 'soda';
  categoryName: string;
  price: number;
  originalPrice?: number;
  description: string;
  image?: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  isSignature?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'space' | 'drinks' | 'night';
  categoryLabel: string;
  src: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  avatarText: string;
}
