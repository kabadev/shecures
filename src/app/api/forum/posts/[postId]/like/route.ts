import { generateSlug } from "@/lib/help";
import { mongooseConnect } from "@/lib/mongoose";
import { Post } from "@/models/Post";
import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  {
    params,
  }: {
    params: { postId: string };
  }
) {
  try {
    mongooseConnect();
    const postId = params.postId;
    const { userId } = await request.json();

    const post = await Post.findById(postId);
    if (!post.likes.includes(userId)) {
      // Like the post
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $addToSet: { likes: userId } },
        { new: true }
      );
      return NextResponse.json({
        message: "The post has been liked",
        likes: updatedPost.likes,
      });
    } else {
      // Unlike the post
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $pull: { likes: userId } },
        { new: true }
      );
      return NextResponse.json({
        message: "The post has been disliked",
        likes: updatedPost.likes,
      });
    }
  } catch (err) {
    return NextResponse.json({ message: "Error updating likes", error: err });
  }
}
