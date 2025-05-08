import BlogGrid from "@/app/(app)/app/resources/components/BlogGrid";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ articles, cartTitle, url }: any) {
  return (
    <div className="p-6 mt-6 shadow-xl w-full border dark:!border-0 bg-card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{cartTitle}</h2>
        <Link
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
          href={url}
        >
          View all
        </Link>
      </div>
      <BlogGrid articles={articles} />
    </div>
  );
}
