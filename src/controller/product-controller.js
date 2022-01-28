import { ProductModel } from "../models/product.js";

export class ProductsController {
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

  async put(req, res) {
    const { id } = req.params;

    const product = await ProductModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    return res.json(product);
  }

  async remove(req, res) {
    const { id } = req.params;

    await ProductModel.findByIdAndRemove({ _id: id });

    return res.status(204).json();
  }
}
