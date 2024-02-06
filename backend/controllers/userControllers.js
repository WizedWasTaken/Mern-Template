import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";
import bcrypt from "bcrypt";

const User = mongoose.model("User", UserSchema);

/**
 * Get all users in DB
 * @date 2/3/2024 - 11:46:32 PM
 *
 * @async
 **/

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.send(err);
  }
};

/**
 * Upate an existing user
 * @date 2/3/2024 - 11:46:05 PM
 *
 * @async
 **/
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },

      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.send(err);
  }
};

/**
 * Delete a user by ID from the DB
 * @date 2/3/2024 - 11:58:00 PM
 *
 * @async
 * @param {string} userId - The ID of the user to delete
 */
export const deleteUserById = async (req, res) => {
  try {
    await User.deleteOne({
      _id: req.params.userId,
    });
    res.json("User deleted successfully!");
  } catch (err) {
    res.send(err);
  }
};
