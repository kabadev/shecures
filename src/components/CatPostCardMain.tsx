import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { getTopicNameBySlug } from "@/fetch/forum";
import Preview from "./Preview";
import { formatTimestamp } from "@/lib/help";

export default function CatPostCardMain({ articles, cardTitle, url }: any) {
  return (
    <div className="p-4 shadow-lg w-full border dark:!border-0 bg-card ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{cardTitle}</h2>
        <Link
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
          href={url}
        >
          View all
        </Link>
      </div>
      <div className="flex gap-6 max-md:flex-col md:h-[470px]">
        <Card className="border-0 shadow-none md:w-[50%] ">
          <div className="space-y-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={articles[0].image}
                alt="MacBook displaying colorful screen"
                fill
                className="object-cover h-[40%]"
              />
            </div>
            <div className="space-y-2 h-[60%]">
              <Badge className="bg-primary hover:bg-primary/90">
                {" "}
                {getTopicNameBySlug(articles[0].topic)}{" "}
              </Badge>
              <h3 className="text-2xl font-bold">
                <Link
                  className="hover:text-primary transition-colors"
                  href={`/app/resources/articles/${articles[0].slug}`}
                >
                  {articles[0].title.length > 100
                    ? articles[0].title.slice(0, 100) + "..."
                    : articles[0].title}
                </Link>
              </h3>
              <div className="text-sm text-muted-foreground">
                by{" "}
                <Link className="text-blue-600 hover:text-blue-700" href="#">
                  {articles[0].user.fullName}
                </Link>{" "}
                -{" "}
                <span className="text-xs">
                  {formatTimestamp(articles[0].createdAt)}
                </span>
              </div>
              <Preview
                className="text-muted-foreground !text-xl"
                value={
                  articles[0].body.length > 150
                    ? articles[0].body.slice(0, 150) + "..."
                    : articles[0].body
                }
              />{" "}
            </div>
          </div>
        </Card>
        <div className="md:w-[50%] h-full flex justify-between flex-col gap-3 ">
          {articles.slice(1, 4).map((article: any, index: number) => (
            <div key={index} className="flex gap-4 items-start h-full">
              <Link
                href={`/app/resources/articles/${articles[0].slug}`}
                className="w-[40%] h-full"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={500}
                  height={500}
                  className="rounded object-cover h-full w-full"
                />
              </Link>
              <div className="flex-1 space-y-1  w-[70%]">
                <h4 className="font-medium leading-tight hover:text-primary transition-colors">
                  <Link href={`/app/resources/articles/${article.slug}`}>
                    {article.title.length > 70
                      ? article.title.slice(0, 70) + "..."
                      : article.title}
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground">
                  {" "}
                  {formatTimestamp(articles[0].createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
