import express from "express";
import path from "path";
import trpc, { type AppRouter } from "./trpc";
export default AppRouter; // For client

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/trpc", trpc);
app.use("/files", express.json());
app.use("/public", express.static(path.join(__dirname, "public")));
app.listen(4000);
