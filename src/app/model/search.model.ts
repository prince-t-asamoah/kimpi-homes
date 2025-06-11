export interface SearchSuggestion {
  type: 'product' | 'category' | 'brand' | 'suggestion';
  text: string;
  highlight: string;
  productId?: string;
  thumbnail?: string;
  price?: number;
  currency?: string;
  categoryId?: string;
  brandId?: string;
  count?: number;
  link?: string;
}
