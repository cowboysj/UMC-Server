import express from "express";
import asyncHandler from "express-async-handler";

import { reviewPreview } from "../controllers/store.controller";

export const storeRouter = express.Router({ mergeParams: true });

storeRouter.get("/reviews", asyncHandler(reviewPreview));
