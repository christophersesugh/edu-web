import express from "express";
import {
  createCourse,
  updateCourse,
  deleteCourse,
  fetchCourses,
  fetchCourse,
} from "../controllers/courses.js";
import auth from "../middleware/authebtication.js";

const router = express.Router();

router.get("/", auth, fetchCourses);
router.get("/:id", auth, fetchCourse);
router.post("/", auth, createCourse);
router.patch("/:id", auth, updateCourse);
router.delete("/:id", auth, deleteCourse);

export default router;
