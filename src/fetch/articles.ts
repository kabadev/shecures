import { forumCategories } from "@/constant/Category";
import { nestComments } from "@/lib/help";
import { mongooseConnect } from "@/lib/mongoose";
import { Article } from "@/models/Article";
import { Comment, Post } from "@/models/Post";

export function getTopicNameBySlug(slug: string): string | null {
  const topic = forumCategories.find((topic) => topic.slug === slug);
  return topic ? topic.name : null;
}

export const fetchArticleById = async (id: string) => {
  try {
    mongooseConnect();
    const post = await Article.findById(id);
    const postData = JSON.parse(JSON.stringify(post));

    return postData;
  } catch (err) {
    console.log("Failed to fetch:", err);
  }
};

export const fetchArticleBySlug = async (slug: string) => {
  try {
    mongooseConnect();
    const article = await Article.findOne({ slug });
    const articleData = JSON.parse(JSON.stringify(article));
    return articleData;
  } catch (err) {
    console.error("Failed to fetch post with comments:", err);
    return null;
  }
};
export const fetchTopicArticle = async (topic: string) => {
  try {
    mongooseConnect();

    const dbposts = await Article.find({ topic });
    const posts = JSON.parse(JSON.stringify(dbposts));
    return posts;
  } catch (err) {
    console.error("Failed to fetch post with comments:", err);
    return null;
  }
};

export const fetchArticles = async (sortOption: number, limit: number = 10) => {
  try {
    mongooseConnect();

    let dbposts;

    if (sortOption === 1) {
      // Random order
      dbposts = await Article.aggregate([{ $sample: { size: limit } }]);
    } else if (sortOption === 2) {
      // Sort by likes in descending order
      dbposts = await Article.find().sort({ likes: -1 }).limit(limit);
    } else {
      // Default, if needed
      dbposts = await Article.find().limit(limit).sort({ createdAt: 1 });
    }

    const posts = JSON.parse(JSON.stringify(dbposts));
    return posts;
  } catch (err) {
    console.error("Failed to fetch posts:", err);
    return null;
  }
};

export const fetchTopTopicsWithPosts = async () => {
  try {
    await mongooseConnect();

    const topicsWithPosts = await Article.aggregate([
      {
        $group: {
          _id: "$topic",
          postCount: { $sum: 1 },
          posts: { $push: "$$ROOT" }, // Gather all posts for each topic
        },
      },
      { $sort: { postCount: -1 } }, // Sort by post count in descending order
      { $limit: 4 }, // Get only the top 4 topics
      {
        $project: {
          topic: "$_id",
          postCount: 1,
          posts: { $slice: ["$posts", 5] }, // Limit posts to top 5
        },
      },
    ]);

    return topicsWithPosts;
  } catch (err) {
    console.error("Failed to fetch top topics with posts:", err);
    return null;
  }
};
