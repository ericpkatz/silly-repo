var router = require('express').Router();

module.exports = router;

router.use('/groups', require('./groups'));
router.use('/users', require('./users'));
