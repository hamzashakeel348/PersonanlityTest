const express = require('express');
const router = express.Router();
const personalityController = require('../controllers/personalityController');

// Route to handle personality test
router.post('/', personalityController.determinePersonalityType);

module.exports = router;
