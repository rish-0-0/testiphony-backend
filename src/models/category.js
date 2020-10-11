const { Schema, model } = require('mongoose');

module.exports = model('Category', new Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
}, { timestamps: true, }));