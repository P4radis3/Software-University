const mongoose = require('mongoose');
exports.getErrorMessage = (error) => {

    if (error instanceof mongoose.MongooseError) {
        return Object.values(error.errors).at(0).properties.message;
    } else if (error instanceof Error) {
        return error.message;
    }
}