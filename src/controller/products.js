import { ProductModel } from "../models/product.js";

export class ProductController {
  async get(req, res) {
    const { id } = req.params;

    const data = await ProductModel.find(id ? { _id: id } : null);

    return res.json(data);
  }

  async post(req, res) {
    const { name, brand, price } = req.body;

    const product = new ProductModel({
      name,
      brand,
      price,
    });

    product.save();

    return res.status(201).json(product);
  }
}
