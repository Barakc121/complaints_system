import express, { json } from "express";
// import userRoutes from './routes/user.routes.js';
import complaintsRouters from "./routes/complaints.routes.js";
import {  connectToMongo } from "./db/connect.js";

const PORT = process.env.PORT || 8080;

const app = express();
await connectToMongo()
app.use(express.json());


app.use('/api/complaints',complaintsRouters)


app.get('/',(req,res) =>{
  res.send("app is runing")
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
