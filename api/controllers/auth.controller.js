import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

<<<<<<< HEAD
export const signup = async (req, res, next) => {
=======
export const signup = async (req, res) => {
>>>>>>> 5fc5a19843273cdd538bc9644c91b4da95d78e7a
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
<<<<<<< HEAD
    next(error);
=======
    res.status(500).json(error.message);
>>>>>>> 5fc5a19843273cdd538bc9644c91b4da95d78e7a
  }
};
