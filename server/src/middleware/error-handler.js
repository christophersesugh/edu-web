import { StatusCodes } from "http-status-codes";
import CustomApiError from "../errors/custom-api.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
};
export default errorHandler;
