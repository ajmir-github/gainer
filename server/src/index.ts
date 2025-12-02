import cors from "cors";
import express from "express";
import { CorsOption, Port, ProjectDirectory } from "./constants";
import trpcApp from "./trpcApp";
export { type AppRouter } from "./trpcApp";

const app = express();

app.use(cors(CorsOption)); // cors for the whole application

app.use(express.urlencoded({ extended: true }));
app.use("/trpc", trpcApp);
app.use("/public", express.static(ProjectDirectory));
app.listen(Port, () => console.log(`Server is running on port: ${Port}`));
