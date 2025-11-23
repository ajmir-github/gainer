import express from "express";
import path from "path";
import trpc, { type AppRouter } from "./trpc";
import { CorsOption, Port } from "./utils/appConfig";
export default AppRouter; // For client
import cors from "cors";

const app = express();

app.use(cors(CorsOption));
app.use("/trpc", trpc);

app.use("/express", express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/express", express.json());
app.listen(Port, () => console.log(`Server is running on port: ${Port}`));
