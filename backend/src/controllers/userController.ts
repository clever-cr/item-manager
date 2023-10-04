import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signUp = async (req: Request, res: Response) => {
  try {
    const { name, password, email } = req.body;
    const userExists = await User.findOne({ email });
    const hashedPassword = await bcrypt.hash(password, 10);
    if (userExists) {
      return res.status(403).json({
        message: "User already exists",
      });
    }
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const returnedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    const token = jwt.sign(returnedUser, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      message: "user created successfully",
      user: returnedUser,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

const logIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(401).json({
        message: "Invalid email",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, userExists.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }
    const returnedUser = {
      id: userExists.id,
      name: userExists.name,
      email: userExists.email,
    };

    const token = jwt.sign(returnedUser, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1d",
    });
    return res.status(200).json({
      message: "User loged in successfully",
      user: returnedUser,
      token,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export { signUp, logIn };
