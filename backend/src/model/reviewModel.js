// In your ReviewModel schema
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  company: { type: String, required: true },
  ratings: { type: Number, required: true }, 
  description: { type: String, required: true },
});

const ReviewModel = mongoose.model('Review', reviewSchema);

module.exports = ReviewModel;
