import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import CatPostCard from "./CatPostCard";
import { fetchArticles, fetchTopTopicsWithPosts } from "@/fetch/articles";
import { getTopicNameBySlug } from "@/fetch/forum";

const BlogSection = async () => {
  const latestPost = await fetchArticles(0, 5);
  const topTopicsWithPosts = await fetchTopTopicsWithPosts();
  return (
    <div className="px-2 md:px-10 py-12">
      <div className=" flex items-start justify-between">
        <div>
          <p className="text-primary">Learn from expert</p>
          <h1 className="text-3xl font-bold">Explore various topics</h1>
          <p>Connect with other women, share knowledge, and find support.</p>
        </div>

        <Button>
          <Link href={"/app/rescources/articles"}>View all</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6  ">
        {topTopicsWithPosts?.map((topic) => (
          <CatPostCard
            key={topic._id}
            topicPosts={topic.posts}
            cardTitle={getTopicNameBySlug(topic.topic)}
            url={`resources/topic/${topic.topic}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
