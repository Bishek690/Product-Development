// backend/controllers/dashboardController.js

const blogModel = require('../model/blogModel');
const eventModel = require('../model/eventModel'); 
const reviewModel = require('../model/reviewModel');  
const contactModel = require('../model/contactModel');

// Controller function to get the dashboard counts
const getDashboardCounts = async (req, res) => {
  try {
    // Count documents for each model
    const eventCount = await eventModel.countDocuments();
    const blogCount = await blogModel.countDocuments();
    const inquiryCount = await contactModel.countDocuments();  
    const ratingCount = await reviewModel.countDocuments(); 

    // Respond with counts
    res.json({
      eventCount,
      blogCount,
      inquiryCount,
      ratingCount,
    });
  } catch (error) {
    console.error("Error fetching counts:", error);
    res.status(500).json({ message: 'Error fetching counts' });
  }
};

module.exports = {
  getDashboardCounts,
};
