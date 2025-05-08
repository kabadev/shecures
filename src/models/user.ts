import mongoose, { model, Schema, models } from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
  },
  location: {
    region: { type: String },
    district: { type: String },
  },
  profilePicture: { type: String },
  createdAt: { type: Date, default: Date.now },
  // Farmer-specific fields
  farmDetails: {
    farmName: { type: String },
    farmSize: { type: Number },
  },
  // Buyer-specific fields
  preferences: [{ type: String }], // Crop types the buyer prefers

  expertise: [{ type: String }], // Specialties of the expert
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
});

const User = models.User || mongoose.model("User", userSchema);
