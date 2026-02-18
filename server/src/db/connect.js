import { MongoClient } from "mongodb";

let client;

export async function connectToDB() {
  try {
    client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
    return client;
  } catch (err) {
    console.log(err.message);
    client = null;
  }
}

export async function getMongoConnection(){
    if(!client) await connectToDB();
    return client;
}