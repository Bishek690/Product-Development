// backend/routes/dashboardRoutes.js

const express = require('express');
const router = express.Router();
const { getDashboardCounts } = require('../controller/dashboardController'); 

// Route to fetch dashboard counts
router.get('/dashboard-counts', getDashboardCounts);

module.exports = router;
