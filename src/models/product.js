import Mongoose from "mongoose";

const schema = new Mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
});

export const ProductModel = Mongoose.model("products", schema);
