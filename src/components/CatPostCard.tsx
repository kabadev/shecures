import { formatTimestamp } from "@/lib/help";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CatPostCard = ({ topicPosts, cardTitle, url }: any) => {
  return (
    <div className="p-4 shadow-xl w-full border dark:!border-0 bg-card ">
      <div className="mt-4 p-1 border-b flex items-center justify-between ">
        <h3 className="font-bold">{cardTitle}</h3>
        <Link href={url}>View all</Link>
      </div>

      <div className="space-y-4">
        <Link
          href={`/app/resources/articles/${topicPosts[0].slug}`}
          className="h-[250px] relative"
        >
          <Image
            src={topicPosts[0].image}
            className="w-full h-full rounded-md object-cover"
            alt={topicPosts[0].title}
            width={1000}
            height={1000}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-b from-transparent to-black z-10 rounded-md flex flex-col justify-end p-4 ">
            <h1 className="text-white text-lg font-bold">
              {topicPosts[0].title.length > 100
                ? topicPosts[0].title.slice(0, 100) + "..."
                : topicPosts[0].title}
            </h1>
            <div className="flex gap-1 items-center">
              <Image
                src={topicPosts[0].user.imageUrl}
                className="w-[35px] h-[35px] rounded-full border object-cover"
                alt=" "
                width={200}
                height={200}
              />
              <span className="text-sm lowercase text-muted-foreground">
                {topicPosts[0].user.fullName}
              </span>
            </div>
          </div>
        </Link>
        <div className="space-y-4">
          {topicPosts.slice(1, 4).map((article: any) => (
            <Link
              key={article._id}
              href={`/app/resources/articles/${article.slug}`}
              className="flex gap-4 h-[90px]"
            >
              <Image
                src={article.image}
                className="w-[25%] h-full rounded-sm object-cover"
                alt=" "
                width={1000}
                height={1000}
              />
              <div>
                <h1 className="text-sm">
                  {article.title.length > 100
                    ? article.title.slice(0, 100) + "..."
                    : article.title}
                </h1>
                <div className="flex gap-1 mt-2">
                  <span className="text-xs text-muted-foreground">
                    {formatTimestamp(article.createdAt)}
                  </span>
                  {/* <Image
                    src={article.user.imageUrl}
                    className="w-[30px] h-[30px] rounded-full border object-cover"
                    alt=" "
                    width={1000}
                    height={1000}
                  />
                  <span className="text-sm lowercase text-muted-foreground">
                    {article.user.fullName}
                  </span> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatPostCard;
