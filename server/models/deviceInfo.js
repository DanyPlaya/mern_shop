import mongoose from 'mongoose';

const deviceInfoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  device: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Device',
  },
});
export const DeviceInfo = mongoose.model('DeviceInfo', deviceInfoSchema);
