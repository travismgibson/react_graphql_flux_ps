import express from 'express';
import mongoskin from 'mongoskin'
import db from 'mongodb'

import mongo from 'mongodb'
let client = mongo.MongoClient;

var mongoDB;

client.connect(process.env.MONGO_URL, function(err, db) {
  mongoDB = db;
  app.use('/graphql', GraphQLHTTP({
    schema: schema(mongoDB),
    graphiql: true
  }));
});


import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

let app = express();
console.log('Started on port 3000');


app.use(express.static('public'));

//let db = mongoskin.db(process.env.MONGO_URL, {safe:true});
//app.get('/', (req, res) => res.send('Get paid in a hurry!'));
//let db = mongoskin.db(process.env.MONGO_URL, {safe:true});

app.listen(3000, () => console.log('listening on 3000 port'));

// app.get("/data/links", (req, res) =>  {
//   mongoDB.collection('links').find({}).toArray(
//        function (err, results) {
//            if (err) throw err;
//             res.json(results)
//         });
// });


//console.log('Started on port 3000');
