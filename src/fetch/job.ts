import { mongooseConnect } from "@/lib/mongoose";
import { Job } from "@/models/Job";

export const fetchJobBySlug = async (slug: string) => {
  try {
    mongooseConnect();
    const article = await Job.findOne({ slug });
    const articleData = JSON.parse(JSON.stringify(article));
    return articleData;
  } catch (err) {
    console.error("Failed to fetch post with comments:", err);
    return null;
  }
};

export const fetchJobs = async (sortOption: number, limit: number = 10) => {
  try {
    mongooseConnect();

    let dbposts;

    if (sortOption === 1) {
      // Random order
      dbposts = await Job.aggregate([{ $sample: { size: limit } }]);
    } else if (sortOption === 2) {
      // Sort by likes in descending order
      dbposts = await Job.find().sort({ likes: -1 }).limit(limit);
    } else {
      // Default, if needed
      dbposts = await Job.find().limit(limit).sort({ createdAt: 1 });
    }

    const posts = JSON.parse(JSON.stringify(dbposts));
    return posts;
  } catch (err) {
    console.error("Failed to fetch posts:", err);
    return null;
  }
};
