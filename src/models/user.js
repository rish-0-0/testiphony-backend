const { Schema, model } = require("mongoose");

module.exports = model(
  "User",
  new Schema({
    name: { type: String, required: true },
    profile: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    subscribed: { type: Boolean, default: false },
    reviews: { type: Number, min: 0, default: 0 },
    total_views: { type: Number, min: 0, default: 0 },
  })
);
