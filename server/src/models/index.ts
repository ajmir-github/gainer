import {
  BaseUser,
  BaseCategory,
  BaseProduct,
  BaseReview,
  BaseOrder,
  BaseOrderItem,
} from "./type";
export {
  UserRole,
  OrderStatus,
  User,
  Category,
  Product,
  Review,
  Order,
  OrderItem,
} from "./type";
import { database } from "./config";

export enum Collections {
  Users = "Users",
  Categories = "Categories",
  Products = "Products",
  Reviews = "Reviews",
  Orders = "Orders",
  OrderItems = "OrderItems",
}

export const Users = database.collection<BaseUser>(Collections.Users);
export const Categories = database.collection<BaseCategory>(
  Collections.Categories
);
export const Products = database.collection<BaseProduct>(Collections.Products);
export const Reviews = database.collection<BaseReview>(Collections.Reviews);
export const Orders = database.collection<BaseOrder>(Collections.Orders);
export const OrderItems = database.collection<BaseOrderItem>(
  Collections.OrderItems
);
