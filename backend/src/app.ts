import "dotenv/config";
import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import itemRouters from "./routes/itemRoutes";
import authRouters from "./routes/authRoutes";
import cors from "cors";

const app = express();

dotenv.config();
const db: any = process.env.dbURI;

mongoose
  .connect(db)
  .then(() => {
    app.listen(3000);
    console.log("connected to database");
  })
  .catch((error) => {
    console.error(error);
  });
app.use(express.json());
app.use(cors());
app.use(itemRouters);
app.use(authRouters);
