export interface SearchItem {
  itemType:
    | 'product'
    | 'category'
    | 'suggestion'
    | 'recent_search'
    | 'popular_search';
  id: string;
  text?: string;
  name?: string;
  highlight?: string;
  searchUrl: string;
  price?: number;
  thumbnail?: string;
  productCount?: number;
  searchVolume?: number;
}
