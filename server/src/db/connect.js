import { MongoClient } from 'mongodb'

const MONGO_URL=process.env.MONGO_URL
const DB_NAME = "complaints"
let client;

export async function connectToMongo() {
  try {
    client = new MongoClient(MONGO_URL);
    // client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
        console.log("connected to mongodb");

    return client;
  } catch (err) {
    console.log(err.message);
    client = null;
  }
}

export async function getMongoConn(){
    if(!client) client=await connectToDB();
    return client.db(DB_NAME);
}