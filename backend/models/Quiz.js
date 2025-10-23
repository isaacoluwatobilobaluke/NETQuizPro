import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  title:      { type: String, required: true },
  subject:    { type: String, required: true },
  questions:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  owner:      { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  duration:   { type: Number, default: 30 }   // minutes
});

export default mongoose.model('Quiz', quizSchema);
