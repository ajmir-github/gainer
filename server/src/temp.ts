export enum OrderStatus {
  PREPARING = "PREPARING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export type WithId<Model> = { id: string } & Model;

export interface BaseCategory {
  name: string;
  sortOrder: number;
}

export type Category = WithId<BaseCategory>;

export interface BaseProduct {
  name: string;
  desription: string;
  stock: number;
  price: number;
  images: string[];
  sortOrder: number;
  featured: boolean;
  createdAt: Date;
  // ref
  category: string;
}

export type Product = WithId<BaseProduct>;

export interface BaseReview {
  comment: String;
  rating: number;
  createdAt: Date;
  // ref
  user: string;
  product: string;
}

export type Review = WithId<BaseReview>;

export interface BaseOrder {
  status: OrderStatus;
  address: string;
  total: number;
  createdAt: Date;
  // ref
  user: string;
}
export type Order = WithId<BaseOrder>;

export interface BaseOrderItem {
  quantity: number;
  price: number;
  createdAt: Date;
  // ref
  product: String;
  order: string;
}

export type OrderItem = WithId<BaseOrderItem>;

export enum Collections {
  Users = "Users",
  Categories = "Categories",
  Products = "Products",
  Reviews = "Reviews",
  Orders = "Orders",
  OrderItems = "OrderItems",
}

export const Categories = database.collection<BaseCategory>(
  Collections.Categories
);
export const Products = database.collection<BaseProduct>(Collections.Products);
export const Reviews = database.collection<BaseReview>(Collections.Reviews);
export const Orders = database.collection<BaseOrder>(Collections.Orders);
export const OrderItems = database.collection<BaseOrderItem>(
  Collections.OrderItems
);
