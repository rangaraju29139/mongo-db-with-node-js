const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const uri = "mongodb://localhost:27017";
const db = "cooker";
console.log("setting up the mongo db client");

const client = new MongoClient(uri, { useUnifiedTopology: true });

console.log("connecting to the database....");

client.connect(function (err) {
  assert.equal(null, err);
  console.log("connected Successfully..");

  const database = client.db(db);

  console.log("The database name is : " + database.databaseName);

  client.close();
});
