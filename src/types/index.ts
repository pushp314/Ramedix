export interface Product {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
  prescription: boolean;
  rating: number;
  reviews: number;
  activeIngredient: string;
  dosage: string;
  manufacturer: string;
  ndc: string;
  fdaApproved: string;
  indications: string[];
  contraindications: string[];
  sideEffects: Array<{
    effect: string;
    severity: 'common' | 'uncommon' | 'rare';
  }>;
  clinicalData: {
    efficacy: string;
    adverseEvents: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  image: string;
  readTime: number;
}