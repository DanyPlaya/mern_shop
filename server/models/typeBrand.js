import mongoose from 'mongoose';

const typeBrandSchema = new mongoose.Schema({
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type',
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
  },
});
export const TypeBrand = mongoose.model('TypeBrand', typeBrandSchema);
