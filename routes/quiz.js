import express from 'express';
import Quiz from '../models/Quiz.js';
import Question from '../models/Question.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// CREATE QUIZ (admin only)
router.post('/', auth, async (req, res) => {
  try {
    const { title, subject, duration, questions } = req.body; // questions is array
    const qDocs = await Question.insertMany(questions);
    const quiz = await Quiz.create({
      title,
      subject,
      duration,
      questions: qDocs.map(q => q._id),
      owner: req.user.id
    });
    res.status(201).json(quiz);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

// GET ALL QUIZZES (for student dashboard)
router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate('questions');
    res.json(quizzes);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

export default router;



