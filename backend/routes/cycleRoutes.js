const express = require('express');
const router = express.Router();
const { bookCycle, getCycles } = require('../controllers/cycleController');

router.post('/book', bookCycle);
router.get('/list', getCycles);

module.exports = router;
