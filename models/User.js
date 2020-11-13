const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  orders: [{ type: Types.ObjectId, ref: "Orders" }],
});

module.exports = model("User", schema);
