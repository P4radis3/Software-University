const router = require('express').Router();

const homeController = require('./controller/homeController');
const authController = require('./controller/authController');
const deviceController = require('./controller/deviceController');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/devices', deviceController);
router.use('*', (req, res) => { res.render('404'); })


module.exports = router;