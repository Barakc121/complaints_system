import express from "express";
import {
  CreatComplaint,
  getComplaints,
  adminLogin,
} from "../controllers/complaints.controller.js";

import requireAdminAuth from "../middlewares/requireAdminAuth.js";

const router = express.Router();

router.get("/", getComplaints);
router.get("/", requireAdminAuth, getComplaints);

router.post("/", CreatComplaint);

router.post("/login", adminLogin);

export default router;
