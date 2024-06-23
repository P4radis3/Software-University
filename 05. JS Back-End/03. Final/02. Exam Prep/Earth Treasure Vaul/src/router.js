const router = require('express').Router();

const homeController = require('./controller/homeController');
const authController = require('./controller/authController');
const animalsController = require('./controller/stoneController');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/stone', animalsController);
router.use('*', (req, res) => {
    res.render('404');
});

module.exports = router