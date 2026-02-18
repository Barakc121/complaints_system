import jwt from "jsonwebtoken";
import { getMongoConn } from "../db/connect.js";
const db = await getMongoConn();
const complaintsCollection = db.collection("complaints");

export const getComplaints = async (req, res) => {
  const complaints = await complaintsCollection.find({}).toArray();
  res.json(complaints);
};

export const CreatComplaint = async (req, res) => {
  try {
    const { category, message } = req.body;
    if (!category || !message) {
      return res.status(400).json({ error: "category  and  message blabala" });
    }
    const newComplaint = { category, message, createdAt: new Date() };
    const result = await complaintsCollection.insertOne(newComplaint);
    newComplaint._id = result.insertedId;
    res.status(201).json(newComplaint);
  } catch (err) {
    console.log(err);
  }
};

export const adminLogin = async (req, res) => {
  const { password } = req.body;

  console.log("Password from Postman:", password);
  console.log("Password from ENV:", process.env.ADMIN_PASSWORD);

  if (password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, "my_secret_key_123", {
      expiresIn: "1h",
    });
    return res.json({ message: "login good", token });
  }

  res.status(401).json({ error: "the password not good" });
};
