import dotenv from "dotenv";
import cors from 'cors'
dotenv.config();
import express, { json } from "express";
// import userRoutes from './routes/user.routes.js';
import complaintsRouters from "./routes/complaints.routes.js";
import {  connectToMongo } from "./db/connect.js";

const PORT = process.env.PORT || 5000;

const app = express();
await connectToMongo()
app.use(express.json());


app.use(cors())
app.use('/api/complaints',complaintsRouters)


app.get('/',(req,res) =>{
  res.send("app is runing")
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

