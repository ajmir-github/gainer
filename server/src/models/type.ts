export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum OrderStatus {
  PREPARING = "PREPARING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export type WithId<Model> = { id: string } & Model;

export interface BaseUser {
  email: string;
  password: string;
  name: string;
  phone?: string;
  address?: string;
  role: UserRole;
  createdAt: Date;
}
export type User = WithId<BaseUser>;

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
