import express from "express";
import asyncHandler from "express-async-handler";

import { addReview } from "../controllers/review.controller";

export const userRouter = express.Router();
userRouter.post("/review", asyncHandler(addReview));
