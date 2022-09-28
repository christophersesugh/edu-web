import mongoose from "mongoose";

const connectDB = (url, fn) => {
  return mongoose
    .connect(url)
    .then(fn())
    .catch((error) => {
      console.log("Error:", error);
    });
};

export default connectDB;
