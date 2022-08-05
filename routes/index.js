const router= require('express').Router();
const cellarRoutes = require('./cellarRoutes')

router.use('/cellar', cellarRoutes)

module.exports = router;