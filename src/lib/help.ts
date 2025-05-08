export function generateSlug(title: string) {
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug;
}
interface Comment {
  user: any;
  _id: string;
  comment: string;
  postId: string;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
  replies: Comment[];
}

// Helper function to structure nested comments
export function nestComments(comments: Comment[]): Comment[] {
  const commentMap: { [key: string]: Comment } = {};
  const result: Comment[] = [];

  // Step 1: Initialize a map of all comments by their IDs
  comments.forEach((comment) => {
    commentMap[comment._id] = { ...comment, replies: [] };
  });

  // Step 2: Build the nested structure
  comments.forEach((comment) => {
    if (comment.parentId) {
      // If the comment has a parentId, add it to the parent's replies array
      const parentComment = commentMap[comment.parentId];
      if (parentComment) {
        parentComment.replies.push(commentMap[comment._id]);
      }
    } else {
      // If there's no parentId, it's a top-level comment
      result.push(commentMap[comment._id]);
    }
  });

  return result;
}

export function formatTimestamp(timestampStr: string): string {
  const timestamp = new Date(timestampStr);
  const now = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = Math.abs(now.getTime() - timestamp.getTime());

  // Calculate time difference in different units
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const monthsAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44));
  const yearsAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));

  // Choose the most appropriate unit
  let timeAgo: string;
  if (minutesAgo < 60) {
    timeAgo = `${minutesAgo} mins ago`;
  } else if (hoursAgo < 24) {
    timeAgo = `${hoursAgo} hrs ago`;
  } else if (daysAgo < 30) {
    timeAgo = `${daysAgo} days ago`;
  } else if (monthsAgo < 12) {
    timeAgo = `${monthsAgo} months ago`;
  } else {
    timeAgo = `${yearsAgo} years ago`;
  }

  // Format the timestamp to "Month Day, Year HH:MM AM/PM"
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedTime = timestamp.toLocaleString("en-US", options);

  // Combine the formatted time with the "X mins/hrs/days/months/years ago" part
  return `${formattedTime}. ${timeAgo}`;
}

export const formattedDate = async (timestampString: string) => {
  const date = new Date(timestampString);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};
