import mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  img: {
    type: String,
    required: true,
  },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Rating',
    },
  ],
  basketDevices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BasketDevice',
    },
  ],
  deviceInfos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DeviceInfo',
    },
  ],
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type',
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
  },
});
export const Device = mongoose.model('Device', deviceSchema);
