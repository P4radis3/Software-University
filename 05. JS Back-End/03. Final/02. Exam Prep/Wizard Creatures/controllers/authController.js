const router = require('express').Router();
const authServices = require('../services/authService');
// const { isGuest, isAuth } = require('../middlewares/authMiddleware');
const { SECRET } = require('../config');

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let token = await authServices.login({
            email,
            password
        });
        res.cookie(SECRET, token);
        res.redirect('/');
    } catch (error) {
        res.render('login', { error: error.message });
    }

});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, rePass } = req.body;

    if (password !== rePass) {
        res.locals.error = 'Passwords do not match!'
        return res.render('register')
    };

    try {

        await authServices.register({
            firstName, lastName, email, password
        });

        res.redirect('/');
    } catch (error) {
        res.render('register', { error: getErrorMessage(error) });
    }

});

function getErrorMessage(error) {
    if (error && error.errors) {
        let errorsArr = Object.keys(error.errors);

        if (errorsArr.length > 0) {
            return error.errors[errorsArr[0]];
        }
    }

    return error && error.message ? error.message : 'Unknown error';
}

router.get('/logout', (req, res) => {
    res.clearCookie(SECRET);
    res.redirect('/');
});


module.exports = router;