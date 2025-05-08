import React from "react";

import Image from "next/image";
import { MessageSquareText, Share2, ThumbsUp } from "lucide-react";
import { fetchPostBySlug, fetchPosts, fetchTopicPost } from "@/fetch/forum";

import Preview from "@/components/Preview";
import { formatTimestamp } from "@/lib/help";
import CommentSection from "@/components/Comment";
import Link from "next/link";
import PostMeta from "@/components/PostMeta";

export default async function page({
  params,
}: {
  params: { postslug: string };
}) {
  const post = await fetchPostBySlug(params.postslug);
  const posts = await fetchTopicPost(post.topic);
  const popularPosts = await fetchPosts(2, 10);
  return (
    <div>
      <div className="flex max-md:flex-col gap-4  pt-4">
        <div className="w-full md:w-[70%]">
          <div className="">
            {" "}
            <div className="mb-6">
              <h1 className="md:text-3xl text-lg font-bold mb-1">
                {post?.title}
              </h1>
              <div className="flex gap-2 ">
                <Image
                  src={post.user.imageUrl}
                  alt="banner ads"
                  className="w-[30px] h-[30px]  rounded-full object-cover"
                  width={200}
                  height={200}
                />
                <div className="flex gap-2 items-center">
                  <p className="font-bold text-sm">{post.user.fullName}</p>
                  <span className="text-muted-foreground text-sm ">
                    {formatTimestamp(post.createdAt)}
                    {/* August 20, 2024 07:45 PM. 8hrs ago */}
                  </span>
                </div>
              </div>
            </div>
            {post.image && (
              <div className=" max-md:h-[200px] border rounded-md">
                <Image
                  src={post.image}
                  alt="banner ads"
                  className="w-full h-full rounded-md object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            )}
            <div className="mt-6">
              <Preview value={post.body} />
            </div>
            <PostMeta post={post} />
          </div>
          <CommentSection comments={post.comments} postId={post._id} />
        </div>

        <div className="md:w-[30%] w-full">
          <div className="w-full h-[170px] rounded-md">
            <Image
              alt=""
              width={1000}
              height={1000}
              className="h-full w-full rounded-md object-cover"
              src={"/3.png"}
            />
          </div>
          <div className="mt-8">
            <div className="flex text-sm items-center justify-between">
              <h2 className="text-md font-bold ">Related Topic</h2>
              <Link
                className="text-primary"
                href={`/app/forum/topic/${post.topic}`}
              >
                View all
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {posts?.slice(0, 5).map((post, i) => (
                <Link
                  key={i}
                  className=""
                  href={`/app/forum/post/${post.slug}`}
                >
                  <div className="flex items-start gap-2 mb-3 ">
                    <Image
                      alt=""
                      width={1000}
                      height={1000}
                      className="h-[30px] w-[30px] rounded-full object-cover"
                      src={post.user.imageUrl}
                    />
                    <div className="">
                      <h1 className=" text-sm leading-4">
                        {post.title.length > 60
                          ? post.title.slice(0, 60) + "..."
                          : post.title}
                      </h1>
                      <span className="text-muted-foreground text-[12px]">
                        By - {post.user.fullName}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <div className="flex text-sm items-center justify-between">
              <h2 className="text-md font-bold ">Popular Question</h2>
              <Link className="text-primary" href={`/app/forum/posts`}>
                View all
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {popularPosts?.slice(0, 5).map((post: any, i: number) => (
                <Link
                  key={i}
                  className=""
                  href={`/app/forum/post/${post.slug}`}
                >
                  <div className="flex items-start gap-2 mb-3 ">
                    <Image
                      alt=""
                      width={1000}
                      height={1000}
                      className="h-[30px] w-[30px] rounded-full object-cover"
                      src={post.user.imageUrl}
                    />
                    <div className="">
                      <h1 className="text-sm leading-4">
                        {post.title.length > 60
                          ? post.title.slice(0, 60) + "..."
                          : post.title}
                      </h1>
                      <span className="text-muted-foreground text-[12px]">
                        By - {post.user.fullName}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
