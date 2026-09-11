export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  categoryId: string;
  category: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stock: number;
  brand: string;
  tags: string[];
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export type ProductSort =
"name"
"price-low"
"price-high"
"rating"
"newest";

export type ProductFilter =
  "all"
"in-stock"

export interface ProductQuery {
  category?: string;
  sort?: ProductSort;
  filter?: ProductFilter;
  search?: string;
}