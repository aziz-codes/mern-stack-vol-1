import express from "express";
import { fetchUsers, saveUser } from "../controllers/user.js";
const router = express.Router();
//get all users..

router.get("/", fetchUsers);
router.post("/", saveUser);

export default router;
