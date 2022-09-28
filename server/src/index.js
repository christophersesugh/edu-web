import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean";
import rateLimit from "express-rate-limit";
import "express-async-errors";
import connectDB from "./database/index.js";
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
import test from "./routes/test.js";
// import jobs from "./routes/jobs.js";
// import authentication from "./routes/authentication.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.set("trust proxy", 1);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
);
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xss());

app.get("/", (req, res) => {
  res.send("<h1>Edu Web</h1>");
});

// app.use("/auth", authentication);
app.use("/test", test);

// custom middlewares
app.use(errorHandler);
app.use(notFound);

const start = async () => {
  await connectDB(MONGO_URI, () => {
    console.log(`Connected to DB`);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
};

start();
