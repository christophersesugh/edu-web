import admin from "firebase-admin";
import serviceAccount from "../utils/config/firebase/eduweb.json" assert { type: "json" };
import { StatusCodes } from "http-status-codes";
import CustomApiError from "../errors/custom-api.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = async (req, res, next) => {
  const headers = req.headers.authorization;
  if (!headers || !headers.startsWith("Bearer")) {
    throw new CustomApiError("Unauthorized", StatusCodes.UNAUTHORIZED);
  }
  const token = headers.split(" ")[1];
  try {
    let user = await admin.auth().verifyIdToken(token);

    req.user = { id: user.user_id, name: user.name };
    next();
  } catch (error) {
    throw new CustomApiError("Unauthorized", StatusCodes.UNAUTHORIZED);
  }
};

export default auth;
