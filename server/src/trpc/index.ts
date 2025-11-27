import {
	type CreateExpressContextOptions,
	createExpressMiddleware,
} from "@trpc/server/adapters/express";
import * as encryption from "../libs/encryption";
import * as Database from "../models";
import AuthRouter from "./AuthRouter";
import { router } from "./core";
import OrderItemRouter from "./OrderItemRouter";
import OrderRouter from "./OrderRouter";
import ProductRouter from "./ProductRouter";
import ReviewRouter from "./ReviewRouter";
import UserRouter from "./UserRouter";

const createContext = ({ req, res }: CreateExpressContextOptions) => {
	return {
		encryption,
		Database,
	};
}; // no context
export type Context = ReturnType<typeof createContext>;

export const appRouter = router({
	auth: AuthRouter,
	user: UserRouter,
	product: ProductRouter,
	review: ReviewRouter,
	order: OrderRouter,
	OrderItemRouter,
});

export const trpcApp = createExpressMiddleware({
	router: appRouter,
	createContext,
});
