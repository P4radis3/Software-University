const router = require('express').Router();
const courseServices = require('../services/courseServices');
const { isAuth } = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {
    let getTop = await courseServices.getTopThree().lean();
    res.render('home', { getTop });
});

router.use('/profile',isAuth, async (req, res) => {
    const userId = req.user._id;
    let signUp = await courseServices.getMySignUp(userId);
    let created = await courseServices.getMyCreatedCourse(userId);

    res.render('profile', {signUp, created});
});

module.exports = router