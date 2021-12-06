import { Schema, model } from 'mongoose';

import { UserType } from '../types/user-type';

const schema = new Schema<UserType>({
  email: { type: String, required: true },
  fullName: { type: String, required: true },
  password: { type: String, required: true },
  avatar: {type: String, default: ''}
});

export const User = model<UserType>('User', schema);
