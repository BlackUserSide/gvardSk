const { Schema, model, Types } = require("mongoose");
const schema = new Schema({
  // email: { type: String, required: true, unique: true },
  // password: { type: String, require: true },
  // orders: [{ type: Types.ObjectId, ref: "Orders" }],
  id: { type: Types.ObjectId, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});
module.exports = model("TestProduct", schema);
