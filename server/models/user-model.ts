import { Schema, model } from 'mongoose';

import { UserType } from '../types/user-type';

const schema = new Schema<UserType>({
  id: { type: String, required: true },
  email: { type: String, required: true },
  fullname: String,
  password: String,
});

export const User = model<UserType>('User', schema);
