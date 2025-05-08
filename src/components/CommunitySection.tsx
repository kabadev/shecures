import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { MessageSquareText, Share2, ThumbsUp } from "lucide-react";
import { forumCategories } from "@/constant/Category";
import { fetchPosts } from "@/fetch/forum";
import Preview from "./Preview";
import { formatTimestamp } from "@/lib/help";

const CommunitySection = async () => {
  const posts = await fetchPosts(2, 4);
  const randomPosts = await fetchPosts(1, 3);
  return (
    <div className="px-4 md:px-10 py-12">
      <div className=" flex items-start justify-between">
        <div>
          <h1 className="text-xl md:text-3xl font-bold">Community Forum</h1>
          <p className="max-sm:text-sm">
            Connect with other women, share knowledge, and find support.
          </p>
        </div>

        <Button>
          <Link href={"/app/forum"}>View all</Link>
        </Button>
      </div>
      <div className="flex max-md:flex-col gap-4 mt-6 items-start ">
        <div className="md:w-[20%]  border dark:!border-0 bg-card max-md:border-none md:rounded-md p-4">
          <h2 className="font-bold my-2">Top Topics</h2>
          <div className=" flex-wrapc cflex-grow-0 gap-2 items-center  overflow-x-auto no-scrollbar max-md:hidden">
            {forumCategories.map((topic, i) => (
              <Link
                href={`/app/forum/topic/${topic.slug}`}
                key={i}
                className="border-b mb-2 md:px-2 max-md:min-w-[200px]  md:py-2 px-4 py-4 flex-grow  max-md:bg-accent  flex gap-4 hover:bg-accent hover:rounded-md transition-all duration-300 "
              >
                <span>{topic.icon}</span>
                <h2 className="text-sm">{topic.name}</h2>
              </Link>
            ))}
          </div>
        </div>

        <div className="md:w-[60%]  ">
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
                      src={post.image}
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

        <div className="md:w-[20%] w-full md:h-full h-[300px] relative   border bg-card dark:!border-0 rounded-md p-2">
          <Image
            src={"/bgver.jpg"}
            alt="banner ads"
            className="w-full h-full rounded-md object-cover"
            width={1000}
            height={1000}
          />
          <div className="absolute rounded-md p-4 flex flex-col justify-end top-0 bottom-0 left-0 right-0 bg-gradient-to-t m-2 from-black to-black/0">
            <h1 className="text-lg text-white font-bold">
              {" "}
              Connect With Other
            </h1>
            <Link href={"/app/forum"}>
              <Button>Join Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
