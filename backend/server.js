import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import quizRoutes from './routes/quiz.js';   // NEW

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Mongo Atlas connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);  // NEW
