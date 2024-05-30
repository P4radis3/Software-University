const mongoose = require('mongoose');

const ContactInfoSchema = new mongoose.Schema({
    phone: String,
    email: String
});

const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    hobbies: [String],
    contactInfo: ContactInfoSchema
    
});

// personSchema.methods.sayHello = function () {
//     console.log(`Hello, my name is ${this.name}`);
// }

personSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});
const Person = mongoose.model('Person', personSchema);
module.exports = { Person };    