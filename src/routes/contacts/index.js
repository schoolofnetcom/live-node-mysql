const express = require('express');
const router = express.Router();

router.get('/', require('./list'));
router.post('/', require('./create'));
router.delete('/:id', require('./remove'));

module.exports = router;