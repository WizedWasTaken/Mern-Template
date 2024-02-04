import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";
// import bcrypt from "bcrypt";

const bcrypt = require("bcrypt");

const User = mongoose.model("User", UserSchema);

/**
 * Login With Username
 * @date 2/4/2024 - 2:26:41 PM
 *
 * @async
 **/
export const loginWithUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    //   User can be null if username isn't in DB.
    if (
      user != undefined &&
      (await checkPassword(req.body.password, user.password))
    ) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Incorrect password" });
    }
  } catch (err) {
    res.send(err);
  }
};

/**
 * Login With Email
 * @date 2/4/2024 - 2:26:41 PM
 *
 * @async
 **/
export const loginWithEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    //   User can be null if username isn't in DB.
    if (
      user != undefined &&
      (await checkPassword(req.body.password, user.password))
    ) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: "Incorrect password" });
    }
  } catch (err) {
    res.send(err);
  }
};

/**
 * Runs a check to see if the plain text password matches the hashed password
 * @date 2/4/2024 - 2:29:02 PM
 *
 * @async
 * @param {*} plainTextPassword
 * @param {*} hashedPassword
 * @returns {unknown}
 */
async function checkPassword(plainTextPassword, hashedPassword) {
  const match = await bcrypt.compare(plainTextPassword, hashedPassword);
  if (match) {
    return true;
  } else {
    return false;
  }
}
