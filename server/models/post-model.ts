import { Schema, model } from 'mongoose';

import { Post } from '../types/post-type';

const schema = new Schema<Post>({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

export const PostMessage = model<Post>('PostMessage', schema);
