import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import mealRoutes from "./routes/meals.js";
import { install } from "./db/migrate.js";
import { seed } from "./db/seed.js";

import dotenv from "dotenv";
dotenv.config();

//check database conncetion
import DBstatus from "./db/checkConnection.cjs";

import pg from "./db/index.cjs";

DBstatus();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
// Connect to database

app.use("/meals", mealRoutes);

app.use("/install", install);
app.use("/seed", seed);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
