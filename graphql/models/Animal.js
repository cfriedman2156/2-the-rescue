import mongoose from 'mongoose';

const AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  age: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  type: {
    type: String,
    enum: ['horse', 'donkey/mule', 'pig', 'bird', 'sheep/goat', 'other'],
    required: true,
  },
});

export default mongoose.models.Animal || mongoose.model('Animal', AnimalSchema);
