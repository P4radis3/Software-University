const router = require('express').Router();

const homeController = require('./controller/homeController');
const authController = require('./controller/authController');
const recipeController = require('./controller/recipeController');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/recipes', recipeController);
router.use('*', (req, res) => {
    res.render('404');
})

module.exports = router;