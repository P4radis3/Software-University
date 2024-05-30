const mongoose = require('mongoose');

const { Person } = require('./models/Person');

async function start() {
    const connectionString = 'mongodb://localhost:27017/testdb';
    await mongoose.connect(connectionString, {});

    // const myPerson = new Person({
    //     name: 'John Doe',
    //     age: 37,
    //     hobbies: [],
    //     contacts: {
    //         phone: '+1-555-5555',
    //         email: 'john@abv.bg'
    //     }
    // });

    // await myPerson.save();

    console.log('Connected')

    const myPerson = await Person.find({name: 'John Doe'});
    console.log(myPerson.sayHello());   
    mongoose.disconnect();

}

start();

// node ./src/Mongoose.js