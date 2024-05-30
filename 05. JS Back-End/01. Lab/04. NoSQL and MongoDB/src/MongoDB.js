const { MongoClient } = require('mongodb');

async function start() {
    const connectionString = 'mongodb://localhost:27017/';
    const client = new MongoClient(connectionString, {});

    await client.connect();

    const db = client.db('testdb');
    const collection = db.collection('people');
    const cursor = collection.find({});
    const results = await cursor.toArray();

    console.log(results)

}

start();

// node ./src/MongoDB.js