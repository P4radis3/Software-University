const mongoose = require('mongoose');

async function dataBaseConfig() {
    try {
        await mongoose.connect('mongodb://localhost:27017/cooking-recipes');
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed', error);
    }
}

module.exports = dataBaseConfig;