import express from 'express';
import { config } from 'dotenv';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import { mainRouter } from './routes';
import mongoose from 'mongoose';

config();
const PORT = process.env.PORT || 5050;
const MONGODB_URI = process.env.MONGODB_URI || '';
const app = express();

app.use(json({ limit: '30mb' }));
app.use(urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/api', mainRouter);

async function start() {
  try {
    await mongoose.connect(MONGODB_URI);

    app.listen(PORT, () => {
      console.log(`Server has runnig on ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
