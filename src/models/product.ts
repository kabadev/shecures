import mongoose, { model, Schema, models } from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Farmer or Vendor
  images: [{ type: String }], // Array of image URLs
  location: {
    region: { type: String },
    district: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ["Available", "Sold"], default: "Available" },
});

const Product = models.Products || mongoose.model("Product", productSchema);
