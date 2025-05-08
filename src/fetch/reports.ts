import { mongooseConnect } from "@/lib/mongoose";
import { Incident } from "@/models/Report";

export const fetchIncidentById = async (id: string) => {
  try {
    mongooseConnect();
    const post = await Incident.findById(id);
    const postData = JSON.parse(JSON.stringify(post));

    return postData;
  } catch (err) {
    console.log("Failed to fetch:", err);
  }
};

export const fetchAIncidents = async (
  sortOption: number,
  limit: number = 10
) => {
  try {
    mongooseConnect();

    let dbposts;

    if (sortOption === 1) {
      // Random order
      dbposts = await Incident.aggregate([{ $sample: { size: limit } }]);
    } else if (sortOption === 2) {
      // Sort by likes in descending order
      dbposts = await Incident.find().sort({ likes: -1 }).limit(limit);
    } else {
      // Default, if needed
      dbposts = await Incident.find().limit(limit).sort({ createdAt: 1 });
    }

    const posts = JSON.parse(JSON.stringify(dbposts));
    return posts;
  } catch (err) {
    console.error("Failed to fetch posts:", err);
    return null;
  }
};
