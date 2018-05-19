var router = require('express').Router();

router.use('/food', require('./food'));
router.use('/users', require('./users'));
router.use('/authenticate', require('./auth'));

module.exports = router;