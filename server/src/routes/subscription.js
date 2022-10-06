import express from "express";
import { subscribe } from "../controllers/subscription.js";
import auth from "../middleware/authebtication.js";

const router = express.Router();

router.get("/", subscribe);

export default router;
