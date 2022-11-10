import express from "express";
import enquiry from "../Controllers/enquiryController.js";
import User from "../Controllers/userController.js";
import Contact from "../Controllers/ContactController.js";

const router = express.Router();

router.post("/user", User);
router.post("/enquiry", enquiry );
router.post("/contact", Contact);

export default router;