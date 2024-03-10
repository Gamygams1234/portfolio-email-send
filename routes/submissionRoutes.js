// routes/submissionRoutes.js

const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');

// Handle form submission
router.post('/submit', submissionController.submitForm);

module.exports = router;