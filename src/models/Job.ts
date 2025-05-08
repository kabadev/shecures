import mongoose, { model, models } from "mongoose";
import { date } from "zod";

const JobSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
    },
    company: {
      type: String,
    },
    joblocation: {
      type: String,
    },
    body: {
      type: String,
    },
    deadline: {
      type: Date,
    },
    userId: {
      type: String,
    },

    image: { type: String },
    user: {
      fullName: { type: String },
      username: { type: String },
      imageUrl: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

export const Job = models.Job || mongoose.model("Job", JobSchema);
