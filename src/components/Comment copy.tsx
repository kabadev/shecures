"use client";
/* eslint-disable react/prop-types */
import { useState } from "react";

import CommentForm from "./CommentForm";
import {
  Ellipsis,
  FilePenLine,
  MessageSquareWarning,
  Reply,
  Trash,
  Undo,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { formatTimestamp } from "@/lib/help";

const Comment = ({
  comment,
  postComments,
  postId,
  expandedReplyId,
  setExpandedReplyId,
}: any) => {
  const { user } = useUser();
  const [replyContent, setReplyContent] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);
  const [commentsReplies, setPostComments] = useState(postComments);
  // Check if the reply form is open for the current comment
  const isReplyFormOpen = expandedReplyId === comment._id;

  // Toggle the reply form visibility
  const toggleReplyForm = () => {
    setExpandedReplyId(isReplyFormOpen ? null : comment._id);
  };

  // Optimistic update for adding a reply to a specific comment (including nested replies)
  const addReplyOptimistically = (parentId: any, newReply: any) => {
    const updateComments = (comments: any) => {
      return comments.map((comment: any) => {
        if (comment._id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply],
          };
        }
        // Recursively search for the parent in nested replies
        if (comment.replies) {
          return {
            ...comment,
            replies: updateComments(comment.replies),
          };
        }
        return comment;
      });
    };

    // Update the state with the modified comments array
    setPostComments(updateComments(postComments));
  };

  const handleReplySubmit = () => {
    if (replyContent) {
      const tempReply = {
        _id: Date.now().toString(),
        postId: postId,
        parentId: comment._id,
        user: {
          fullName: user?.fullName,
          image: user?.imageUrl,
        },
        comment: replyContent,
        createdAt: new Date().toISOString(),
      };

      addReplyOptimistically(comment._id, tempReply);
      setReplyContent("");
      setExpandedReplyId(null); // Close the reply form after submission
      return tempReply;
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setEditedContent(comment.content);
  };

  const handleEditSubmit = () => {
    if (editedContent) {
      setEditMode(false);
      return {
        postId: postId,
        type: "edit",
        parentId: comment._id,
        comment: editedContent,
      };
    }
  };
  const onDeleteComment = (id: string) => {
    if (id) {
      return {
        id: id,
      };
    }
  };

  return (
    <div className="p-2">
      {!editMode ? (
        <div className="flex gap-2">
          <Image
            src={user?.imageUrl || ""}
            alt="banner ads"
            className="w-[30px] h-[30px]  rounded-full object-cover"
            width={200}
            height={200}
          />
          <div>
            <p className="">{comment.comment}</p>
            <p className="text-xs text-gray-500">
              {formatTimestamp(comment.createdAt)}
            </p>
          </div>
        </div>
      ) : (
        <CommentForm
          className=""
          TextareaStyle=""
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          onSubmit={handleEditSubmit}
          placeholder="Edit your comment..."
        />
      )}

      <div className="flex space-x-2 mt-2">
        <div
          onClick={toggleReplyForm}
          className="flex items-center  text-slate-400 hover:underline cursor-pointer"
        >
          {/* <Undo className="text-sm" /> */}
          <Reply className="text-sm" />
          <span className="text-sm">
            {/* {isReplyFormOpen ? "Cancel" : "Reply"} */}
          </span>
        </div>
        {editMode ? (
          <span
            className="cursor-pointer text-primary"
            onClick={toggleEditMode}
          >
            Cancel
          </span>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Ellipsis className="text-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Action</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={toggleEditMode}>
                <FilePenLine />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDeleteComment(comment.id)}>
                <Trash />
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquareWarning /> Report
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {isReplyFormOpen && (
        <div className="mt-4">
          <CommentForm
            className=""
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            onSubmit={handleReplySubmit}
            // onSetComments={}
            placeholder="Add a reply..."
            TextareaStyle=""
          />
        </div>
      )}

      {/* Render replies */}
      <div className="mt-4 pl-4 border-l-2 border-gray-200">
        {commentsReplies?.map((reply: any) => (
          <Comment
            postComments={commentsReplies}
            key={reply._id}
            comment={reply}
            postId={postId}
            expandedReplyId={expandedReplyId} // Pass the expanded reply ID down to child comments
            setExpandedReplyId={setExpandedReplyId} // Share the function to set expanded reply ID
          />
        ))}
      </div>
    </div>
  );
};

const CommentSection = ({ comments, postId }: any) => {
  const { user } = useUser();
  const [postComments, setPostComments] = useState(comments); // Track the ID of the currently expanded reply form
  const [expandedReplyId, setExpandedReplyId] = useState<string | null>(null); // Track the ID of the currently expanded reply form
  const [newCommentContent, setNewCommentContent] = useState("");

  const addCommentOptimistically = (newComment: any) => {
    setPostComments([...postComments, newComment]);
  };
  const handleNewCommentSubmit = () => {
    if (newCommentContent) {
      setNewCommentContent("");
      const tempComment = {
        _id: Date.now().toString(),
        postId: postId,
        parentId: null,
        user: {
          fullName: user?.fullName,
          image: user?.imageUrl,
        },
        comment: newCommentContent,
        createdAt: new Date().toISOString(),
      };
      addCommentOptimistically(tempComment);
      return tempComment;
    }
  };

  return (
    <div>
      <h2 className="font-bold text-xl">Add Comment</h2>
      <div className="p-4 mb-4 border-b">
        <CommentForm
          className=""
          value={newCommentContent}
          onChange={(e) => setNewCommentContent(e.target.value)}
          onSubmit={handleNewCommentSubmit}
          placeholder="Add a new comment..."
          TextareaStyle="min-h-[200px]"
        />
      </div>

      {/* Render existing comments */}
      {comments.map((comment: any) => (
        <Comment
          postComments={postComments}
          key={comment._id}
          comment={comment}
          postId={postId}
          expandedReplyId={expandedReplyId}
          setExpandedReplyId={setExpandedReplyId}
        />
      ))}
    </div>
  );
};

export default CommentSection;
