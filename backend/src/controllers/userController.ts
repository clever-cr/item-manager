import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";

const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ where: email });
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

    return res.status(200).json({
      message: "user created successfully",
      user: returnedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

export { signUp };
