import mongoose from "mongoose";

const Course = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide course title"],
    },
    body: {
      type: String,
      required: [true, "Please provide course content"],
      minlength: 100,
    },
    tag: {
      type: String,
      required: [true, "Please provide course tag"],
    },
  },
  { timestamps: true }
);
