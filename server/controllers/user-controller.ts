import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from '../models/user-model';
import { UserDTO } from '../dtos/user-dto';

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

    console.log('hello world');

    const token = jwt.sign({ email, id: existingUser._id }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ result: new UserDTO(existingUser), token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Something went wrong.', errorMessage: error.message });
    }
  }
};

export const signup = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, repeatPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User alredy existing.' });
    }

    if (password !== repeatPassword) {
      return res.status(400).json({ message: "Passwords dont't match." });
    }

    const hashedPassword = await bcryptjs.hash(password, salt);

    const fullName = `${firstName[0].toUpperCase() + firstName.slice(1)} ${
      lastName[0].toUpperCase() + lastName.slice(1)
    }`;

    const newUser = await User.create({
      email,
      password: hashedPassword,
      fullName,
    });

    const token = jwt.sign({ email: newUser.email, id: newUser._id }, secretKey, {
      expiresIn: '1h',
    });

    res.status(200).json({ result: new UserDTO(newUser), token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Something went wrong.', errorMessage: error.message });
    }
  }
};
