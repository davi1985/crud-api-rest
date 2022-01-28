import { ProductModel } from "../models/product.js";

export class ProductController {
  async get(req, res) {
    const products = await ProductModel.find();

    return res.json(products);
  }

  async post(req, res) {
    const { name, brand, price } = req.body;

    const product = new ProductModel({
      name,
      brand,
      price,
    });

    product.save();

    return res.json({ message: "Product saved" });
  }
}
