const mongodb = require("mongodb");
require("dotenv").config();

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.LINK);
  database = client.db(process.env.NAME);
}

function getDb() {
  if (!database) {
    throw { message: "Database not connected!" };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
