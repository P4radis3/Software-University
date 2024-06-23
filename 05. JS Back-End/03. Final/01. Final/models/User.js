const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [2, 'Username should be more than 2 characters.'],
        maxLength: [20, 'Username should be less than 20 characters.'],
    },
    email: {
        type: String,
        required: true,
        minLength: [10, 'Your email address must be at least 10 characters.'],
    },
    password: {
        type: String,
        required: true,
        minLength: [4, 'Your password must be at least 4 characters long.'],
    },
    createdRecipe: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Recipe',
        },
    ],
    recommendRecipe: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Recipe',
        },
    ],
});

userSchema.pre('save', function (next) {
    return bcrypt.hash(this.password, SALT_ROUNDS)
        .then((hash) => {
            this.password = hash;

            return next();
        });
});

userSchema.method('validatePassword', function (password) {
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;