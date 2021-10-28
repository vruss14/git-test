const router = require('express').Router();
const apiRoutes = require('../controllers/api');
const viewRoutes = require('../controllers/viewRoutes.js');
router.use('/', viewRoutes);
router.use('/api', apiRoutes);

module.exports = router;