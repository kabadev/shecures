import mongoose, { model, models } from "mongoose";

const ArticleSchema = new mongoose.Schema(
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
    body: {
      type: String,
    },
    userId: {
      type: String,
      ref: "User",
      required: true,
    },
    likes: [{ type: String }],
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

export const Article =
  models.Article || mongoose.model("Article", ArticleSchema);
