const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    discount: { type: String },
    category: { type: String, required: true },
    quantity: { type: String, required: true },
    image: { type: String, required: true },
  },
  { collection: "product" }
);

module.exports = model("Product", schema);
