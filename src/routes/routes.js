import { Router } from "express";
import { ProductsController } from "../controller/product-controller.js";

const routes = Router();

routes.get("/products/:id?", new ProductsController().get);
routes.post("/products", new ProductsController().post);
routes.put("/products/:id", new ProductsController().put);
routes.delete("/products/:id", new ProductsController().remove);

export { routes };
