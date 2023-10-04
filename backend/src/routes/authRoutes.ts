import express from "express";
import { signUp, logIn } from "../controllers/userController";

const authRouter = express.Router();
authRouter.post("/signup", signUp);
authRouter.post("/signin", logIn)

export default authRouter;
