import { generateSlug } from "@/lib/help";
import { mongooseConnect } from "@/lib/mongoose";
import { Article } from "@/models/Article";
import { Post } from "@/models/Post";
import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    mongooseConnect();
    const { userId, topic, title, body, image } = await request.json();

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

    const newPost = new Article({
      userId: userId,
      topic: topic,
      title: title,
      slug: generateSlug(title),
      body: body,
      image: image,
      user: {
        fullName: user.fullName,
        username: user.username,
        imageUrl: user.imageUrl,
      },
    });

    const saveData = await newPost.save();
    const response = NextResponse.json(
      {
        message: "New Post Created successfully",
        success: true,
        data: saveData.slug,
      },
      { status: 200 }
    );
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
