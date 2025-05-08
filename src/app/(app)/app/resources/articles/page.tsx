import React from "react";

import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fetchArticles } from "@/fetch/articles";
import BlogGrid from "../components/BlogGrid";

const page = async () => {
  const articles: any = await fetchArticles(50);

  return (
    <div className="w-full">
      <div className="">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">TECHNOLOGY</h2>
        </div>
        <BlogGrid articles={articles} />
      </div>
    </div>
  );
};

export default page;
