const mongoose = require('mongoose');
exports.getErrorMessage = (error) => {

    if (error instanceof mongoose.MongooseError) {
        const errorValues = Object.values(error.errors);
        if (errorValues.length > 0 && errorValues[0].properties && errorValues[0].properties.message) {
            return errorValues[0].properties.message;
        }
        return 'An unknown Mongoose error occurred.';
    } else if (error instanceof Error) {
        return error.message;
    }
    return 'An unknown error occurred.';
}