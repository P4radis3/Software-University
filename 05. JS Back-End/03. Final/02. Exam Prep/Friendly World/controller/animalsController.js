const router = require('express').Router();
const animalService = require('../services/animalServices');

const { isAuth } = require('../middlewares/authMiddleware');
router.get('/dashboard', async (rqe, res) => {
    let animals = await animalSerice.getAll();
    res.render('animals/dashboard', { animals });
});

router.get('/create', (req, res) => {
    res.render('animals/create');
})

router.post('/create', isAuth, async (req, res) => {
    try {
        await animalService.create({ ...req.body, owner: req.user._id });
        res.redirect('/animals/dashboard');
    } catch (error) {
        // console.log(error);
        res.render('animals/create', { error: getErrorMessage(error) });
    }
});

function getErrorMessage(error) {
    let errorsArray = Object.keys(error.errors);
    if (errorsArray.length > 0) {
        return error.errors[errorsArray[0]];
    } else {
        return error.message;
    }
};

router.get('/:animalId/details', async (rqe, res) => {
    let animal = await animalService.getOne(req.params.animalId);
    let animalData = await animal.toObject();

    let isOwner = animalData.owner == req.user?._id;
    let donation = animal.getDonation();
    let isDonated = req.user && donation.some(c => c._id == req.user?._id);

    res.render('animals/details', { ...animalData, isOwner, isDonated });

});

async function isOwner(req, res, next) {
    let animal = await animalService.getOne(req.params.animalId);
    if (animal.owner == req.user._id) { res.redirect(`/animals/${req.params.animalId}/details/`); } else { next(); }
};

async function checkIsOwner(req, res, next) {
    let animal = await animalService.getOne(req.params.animalId);
    if (animal.owner == req.user._id) { res.redirect(`/animals/${req.params.animalId}/details/`); } else { next(); }
}

router.get('/:animalId/delete', checkIsOwner, async (req, res) => {
    try {
        await animalService.deleteOne(req.params.animalId);
        res.redirect('/animals/dashboard');
    } catch (error) {
        // console.log(error);
        res.render('animals/create', { error: getErrorMessage(error) });
    }
});

router.get('/:animalId/edit', checkIsOwner, async (req, res) => {
    let animal = await animalService.getOne(req.params.animalId);
    res.render('animals/edit', { ...animal.toObject() });
});

router.post('/:animalId/edit', checkIsOwner, async (req, res) => {
    try {
        await animalService.updateOne(req.params.animalId, req.body);
        res.redirect(`/animals/${req.params.animalId}/details`);
    } catch (error) {
        res.render('animals/edit', { error: getErrorMessage(error) });
    }
});

router.get('/:animalId/donation', isOwner, async (req, res) => {
    let animal = await animalService.getOne(req.params.animalId);
    animal.donation.push(req.user._id);
    await animal.save();

    res.redirect(`/animals/${req.params.animalId}/details`);
})


module.exports = router;