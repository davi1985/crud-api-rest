import { Router } from "express";
import { ProductController } from "../controller/products.js";

const routes = Router();

routes.get("/products/:id?", new ProductController().get);
// routes.post("/products", new ProductController().post);
// routes.put("/products/:id", new ProductController().put);
// routes.delete("/products/:id", new ProductController().delete);

export { routes };
