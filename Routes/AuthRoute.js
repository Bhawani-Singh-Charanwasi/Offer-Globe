import express from "express";
import { AdvertiserUser, PublisherUser} from "../Controllers/authController.js";

const router = express.Router();

router.post("/publisher", PublisherUser);
router.post("/advertiser", AdvertiserUser);

export default router;