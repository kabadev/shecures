import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fetchArticles } from "@/fetch/articles";
import { getTopicNameBySlug } from "@/fetch/forum";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const articles = await fetchArticles(50);

  return (
    <div className="py-6 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Resources</h1>
        <Link className="" href={"/app/articles/new"}>
          <Button>Add New</Button>
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {articles.map((article: any) => (
          <Card
            key={article._id}
            className="group overflow-hidden  shadow-nones p-2"
          >
            <CardContent className="p-0 space-y-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-sm border-0 hover:bg-primary/90">
                    {getTopicNameBySlug(article.topic)}
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold leading-tight ">{article.title}</h3>
              </div>
              <div className="flex items-center justify-between pb-4">
                <Link className="" href={"/app/articles/new"}>
                  <Button variant={"default"}>Edit</Button>
                </Link>
                <Button variant={"outline"}>Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
