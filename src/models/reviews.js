const { Schema, model } = require("mongoose");

module.exports = model(
  "Review",
  new Schema(
    {
      title: { type: String, required: true },
      category_name: { type: String, required: true, unique: true },
      category_id: { type: Schema.Types.ObjectId, required: true },
      pros: {
        type: [String],
        default: [],
      },
      cons: {
        type: [String],
        default: [],
      },
      rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      abstract: {
        type: String,
        required: true,
        maxlength: 80,
      },
      body: {
        type: String,
        maxlength: 4000,
      },
      submitted_by: {
        type: Schema.Types.ObjectId,
      },
      submitted_by_profile: {
        type: String,
        maxlength: 40,
        default: "Esteemed Reviewer",
      },
      submitted_by_name: {
        type: String,
        default: "Anonymous",
      },
      views: { type: Number, min: 0, default: 0 },
    },
    { timestamps: true }
  )
);
