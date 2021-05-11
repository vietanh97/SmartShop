import mongoose, { Schema } from 'mongoose'

const productsSchema = new mongoose.Schema({
name: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
})

const productsModel = mongoose.model('Products', productsSchema);

export default productsModel;