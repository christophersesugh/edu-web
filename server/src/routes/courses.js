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
router.get("/:id", fetchCourse);
router.post("/", createCourse);
router.patch("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;
