import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";
import jwt from "jsonwebtoken";
const bcrypt = require("bcrypt");

const User = mongoose.model("User", UserSchema);

/**
 * Login with email
 * @date 2/4/2024 - 6:57:38 PM
 *
 * @async
 **/
export const loginWithEmail = async (req, res) => {
  // console.log("Login with email");
  console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    // console.log("User:" + user);
    if (
      user != undefined &&
      (await checkPassword(req.body.password, user.password))
    ) {
      console.log("Password accepted");
      const token = generateToken(user);
      res.status(200).json({ user, token });
    } else {
      res.status(401).json({ message: "Incorrect password" });
    }
  } catch (err) {
    res.send(err);
  }
};

function generateToken(user) {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });
}

async function checkPassword(plainTextPassword, hashedPassword) {
  console.log(
    `Checking password "${plainTextPassword}" against hash "${hashedPassword}"`
  );
  const match = await bcrypt.compare(plainTextPassword, hashedPassword);
  console.log("Match: " + match);
  return match;
}

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(401).json({ message: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(`Hashed password "${hashedPassword}" for user "${username}"`);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (err) {
    res.status(401).send(err);
  }
};
