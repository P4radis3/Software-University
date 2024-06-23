const router = require('express').Router();

const homeController = require('./controller/homeController');
const authController = require('./controller/authController');
const courseController = require('./controller/courseController');

router.use(homeController);
router.use('/auth', authController);
router.use('/course', courseController);
router.use('/*', (req, res) => {
    res.render('404');
})

module.exports = router;