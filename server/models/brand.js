import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  devices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Device',
    },
  ],
});
export const Brand = mongoose.model('Brand', brandSchema);
