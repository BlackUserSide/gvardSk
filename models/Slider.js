const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    //id: { type: Types.ObjectId, required: true },
    image: { type: String, required: true, unique: true},
  },
  { collection: "slider" }
);

module.exports = model("Slider", schema);
