export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  ratings: number;
  reviews: unknown[];
}

export interface ProductFilter {
  id: string;
  name: string;
  filterBy: { id: string; name?: string; value?: unknown }[];
}
