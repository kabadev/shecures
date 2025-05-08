import { forumCategories } from "@/constant/Category";
import { nestComments } from "@/lib/help";
import { mongooseConnect } from "@/lib/mongoose";
import { Comment, Post } from "@/models/Post";

export function getTopicNameBySlug(slug: string): string | null {
  const topic = forumCategories.find((topic) => topic.slug === slug);
  return topic ? topic.name : null;
}

export const fetchPostById = async (id: string) => {
  try {
    mongooseConnect();
    const post = await Post.findById(id);
    const postData = JSON.parse(JSON.stringify(post));

    return postData;
  } catch (err) {
    console.log("Failed to fetch:", err);
  }
};

export const fetchPostBySlugs = async (slug: string) => {
  try {
    mongooseConnect();
    const post = await Post.findOne({ slug: slug });
    const comments = await Post.find({ postId: post._id });
    const postData = JSON.parse(JSON.stringify(post));

    return postData;
  } catch (err) {
    console.log("Failed to fetch:", err);
  }
};

export const fetchPostBySlug = async (slug: string) => {
  try {
    mongooseConnect();

    const dbpost = await Post.findOne({ slug });
    const post = JSON.parse(JSON.stringify(dbpost));
    if (!post) throw new Error("Post not found");
    const dbcomments = await Comment.find({ postId: post._id }).sort({
      createdAt: -1,
    });
    const comments = JSON.parse(JSON.stringify(dbcomments));
    const nestedComments = nestComments(comments);

    const postData = {
      ...post,
      comments: comments,
    };

    return postData;
  } catch (err) {
    console.error("Failed to fetch post with comments:", err);
    return null;
  }
};
export const fetchTopicPost = async (topic: string) => {
  try {
    mongooseConnect();

    const dbposts = await Post.find({ topic });
    const posts = JSON.parse(JSON.stringify(dbposts));

    return dbposts;
  } catch (err) {
    console.error("Failed to fetch post with comments:", err);
    return null;
  }
};

export const fetchPosts = async (sortOption: number, limit: number = 10) => {
  try {
    mongooseConnect();

    let dbposts;

    if (sortOption === 1) {
      // Random order
      dbposts = await Post.aggregate([{ $sample: { size: limit } }]);
    } else if (sortOption === 2) {
      // Sort by likes in descending order
      dbposts = await Post.find().sort({ likes: -1 }).limit(limit);
    } else {
      // Default, if needed
      dbposts = await Post.find().limit(limit).sort({ createdAt: -1 });
    }

    const posts = JSON.parse(JSON.stringify(dbposts));
    return posts;
  } catch (err) {
    console.error("Failed to fetch posts:", err);
    return null;
  }
};
