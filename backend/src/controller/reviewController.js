const ReviewModel = require("../model/reviewModel");

// Create a new review
const createReview = async (req, res) => {
  try {
    const { name, position, company, ratings, description } = req.body;

    // Validate the required fields
    if (!name || !position || !company || !ratings || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create the review instance
    const review = new ReviewModel({
      name,
      position,
      company,
      ratings,
      description,
    });

    // Save the review to the database
    await review.save();

    res.status(201).json({ message: "Review posted successfully", review });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to post the review", error: error.message });
  }
};

// Get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find();

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: "No Reviews Found" });
    }

    res.status(200).json({ message: "All Reviews retrieved successfully", data: reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch Reviews", details: error.message });
  }
};

// Delete a review
const deleteReview = async (req, res) => {
  try {
    const id = req.params.id;

    const review = await ReviewModel.findById(id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    await ReviewModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete review", error: error.message });
  }
};

// Get all reviews (approved reviews are no longer needed)
const getApprovedReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find();
    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found" });
    }

    res.status(200).json({ message: "Reviews retrieved successfully", data: reviews });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch reviews", details: error.message });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  deleteReview,
  getApprovedReviews,
};
