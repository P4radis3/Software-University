function dataController(req, res) {

    res.json({
        message: req.message,
        value: 5,
        count: req.counter
    });

}

module.exports = { dataController };