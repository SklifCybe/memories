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

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post: Post = req.body.post;

    if (!post) {
      throw new Error('No the post.');
    }

    await PostMessage.findByIdAndUpdate(id, { ...post }, { new: true });

    res.status(200).json({ message: 'Successfull update.' });
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).json({ message: err.message });
    }
  }
};
