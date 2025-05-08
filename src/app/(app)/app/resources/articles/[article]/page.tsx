import React from "react";

import Link from "next/link";
import Image from "next/image";

import BlogCard from "@/components/BlogCard";
import { fetchArticleBySlug, fetchTopicArticle } from "@/fetch/articles";
import { formatTimestamp } from "@/lib/help";
import Preview from "@/components/Preview";
import { Card, CardContent } from "@/components/ui/card";

const page = async ({ params }: { params: { article: string } }) => {
  const article: any = await fetchArticleBySlug(params.article);
  const relatedArticles: any = await fetchTopicArticle(article.topic);
  return (
    <div className="w-full">
      <div className="">
        {" "}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-1">{article?.title}</h1>
          <div className="flex gap-2 ">
            <Image
              src={article.user.imageUrl}
              alt="banner ads"
              className="w-[30px] h-[30px]  rounded-full object-cover"
              width={200}
              height={200}
            />
            <div className="flex gap-2 items-center">
              <p className="font-bold text-sm">{article.user.fullName}</p>
              <span className="text-muted-foreground text-sm ">
                {formatTimestamp(article.createdAt)}
                {/* August 20, 2024 07:45 PM. 8hrs ago */}
              </span>
            </div>
          </div>
        </div>
        {article.image && (
          <div className=" max-md:h-[200px] border rounded-md">
            <Image
              src={article.image}
              alt="banner ads"
              className="w-full h-full rounded-md object-cover"
              width={1000}
              height={1000}
            />
          </div>
        )}
        <div className="mt-6">
          <Preview value={article.body} />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="font-bold mb-4 ">Related article</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {relatedArticles.slice(0, 6).map((article: any, index: number) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-none"
            >
              <CardContent className="p-0 space-y-3">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <Link href={`/app/resources/articles/${article.slug}`}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover   h-full w-full transition-transform group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bolds leading-tight hover:text-primary transition-colors">
                    <Link href={`/app/resources/articles/${article.slug}`}>
                      {article.title.length > 60
                        ? article.title.slice(0, 60) + "..."
                        : article.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {formatTimestamp(article.createdAt)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
