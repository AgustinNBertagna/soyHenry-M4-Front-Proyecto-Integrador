import Express from "express";
import Cors from "cors";
import Morgan from "morgan";
import { ProductsRepository } from "./typeorm";

const app = Express();

app.use(Express.json());
app.use(Cors());
app.use(Morgan("dev"));

app.get("/", (_req, res) => res.status(200).json(ProductsRepository.find()));

export default app;
