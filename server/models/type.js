import mongoose from 'mongoose';

const typeSchema = new mongoose.Schema({
  devices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Device',
    },
  ],
  name: {
    type: String,
    unique: true,
    required: true,
  },
});
export const Type = mongoose.model('Type', typeSchema);
