import { getMongoConnection } from "../db/connect";
const client = await getMongoConnection();
const complaintsCollection = client.db("complaints").collection("complaints");
