import { generateSlug } from "@/lib/help";
import { mongooseConnect } from "@/lib/mongoose";
import { Comment, Post } from "@/models/Post";
import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    mongooseConnect();
    const { userId, comment, postId, parentId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        {
          message: "Missing 'UserId' field in the request body",
          success: false,
        },
        { status: 400 }
      );
    }
    const user = await (await clerkClient()).users.getUser(userId);

    const newComment = new Comment({
      userId: userId,
      comment: comment,
      postId: postId,
      parentId: parentId,
      user: {
        fullName: user.fullName,
        username: user.username,
        imageUrl: user.imageUrl,
      },
    });

    const saveData = await newComment.save();
    const response = NextResponse.json(
      {
        message: "New Comment Created successfully",
        success: true,
        data: saveData,
      },
      { status: 200 }
    );
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
