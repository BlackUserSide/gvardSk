const { Schema, model, Types } = require("mongoose");
const Product = require("./Product");

const schema = new Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    delMethod: { type: String, required: true },
    mailPost: { type: String },
    product: [{ type: String, ref: Product }],
  },
  { collection: "order" }
);

module.exports = model("Order", schema);
