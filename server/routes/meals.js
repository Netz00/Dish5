import express from "express";

import { getMeals } from "../controllers/meals.js";

const router = express.Router();

router.get("/", getMeals);

export default router;
