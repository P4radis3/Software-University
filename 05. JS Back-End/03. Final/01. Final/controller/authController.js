const router = require('express').Router();
const authService = require('../services/authService');
const { getErrorMessage } = require('../utils/errorUtil');
const { userIsLogged, isAuth } = require('../middlewares/authMiddleware');


router.get('/register', userIsLogged, async (req, res) => { res.render('auth/register'); });
router.post('/register', userIsLogged, async (req, res) => {
  const userData = req.body;
  try {

    const token = await authService.register(userData);
    res.cookie('auth', token);
    res.redirect('/');

  } catch (err) { res.render('auth/register', { ...userData, error: getErrorMessage(err) }); }
});

router.get('/login', userIsLogged, async (req, res) => { res.render('auth/login'); });
router.post('/login', userIsLogged, async (req, res) => {
  const loginData = req.body;
  try {
    const token = await authService.login(loginData);

    res.cookie('auth', token);
    res.redirect('/');
  } catch (err) { res.render('auth/login', { ...loginData, error: getErrorMessage(err) }); }
});

router.get('/logout', isAuth, (req, res) => { res.clearCookie('auth'); res.redirect('/'); });

module.exports = router;
