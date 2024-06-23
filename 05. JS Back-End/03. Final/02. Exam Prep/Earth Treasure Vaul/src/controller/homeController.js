const router = require('express').Router();

const stoneService = require('../services/stoneService');

router.get('/', async (req, res) => {
    let stone = await stoneService.findTheThree();
    stone = stone.slice(0, 3);
    res.render('home', { stone });
});

router.get('/search', async (req, res) => {
    let stoneText = req.query.search;

    let stone = await stoneService.search(stoneText);

    if (stone == undefined) {
        stone = await stoneService.getAll();
    }

    res.render('search', { stone })
})

module.exports = router;