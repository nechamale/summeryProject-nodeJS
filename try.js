// const { MongoClient } = require("mongodb");
// const username = encodeURIComponent("AyalaF");
// const password = encodeURIComponent("a0556702870");
// const cluster = "cluster0";
// const authSource = true;
// const authMechanism = false;
// let uri =
//   `mongodb+srv://AyalaF:a0556702870@cluster0.dzeengw.mongodb.net/`;
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("NodeJs-project");
//     const ratings = database.collection("volunteers");
//     const cursor = ratings.find();
//     await cursor.forEach(doc => console.dir(doc));
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);\


import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {};

const client = await MongoClient.connect(
  'mongodb+srv://sw0504147596:1234@cluster.vtbpacr.mongodb.net/'
);
const coll = client.db('Nodejs-Project').collection('volunteer');
const cursor = coll.find(filter);
const result = await cursor.toArray();
await client.close();