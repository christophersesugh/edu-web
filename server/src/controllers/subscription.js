import { StatusCodes } from "http-status-codes";
import CustomApiError from "../errors/custom-api.js";
import asyncWrapper from "../middleware/async-wrapper.js";
import { stripe } from "../libs/stripe.js";
// import { apiKey } from "../libs/stripe.js";

const apiKey = process.env.STRIPE_SECRET_KEY;

export const subscribe = asyncWrapper(async (req, res) => {
  const prices = await stripe.prices.list({
    apiKey:
      "sk_test_51IylicJLKPkKDoD3qnJG3OgjZlIMZ1uD3by9V0hXhp9PFt3G6TJH3ReYkFssyI2vgJbHkfY6H8n0IVDeldKJfVDw00Kyuo3zpI",
  });
  res.status(StatusCodes.OK).json(prices);
});
