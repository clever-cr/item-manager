import express from "express";
import { signUp } from "../controllers/userController";

const authRouter = express.Router();
authRouter.post("/signup", signUp);

export default authRouter;
