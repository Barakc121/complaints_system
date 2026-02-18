import dotenv from 'dotenv';
import { createComplaintService, getAllComplaintsService } from "../services/complaints.service.js";
import jwt from "jsonwebtoken";
dotenv.config()

export const getComplaints = async (req, res) => {
    try {
        const data = await getAllComplaintsService();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "error" });
    }
};

export const CreatComplaint = async (req, res) => {
    try {
        const { category, message } = req.body;
        if (!category || !message) {
            return res.status(400).json({ error: "undefind" });
        }

        const newComplaint = { category, message, createdAt: new Date() };
        await createComplaintService(newComplaint);
        res.status(201).json(newComplaint);
    } catch (err) {
        res.status(500).json({ error: "its not keeping" });
    }
};

export const adminLogin = async (req, res) => {
    const { password } = req.body;
    console.log(process.env.ADMIN_PASSWORD)
    if (password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.json({ message: "login goodluck", token });
    }

    res.status(401).json({ error: "the password not good" });
};