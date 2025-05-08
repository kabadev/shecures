import mongoose, { model, models } from "mongoose";

const postSchema = new mongoose.Schema(
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

export const Post = models.Post || mongoose.model("Post", postSchema);

const commentSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    userId: { type: String, required: true },
    user: {
      fullName: { type: String },
      username: { type: String },
      imageUrl: { type: String },
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
