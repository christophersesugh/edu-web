import express from "express";
import { testCode } from "../controllers/test.js";

const router = express.Router();

router.post("/", testCode);

export default router;
