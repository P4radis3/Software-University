const router = require('express').Router();
const stoneService = require('../services/stoneService');

const { isAuth } = require('../middlewares/authMiddleware');

router.get('/dashboard', async (req, res) => {
    let stone = await stoneService.getAll();
    res.render('stone/dashboard', { stone })
});

router.get('/add-stone', (req, res) => {
    res.render('stone/create')
});

router.post('/add-stone', isAuth, async (req, res) => {
    try {
        await stoneService.create({ ...req.body, owner: req.user._id });
        res.redirect('/stone/dashboard');
    } catch (error) {
        console.log(error);
        res.render('stone/create', { error: getErrorMessage(error) });
    }
});

function getErrorMessage(error) {
    let errorsArr = Object.keys(error.errors);

    if (errorsArr.length > 0) {
        return error.errors[errorsArr[0]];
    } else {
        return error.message
    }
}

router.get('/:stoneId/details', async (req, res) => {
    let stone = await stoneService.getOne(req.params.stoneId);
    let stoneData = await stone.toObject();

    let isOwner = stoneData.owner == req.user?._id;
    let like = stone.getLiked();
    let isLiked = req.user && like.some(c => c._id == req.user?._id);

    res.render('stone/details', { ...stoneData, isOwner, isLiked })
});

async function isOwner(req, res, next) {
    let stone = await stoneService.getOne(req.params.stoneId);

    if (stone.owner == req.user._id) {
        res.redirect(`/stone/${req.params.stoneId}details/`);
    } else {
        next();
    }
}

async function checkIsOwner(req, res, next) {
    let stone = await stoneService.getOne(req.params.stoneId);

    if (stone.owner == req.user._id) {
        next();
    } else {
        res.redirect(`/stone/${req.params.stoneId}/details`);
    }
};

router.get('/:stoneId/delete', checkIsOwner, async (req, res) => {
    try {
        await stoneService.delete(req.params.stoneId);

        res.redirect('/stone/dashboard');
    } catch (error) {
        res.render('stone/create', { error: getErrorMessage(error) });
    }
});

router.get('/:stoneId/edit', async (req, res) => {
    let stone = await stoneService.getOne(req.params.stoneId);
    res.render('stone/edit', { ...stone.toObject() })
});

router.post('/:stoneId/edit', checkIsOwner, async (req, res) => {
    try {
        await stoneService.updateOne(req.params.stoneId, req.body);

        res.redirect(`/stone/${req.params.stoneId}/details`);
    } catch {
        console.log(getErrorMessage(error));
        res.render('stone/create', { error: getErrorMessage(error) });
    }

});

router.get('/:stoneId/like', isOwner, async (req, res) => {
    let stone = await stoneService.getOne(req.params.stoneId);

    stone.liked.push(req.user._id);
    await stone.save();

    res.redirect(`/stone/${req.params.stoneId}/details`);
})

module.exports = router;