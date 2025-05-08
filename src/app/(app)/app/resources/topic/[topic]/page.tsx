import React from "react";

import { fetchArticles, fetchTopicArticle } from "@/fetch/articles";
import BlogGrid from "../../components/BlogGrid";
import { getTopicNameBySlug } from "@/fetch/forum";

const page = async ({ params }: { params: { topic: string } }) => {
  const articles: any = await fetchTopicArticle(params.topic);

  return (
    <div className="w-full">
      <div className="">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            {" "}
            {getTopicNameBySlug(params.topic)}{" "}
          </h2>
        </div>
        {articles.length < 1 ? (
          <div className="flex flex-col justify-center items-center min-h-[400px]">
            <h1 className="text-2xl font-bold">No Items add yet</h1>
            <p>Please check back</p>
          </div>
        ) : (
          <BlogGrid articles={articles} />
        )}
      </div>
    </div>
  );
};

export default page;
