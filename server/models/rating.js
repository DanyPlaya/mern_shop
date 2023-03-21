import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
  rate: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  device: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Device',
  },
});
export const Rating = mongoose.model('Rating', ratingSchema);
