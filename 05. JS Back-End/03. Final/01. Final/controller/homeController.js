const router = require('express').Router();
const deviceService = require('../services/deviceService');

router.get('/', async (req, res) => {
    const devices = await deviceService.getLatest().lean();
    res.render('home', { devices });
});

router.get('/about', async (req, res) => { res.render('about'); });
router.get('/profile', async (req, res) => { res.render('profile'); });

module.exports = router;