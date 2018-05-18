var router = require('express').Router();

router.use('/food', require('./food'));
router.use('/users', require('./users'));

module.exports = router;