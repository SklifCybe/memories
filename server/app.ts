import express from 'express';
import { config } from 'dotenv';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import { postRouter } from './routes/post-route';
import mongoose from 'mongoose';

config();
const PORT = process.env.PORT || 5050;
const MONGODB_URI = process.env.MONGODB_URI || '';
const app = express();

app.use(cors());
app.use(express.json());
app.use(json({ limit: '50mb' }));
app.use(urlencoded({ limit: '50mb', extended: true }));
app.use('/api/posts', postRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server runnig on port: ${PORT}`);
    }),
  )
  .catch((err: Error) => console.error(err.message));
