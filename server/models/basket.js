import mongoose from 'mongoose';

const basketSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  basketDevices: [{ type: Schema.Types.ObjectId, ref: 'BasketDevices' }],
});

export const Basket = mongoose.model('Basket', basketSchema);
