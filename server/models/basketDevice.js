import mongoose from 'mongoose';

const basketDeviceSchema = new mongoose.Schema({
  basket: { type: mongoose.Schema.Types.ObjectId, ref: 'Basket' },
  device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device' },
});
export const BasketDevice = mongoose.model('BasketDevice', basketDeviceSchema);
