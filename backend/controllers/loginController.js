import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import jwt from 'jsonwebtoken';
const bcrypt = require('bcrypt');

const User = mongoose.model('User', UserSchema);

/**
 * Login with email
 * @date 2/4/2024 - 6:57:38 PM
 *
 * @async
 **/
export const loginWithEmail = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    const isValidPassword = await user.isValidPassword(req.body.password);
    // Hvis user findes i databasen og password matcher det hashede
    if (user != undefined && isValidPassword) {
      console.log('Password accepted');
      const token = generateToken(user);
      res.status(200).json({ user, token });
    } else {
      console.log('Incorrect password');
      res.status(401).json({ message: 'Incorrect password' });
    }
  } catch (err) {
    res.status(401).json({ message: 'An error happened' });
  }
};

/**
 * Generate JWT token
 * @date 2/6/2024 - 7:53:14 PM
 *
 * @param {*} user
 * @returns {*}
 */
function generateToken(user) {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '3h',
  });
}

/**
 * Function to create a new user
 * @date 2/6/2024 - 7:53:30 PM
 *
 * @async
 **/
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(401).json({ message: 'Username already exists' });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (err) {
    res.status(401).send(err);
  }
};
