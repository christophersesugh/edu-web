import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide course title"],
    },
    content: {
      type: String,
      required: [true, "Please provide course content"],
      minlength: 100,
    },
    tag: {
      type: String,
      required: [true, "Please provide course tag"],
    },
    createdBy: {
      type: String,
      required: [true, "Please provide user id"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
