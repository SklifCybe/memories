import { Request, Response } from 'express';

import { PostMessage } from '../models/post-schema';
import { Post } from '../types/post-type';

export const getPosts = async (_: Request, res: Response) => {
  try {
    const postsMessages = await PostMessage.find();

    res.json(postsMessages);
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).json({ message: err.message });
    }
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const post: Post = req.body;

    const newPost = await new PostMessage(post);

    await newPost.save();

    res.status(201).json(newPost);
  } catch (err) {
    if (err instanceof Error) {
      res.status(409).json({ message: err.message });
    }
  }
};
