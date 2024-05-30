module.exports = {
    createGet: (req, res) => { res.render('cast-create'); },
    createPost: async (req, res) => {
        res.end();
    }
};