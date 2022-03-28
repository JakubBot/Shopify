import mongoose from 'mongoose';

const ideaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Idea = mongoose.models.Idea || mongoose.model('Idea', ideaSchema);
export default Idea;
