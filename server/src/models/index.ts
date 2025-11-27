import { database } from "./config";

export {
	Category,
	Order,
	OrderItem,
	OrderStatus,
	Product,
	Review,
	User,
	UserRole,
} from "./type";

import type {
	BaseCategory,
	BaseOrder,
	BaseOrderItem,
	BaseProduct,
	BaseReview,
	BaseUser,
} from "./type";

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
	Collections.Categories,
);
export const Products = database.collection<BaseProduct>(Collections.Products);
export const Reviews = database.collection<BaseReview>(Collections.Reviews);
export const Orders = database.collection<BaseOrder>(Collections.Orders);
export const OrderItems = database.collection<BaseOrderItem>(
	Collections.OrderItems,
);
