const { Router } = require('express');
const { countMiddleware } = require('./middlewares/counter');

const catalogHtml = `
<h1>Home Page</h1>
<p>Welcome to the home page!</p>
<a href="/">Home</a>
<a href="/catalog">Catalog</a>
`;

const catalogRouter = Router();
catalogRouter.get('/', countMiddleware, (req, res) => {
    res.send(catalogHtml);
});

catalogRouter.get('/:category/:productId', countMiddleware, (req, res) => {
    res.send(`Category: ${req.params.category}, Product ID: ${req.params.productId}`);
})

module.exports = { catalogRouter };