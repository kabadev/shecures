import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { formatTimestamp } from "@/lib/help";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogGrid = ({ articles }: any) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article: any, index: number) => (
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
  );
};
export default BlogGrid;
