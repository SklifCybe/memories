import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import { json, urlencoded } from 'body-parser';
import { postRouter } from './routes/post-route';
import { userRouter } from './routes/user-route';

config();
const PORT = process.env.PORT || 5050;
const MONGODB_URI = process.env.MONGODB_URI || '';
const app = express();

app.use(cors());
app.use(express.json());
app.use(json({ limit: '50mb' }));
app.use(urlencoded({ limit: '50mb', extended: true }));
app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server runnig on port: ${PORT}`);
    }),
  )
  .catch((err: Error) => console.error(err.message));
