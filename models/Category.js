const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
  },
  { collection: "category" }
);

module.exports = model("Category", schema);
