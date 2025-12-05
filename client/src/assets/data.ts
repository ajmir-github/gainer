interface Detail {
  id: string;
  title: string;
  body: string;
  keyPoints: string;
  sortOrder: number;
}

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  tags: string[];
  price: number;
  discount: number;
  special: boolean;
  stock: number;
  rating: number;
  sellings: number;
  detail: Detail[];
  manufacturer: string;
  images: string[];
  sortOrder: number;
}

export const Products = [];
