import express from "express";
import { fetchUsers } from "../controllers/user.js";
const router = express.Router();
//get all users..

router.get("/", fetchUsers);

export default router;
