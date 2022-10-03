import asyncWrapper from "../middleware/async-wrapper.js";

export const createCourse = asyncWrapper(async (req, res) => {
  res.send("create course");
});

export const updateCourse = asyncWrapper(async (req, res) => {
  res.send("update course");
});

export const deleteCourse = asyncWrapper(async (req, res) => {
  res.send("delete course");
});

export const fetchCourses = asyncWrapper(async (req, res) => {
  res.send("Courses");
});

export const fetchCourse = asyncWrapper(async (req, res) => {
  res.send("Course");
});
