import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'USER'],
    default: 'USER',
  },
  basket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Basket',
  },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Rating',
    },
  ],
});
export const User = mongoose.model('User', userSchema);
