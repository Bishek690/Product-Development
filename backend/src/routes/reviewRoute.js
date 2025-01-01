const express = require('express');
const reviewRouter = express.Router();
const controller = require('../controller/reviewController');

reviewRouter.post('/create-review', controller.createReview );
reviewRouter.get("/get-reviews", controller.getAllReviews);
reviewRouter.delete("/delete-review/:id", controller.deleteReview)
reviewRouter.get("/approved-reviews", controller.getApprovedReviews)

module.exports = reviewRouter;