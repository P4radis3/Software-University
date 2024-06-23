const mongoose = require('mongoose');

let stoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
    },
    category: {
        type: String,
        required: true,
        minLength: 3,
    },
    color: {
        type: String,
        required: true,
        minLength: 2,
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//i
    },
    formula: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
    },
    location: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 15,
    },
    description: {
        type: String,
        required: true,
        minLength: 10
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    liked: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],

}, { timestamps: true });

stoneSchema.method('getLiked', function () {
    return this.liked.map(x => x._id);
})

let Stone = mongoose.model('Stone', stoneSchema);

module.exports = Stone;