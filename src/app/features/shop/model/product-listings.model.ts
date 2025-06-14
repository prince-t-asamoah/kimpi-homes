import { SearchItem } from '../../../model/search.model';
import { GetApiResponse } from './../../../model/api-response';

export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: {
    original: string;
    discounted: string;
    discountPercent: number;
    currency: string;
  };
  originalPrice: string;
  discountedPrice: string;
  discount?: string;
  rating: number;
  reviews: unknown[];
  reviewsCount: number;
  discountPercentage?: number;
}

export interface ProductFilter {
  id: string;
  name: string;
  filterBy: { id: string; name?: string; value?: unknown }[];
}

export interface GetProductListingsAPIResponse extends GetApiResponse {
  data: {
    category: {
      id: string;
      name: string;
      imageUrl: string;
    };
    topSellers: Product[];
    newArrivals: Product[];
    flashSales: Product[];
    recommended: Product[];
  };
}

export interface ProductSearchAPIResponse {
  meta: {
    query: string;
    searchId: string;
    responseTime: number;
  };
  data: {
    suggestions: SearchItem[];
    recentSearches: SearchItem[];
    popularSearches: SearchItem[];
  };
  links: {
    self: string;
    fullSearch: string;
  };
}

export interface ProductListings {
  category: {
    id: string;
    name: string;
    imageUrl: string;
  };
  topSellers: Product[];
  newArrivals: Product[];
  flashSales: Product[];
  recommended: Product[];
}
