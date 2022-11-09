import express from "express";
import {User} from "../Controllers/userController.js";

const router = express.Router();

router.post("/user", User);

export default router;