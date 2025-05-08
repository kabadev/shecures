"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { MessageSquareText, Share2, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const PostMeta = ({ post }: any) => {
  const { user } = useUser();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        setIsLiked(post.likes.includes(user?.id));
        setLikes(post.likes.length);
      } catch (error) {
        console.error("Error fetching like status:", error);
      }
    };
    fetchLikeStatus();
  }, [post, user]);

  const toggleLike = async () => {
    try {
      setIsLiked((prevIsLiked) => !prevIsLiked);
      setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
      await axios.put(`/api/forum/posts/${post._id}/like`, {
        userId: user?.id,
      });
      // Update the likes count based on the new status
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <div>
      <div className="my-6">
        <div className="flex mt-3 justify-between ">
          <div className="flex gap-2 items-center">
            <div
              onClick={toggleLike}
              className={`${
                isLiked ? "bg-primary text-white" : "bg-accent"
              }  flex items-center gap-2 py-1 px-4 rounded-full cursor-pointer`}
            >
              <ThumbsUp className="text-lg w-4" />
              <span>{likes}</span>
            </div>

            <div className="bg-accent flex items-center gap-2 py-1 px-4 rounded-full  ">
              <MessageSquareText className="text-lg w-4" />
              <span>104k</span>
            </div>
          </div>

          <div className="bg-accent  flex items-center gap-2 py-1 px-4 rounded-full cursor-pointer ">
            <Share2 className="text-lg w-4" />
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMeta;
