import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  prompt:   { type: String, required: true },
  options:  [{ type: String, required: true }],   // array of 4 strings
  correct:  { type: Number, required: true },     // index 0-3
  subject:  { type: String, required: true }      // e.g "Mathematics"
});

export default mongoose.model('Question', questionSchema);
