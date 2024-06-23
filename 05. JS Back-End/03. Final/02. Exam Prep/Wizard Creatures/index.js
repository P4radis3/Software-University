const express = require('express');

const mongoose = require('mongoose');
const routers = require('./router');

const app = express();

require('./config/hbsConfig')(app);
require('./config/expressConfig')(app);

app.use(routers);

mongoose.connect('mongodb://localhost:27017/course-book')
mongoose.connection.on('connected', () => console.log('Database connected successfully!'));
mongoose.connection.on('disconnected', () => console.log('Database disconnected!'));
mongoose.connection.on('error', (error) => console.log(error));

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
