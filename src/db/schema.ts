import mongoose from 'mongoose';
const affiliateSchema = new mongoose.Schema({
  name: String,
  email: String,
  referralCode: String
});
export const Affiliate = mongoose.model('Affiliate', affiliateSchema);