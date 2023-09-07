import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import itemRouters from "./routes/itemRoutes";
const app = express();

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
app.use(itemRouters);
