import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MessageSquareText, Share2, ThumbsUp } from "lucide-react";
import { fetchPosts } from "@/fetch/forum";
import Preview from "@/components/Preview";
import { formatTimestamp } from "@/lib/help";

const page = async () => {
  const posts = await fetchPosts(0, 50);
  const popularPosts = await fetchPosts(2, 5);
  const randomPosts = await fetchPosts(1, 5);
  return (
    <div>
      <h1 className="text-2xl font-bold">Explore questions</h1>
      <p>Connect with other women, share knowledge, and find support.</p>
      <div className="mt-4  flex items-center justify-between md:px-6">
        <Link className="" href={"/app/forum/add-post"}>
          <Button>Ask question</Button>
        </Link>
        <div className=" w-[60%]">
          <div className=" flex items-center justify-between bg-accent rounded-md h-[40px] border overflow-hidden">
            <input
              className="w-full px-4 h-full outline-none border-none bg-accent"
              type="search"
            />
            <Button>Search</Button>
          </div>
        </div>
      </div>

      <div className="flex max-md:flex-col gap-4 mt-6 border-t pt-4">
        <div className="md:w-[70%]">
          {posts.map((post: any, i: any) => {
            if (post.image) {
              return (
                <Link
                  key={i}
                  href={`/app/forum/post/${post.slug}`}
                  className="min-h-[170px] bg-card dark:!border-0 mb-2 max-md:flex-col p-2 hover:bg-accent duration-300 border-b hover:rounded-md flex gap-2 max-md:gap-4"
                >
                  <div className="md:w-[80%]">
                    <div className="flex gap-2 ">
                      <Image
                        src={post.user.imageUrl}
                        alt="banner ads"
                        className="w-[30px] h-[30px]  rounded-full object-cover"
                        width={200}
                        height={200}
                      />
                      <div className="flex gap-2 items-center">
                        <p className="font-bold text-sm">
                          {post.user.fullName}
                        </p>
                        <span className="text-muted-foreground text-sm ">
                          {formatTimestamp(post.createdAt)}
                        </span>
                      </div>
                    </div>

                    <div className="my-2">
                      <h1 className="text-sm font-bold mb-1">
                        {post.title.length > 100
                          ? post.title.slice(0, 100) + "..."
                          : post.title}
                      </h1>
                      <Preview
                        value={
                          post?.body?.length > 200
                            ? post?.body.slice(0, 200) + "..."
                            : post?.body
                        }
                      />

                      <div className="flex mt-3 justify-between ">
                        <div className="flex gap-2 items-center">
                          <div className="bg-accent flex items-center gap-2 py-1 px-4 rounded-full ">
                            <ThumbsUp className="text-lg w-4" />
                            <span>{post?.likes?.length}</span>
                          </div>
                          <div className="bg-accent flex items-center gap-2 py-1 px-4 rounded-full ">
                            <MessageSquareText className="text-lg w-4" />
                            <span>{post?.comments?.length}</span>
                          </div>
                        </div>
                        <div className="bg-accent cursor-pointer flex items-center gap-2 py-1 px-4 rounded-full ">
                          <Share2 className="text-lg w-4" />
                          <span>Share</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-[20%] h-[120px] max-md:h-[200px] border rounded-md">
                    <Image
                      src={post?.image}
                      alt="banner ads"
                      className="w-full h-full rounded-md object-cover"
                      width={200}
                      height={200}
                    />
                  </div>
                </Link>
              );
            } else {
              return (
                <Link
                  key={i}
                  href={`/app/forum/post/${post.slug}`}
                  className="min-h-[170px] bg-card dark:!border-0 mb-2 max-md:flex-col p-2 hover:bg-accent duration-300 border-b rounded-md flex gap-2 max-md:gap-4"
                >
                  <div className="md:w-[100%]">
                    <div className="flex gap-2 ">
                      <Image
                        src={post.user.imageUrl}
                        alt="banner ads"
                        className="w-[30px] h-[30px]  rounded-full object-cover"
                        width={200}
                        height={200}
                      />
                      <div className="flex gap-2 items-center">
                        <p className="font-bold text-sm">
                          {post.user.fullName}
                        </p>
                        <span className="text-muted-foreground text-sm ">
                          {formatTimestamp(post.createdAt)}
                        </span>
                      </div>
                    </div>

                    <div className="my-2">
                      <h1 className="text-sm font-bold mb-1">
                        {post.title.length > 150
                          ? post.title.slice(0, 150) + "..."
                          : post.title}
                      </h1>
                      <Preview
                        value={
                          post?.body?.length > 200
                            ? post?.body.slice(0, 200) + "..."
                            : post?.body
                        }
                      />

                      <div className="flex mt-3 justify-between ">
                        <div className="flex gap-2 items-center">
                          <div className="bg-accent flex items-center gap-2 py-1 px-4 rounded-full ">
                            <ThumbsUp className="text-lg w-4" />
                            <span>{post?.likes?.length}</span>
                          </div>
                          <div className="bg-accent flex items-center gap-2 py-1 px-4 rounded-full ">
                            <MessageSquareText className="text-lg w-4" />
                            <span>{post?.comments?.length}</span>
                          </div>
                        </div>
                        <div className="bg-accent cursor-pointer flex items-center gap-2 py-1 px-4 rounded-full ">
                          <Share2 className="text-lg w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
        <div className="md:w-[30%]">
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
              <h2 className="text-md font-bold ">Popular Question</h2>
              <Link className="text-primary" href={`/app/forum/posts`}>
                View all
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {popularPosts?.map((post: any, i: number) => (
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
              <h2 className="text-md font-bold ">Questions you might like</h2>
              <Link className="text-primary" href={`/app/forum/posts`}>
                View all
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {randomPosts?.map((post: any, i: number) => (
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
        </div>
      </div>
    </div>
  );
};

export default page;
