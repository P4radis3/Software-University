const express = require('express');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { PORT } = require('./constants');

const expressConfig = require('./config/expressConfig');
const hbs = require('./config/hbsConfig');
const dataBase = require('./config/mongooseConfig');

const { authMiddleware } = require('./middlewares/authMiddleware');

async function start() {
    const app = express();
    await dataBase();

    app.use(cookieParser());
    app.use(authMiddleware);

    expressConfig(app);
    hbs(app);

    app.use(routes);
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

}

start();
