import CatPostCard from "@/components/CatPostCard";
import { fetchArticles, fetchTopTopicsWithPosts } from "@/fetch/articles";
import { fetchPosts, getTopicNameBySlug } from "@/fetch/forum";
import { formatTimestamp } from "@/lib/help";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = async () => {
  const latestPost = await fetchArticles(0, 5);
  const articles = await fetchArticles(1, 6);
  const topics = await fetchTopTopicsWithPosts();
  return (
    <div className="md:w-[25%] bg-card mt-6 ">
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
          <h2 className="text-md font-bold ">Latest</h2>
          <Link className="text-primary" href={`/app/resources/articles`}>
            View all
          </Link>
        </div>
        <div className="space-y-4">
          <Link
            href={`/app/resources/articles/${latestPost[0].slug}`}
            className="h-[250px] relative"
          >
            <Image
              src={latestPost[0].image}
              className="w-full h-full rounded-md object-cover"
              alt={latestPost[0].title}
              width={1000}
              height={1000}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-b from-transparent to-black z-10 rounded-md flex flex-col justify-end p-4 ">
              <h1 className="text-white text-sm font-bold">
                {latestPost[0].title.length > 100
                  ? latestPost[0].title.slice(0, 100) + "..."
                  : latestPost[0].title}
              </h1>
              <div className="flex gap-1 items-center">
                <Image
                  src={latestPost[0].user.imageUrl}
                  className="w-[35px] h-[35px] rounded-full border object-cover"
                  alt=" "
                  width={200}
                  height={200}
                />
                <span className="text-sm lowercase text-muted-foreground">
                  {latestPost[0].user.fullName}
                </span>
              </div>
            </div>
          </Link>
          <div className="space-y-4">
            {latestPost.slice(1, 4).map((article: any) => (
              <Link
                key={article._id}
                href={`/app/resources/articles/${article.slug}`}
                className="flex gap-4 h-[90px]"
              >
                <Image
                  src={article.image}
                  className="w-[30%] h-full rounded-sm object-cover"
                  alt=" "
                  width={1000}
                  height={1000}
                />
                <div>
                  <h1 className="text-sm">
                    {article.title.length > 40
                      ? article.title.slice(0, 40) + "..."
                      : article.title}
                  </h1>
                  <div className="flex gap-1 items-center">
                    <Image
                      src={article.user.imageUrl}
                      className="w-[30px] h-[30px] rounded-full border object-cover"
                      alt=" "
                      width={1000}
                      height={1000}
                    />
                    <span className="text-sm lowercase text-muted-foreground">
                      {article.user.fullName}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex text-sm items-center justify-between">
          <h2 className="text-md font-bold ">You Might Like</h2>
          <Link className="text-primary" href={`/app/resources/articles`}>
            View all
          </Link>
        </div>
        <div className="space-y-4">
          <Link
            href={`/app/resources/articles/${articles[0].slug}`}
            className="h-[250px] relative"
          >
            <Image
              src={articles[0].image}
              className="w-full h-full rounded-md object-cover"
              alt={articles[0].title}
              width={1000}
              height={1000}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-b from-transparent to-black z-10 rounded-md flex flex-col justify-end p-4 ">
              <h1 className="text-white text-sm font-bold">
                {articles[0].title.length > 100
                  ? articles[0].title.slice(0, 100) + "..."
                  : articles[0].title}
              </h1>
              <div className="flex gap-1 items-center">
                <Image
                  src={articles[0].user.imageUrl}
                  className="w-[35px] h-[35px] rounded-full border object-cover"
                  alt=" "
                  width={200}
                  height={200}
                />
                <span className="text-sm lowercase text-muted-foreground">
                  {articles[0].user.fullName}
                </span>
              </div>
            </div>
          </Link>
          <div className="space-y-4">
            {articles.slice(1, 4).map((article: any) => (
              <Link
                key={article._id}
                href={`/app/resources/articles/${article.slug}`}
                className="flex gap-4 h-[90px]"
              >
                <Image
                  src={article.image}
                  className="w-[30%] h-full rounded-sm object-cover"
                  alt=" "
                  width={1000}
                  height={1000}
                />
                <div>
                  <h1 className="text-sm">
                    {article.title.length > 40
                      ? article.title.slice(0, 40) + "..."
                      : article.title}
                  </h1>
                  <div className="flex gap-1 items-center">
                    <span className="text-xs text-muted-foreground">
                      {formatTimestamp(article.createdAt)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex text-sm items-center justify-between">
          <h2 className="text-md font-bold ">Top Topic</h2>
          <Link className="text-primary" href={`/app/resources/articles`}>
            View all
          </Link>
        </div>
        <div className="space-y-4 mt-6">
          {topics?.map((topic, i) => (
            <Link
              key={i}
              href={`/app/resources/topic/${topic.topic}`}
              className="flex items-center justify-between"
            >
              <h3 className="text-sm "> {getTopicNameBySlug(topic.topic)} </h3>
              <span>{topic.postCount}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
