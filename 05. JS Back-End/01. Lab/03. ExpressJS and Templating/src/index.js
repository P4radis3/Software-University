const path = require('path');
const express = require('express');
const app = express();

const { catalogRouter } = require('./catalog');
const { countMiddleware } = require('./middlewares/counter');
const { dataController } = require('./middlewares/data');


const homeHtml = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/static/style.css">
    <title>Document</title>
</head>
<body>
<h1>Home Page</h1>
<p>Welcome to the home page!</p>
<a href="/">Home</a>
<a href="/catalog">Catalog</a>

</body>
</html>
`;

app.use('/static', express.static('static'));
app.use(countMiddleware);

app.get('/', (req, res) => {
    res.send(homeHtml);
});

app.use('/catalog', countMiddleware, catalogRouter)
app.get('/data', countMiddleware, dataController);

app.get('*', (req, res) => {
    res.status(404).send(`Page not found`);
});

app.listen(3000, () => {
    console.log('App is running on port 3000');
});