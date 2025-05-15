export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  currentPrice: string;
  previousPrice: string;
  discount?: string;
  ratings: number;
  reviews: unknown[];
}

export interface ProductFilter {
  id: string;
  name: string;
  filterBy: { id: string; name?: string; value?: unknown }[];
}
