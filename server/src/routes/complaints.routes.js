import express from "express";
import {
  CreatComplaint,
  getComplaints,
} from "../controllers/complaints.controller.js";

const router = express.Router();
router.get("/", getComplaints);
router.post("/", CreatComplaint);


export default router