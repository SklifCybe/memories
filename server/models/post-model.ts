import { Schema, model } from 'mongoose';

import { PostType } from '../types/post-type';

const schema = new Schema<PostType>({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

export const PostMessage = model<PostType>('PostMessage', schema);
