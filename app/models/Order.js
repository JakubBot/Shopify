import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, required: true},
  products: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      id: { type: String },
    },
  ],
  shippingAddress: {
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;
