import { Request, Response } from 'express';

import { PostMessage } from '../models/post-model';
import { PostType } from '../types/post-type';
import { PostDTO } from '../dtos/post-dto';

export const getPosts = async (_: Request, res: Response) => {
  try {
    const postsMessages = await PostMessage.find();

    const posts = postsMessages.map((p) => new PostDTO(p));

    res.json({ result: posts, message: 'Get success.' });
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).json({ message: err.message });
    }
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const post: PostType = req.body;

    const newPost = new PostMessage({
      ...post,
      creator: req.userId,
      createdAt: new Date().toISOString(),
    });

    await newPost.save();

    res.status(201).json({ result: new PostDTO(newPost), message: 'Success create.' });
  } catch (err) {
    if (err instanceof Error) {
      res.status(409).json({ message: err.message });
    }
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post: PostType = req.body.post;

    if (!post) {
      throw new Error('No the post.');
    }

    const updatePost = await PostMessage.findByIdAndUpdate(id, { ...post }, { new: true });

    if (updatePost) {
      res.status(200).json({ result: new PostDTO(updatePost), message: 'Successfull update.' });
    } else {
      throw new Error('Something went wrong with the update of post.');
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).json({ message: err.message });
    }
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await PostMessage.findByIdAndDelete(id);

    res.status(200).json({ message: 'Success delete.' });
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).json({ message: err.message });
    }
  }
};

export const likePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const post = await PostMessage.findById(id);
    const userId = String(req.userId);

    if (!post) {
      throw new Error('No the post.');
    }

    const index = post.likes.findIndex((like) => like === userId);

    if (index === -1) {
      post.likes.push(userId);
    } else {
      post.likes = post.likes.filter((like) => like !== userId);
    }

    await post.save();

    res.status(200).json({ result: new PostDTO(post), message: 'Success like.' });
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).json({ message: err.message });
    }
  }
};
