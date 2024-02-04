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
  try {
    const user = await User.findOne({ email: req.body.email });
    if (
      user != undefined &&
      (await checkPassword(req.body.password, user.password))
    ) {
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
