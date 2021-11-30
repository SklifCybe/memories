import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from '../models/user-model';

const secretKey = process.env.JWT_SECRET ?? 'bad-key :(';
const salt: number = Number(process.env.SALT) ?? 7;

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't find" });
    }

    const isPasswordCorrect = await bcryptjs.compare(password, existingUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ email, id: existingUser._id }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Something went wrong.', errorMessage: error.message });
    }
  }
};

export const signup = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User alredy existing.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords dont't match." });
    }

    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      fullName: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: newUser.email, id: newUser._id }, secretKey, { expiresIn: '1h' });
    
    res.status(200).json({ result: newUser, token });

  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Something went wrong.', errorMessage: error.message });
    }
  }
};
