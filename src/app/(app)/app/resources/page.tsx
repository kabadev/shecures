import React from "react";

import Link from "next/link";
import Image from "next/image";
import { fetchPosts, getTopicNameBySlug } from "@/fetch/forum";

import { Badge } from "@/components/ui/badge";
import CatPostCardMain from "@/components/CatPostCardMain";
import CatPostCard from "@/components/CatPostCard";
import BlogCard from "@/components/BlogCard";
import {
  fetchArticles,
  fetchTopicArticle,
  fetchTopTopicsWithPosts,
} from "@/fetch/articles";
import { formatTimestamp } from "@/lib/help";

const page = async () => {
  const latestPost = await fetchArticles(0, 5);
  const articles = await fetchArticles(1, 6);
  const topTopicsWithPosts = await fetchTopTopicsWithPosts();

  return (
    <div className="w-full">
      <div className="grid gap-4 md:grid-cols-2">
        <Link
          href={`/app/resources/articles/${latestPost[0].slug}`}
          className="relative group overflow-hidden rounded-lg"
        >
          <Image
            alt="Featured post"
            className="object-cover w-full h-full aspect-[4/3] group-hover:scale-105 transition-transform"
            height={400}
            src={latestPost[0].image}
            width={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
          <div className="absolute bottom-0 p-4 text-white">
            <Badge className="bg-primary hover:bg-primary/90 mb-2">
              {" "}
              {getTopicNameBySlug(articles[0].topic)}{" "}
            </Badge>
            <h2 className="text-xl font-bold mb-2">
              {latestPost[0].title.length > 100
                ? latestPost[0].title.slice(0, 100) + "..."
                : latestPost[0].title}
            </h2>
            <p className="text-sm lowercase opacity-90">
              by {latestPost[0].user.fullName} -{" "}
              <span className="text-xs">
                {formatTimestamp(latestPost[0].createdAt)}
              </span>
            </p>
          </div>
        </Link>
        <div className="grid gap-4">
          <Link
            href={`/app/resources/articles/${latestPost[2].slug}`}
            className="relative group overflow-hidden rounded-lg"
          >
            <Image
              alt="Featured post"
              className="object-cover w-full h-full aspect-[2/1] group-hover:scale-105 transition-transform"
              height={200}
              src={latestPost[2].image}
              width={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
            <div className="absolute bottom-0 p-4 text-white">
              <Badge className="bg-primary hover:bg-primary/90 mb-2">
                {" "}
                {getTopicNameBySlug(articles[0].topic)}{" "}
              </Badge>
              <h2 className="text-lg font-bold">
                {latestPost[0].title.length > 100
                  ? latestPost[0].title.slice(0, 100) + "..."
                  : latestPost[0].title}
              </h2>
              <span className="text-xs">
                {formatTimestamp(latestPost[0].createdAt)}
              </span>
            </div>
          </Link>
          <div className="grid grid-cols-2 gap-4">
            {latestPost.slice(3).map((article: any, i: any) => (
              <Link
                href={`/app/resources/articles/${article.slug}`}
                key={i}
                className="relative group overflow-hidden rounded-lg"
              >
                <Image
                  alt="Featured post"
                  className="object-cover w-full aspect-square group-hover:scale-105 transition-transform"
                  height={200}
                  src={article.image}
                  width={200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                <div className="absolute bottom-0 p-2 text-white">
                  <Badge className="bg-primary hover:bg-primary/90 mb-2 text-[8px]">
                    {getTopicNameBySlug(article.topic)}
                  </Badge>
                  <h2 className="text-sm font-bold">
                    {article.title.length > 70
                      ? article.title.slice(0, 70) + "..."
                      : article.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <CatPostCardMain
          articles={articles}
          cardTitle="Latest Articles"
          url="/app/resources/articles"
        />
        <div className="grid md:grid-cols-2 gap-4 mt-6  ">
          {topTopicsWithPosts?.map((topic) => (
            <CatPostCard
              key={topic._id}
              topicPosts={topic.posts}
              cardTitle={getTopicNameBySlug(topic.topic)}
              url={`/app/resources/topic/${topic.topic}`}
            />
          ))}
        </div>
        <BlogCard
          articles={articles}
          cartTitle="Post You Might Like"
          url="/app/resources/articles"
        />
      </div>
    </div>
  );
};

export default page;
