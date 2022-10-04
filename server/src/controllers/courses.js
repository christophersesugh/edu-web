import { StatusCodes } from "http-status-codes";
import asyncWrapper from "../middleware/async-wrapper.js";
import Course from "../models/course.js";
import CustomApiError from "../errors/custom-api.js";

export const createCourse = asyncWrapper(async (req, res) => {
  req.body.createdBy = req.user.id;
  const course = await Course.create(req.body);
  res.status(StatusCodes.CREATED).json({ course });
});

export const updateCourse = asyncWrapper(async (req, res) => {
  res.send("update course");
});

export const deleteCourse = asyncWrapper(async (req, res) => {
  const {
    user,
    params: { id },
  } = req;

  const job = await Course.findOneAndRemove({ _id: id, createdBy: user.id });
  if (!job) {
    throw new CustomApiError(`No job with the id ${id}`, StatusCodes.NOT_FOUND);
  }
  res.status(StatusCodes.OK).json("Deleted successfully");
});

export const fetchCourses = asyncWrapper(async (req, res) => {
  const { query, tag } = req.query;
  let queryObject = {};
  if (query) {
    queryObject.title = { $regex: query, $options: "i" };
  }
  if (tag) {
    queryObject.tag = tag;
  }
  const courses = await Course.find(queryObject);
  res.status(StatusCodes.OK).json({ courses, nbHits: courses.length });
});

export const fetchCourse = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const course = await Course.findOne({ _id: id });
  if (!job) {
    throw new CustomApiError(`No job with the id ${id}`, StatusCodes.NOT_FOUND);
  }
  res.status(StatusCodes.OK).json({ course });
});
