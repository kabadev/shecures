"use client";
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
import { Button } from "./ui/button";

const Comment = ({ comment, postId }: any) => {
  const { user } = useUser();
  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.comment);

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setEditedContent(comment.comment);
  };
  const handleEditSubmit = () => {
    if (editedContent) {
      setEditMode(false);
      return {
        postId: postId,
        type: "edit",
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
    <div className="p-2 mb-4 border-b pb-4">
      {editMode && (
        <CommentForm
          className="w-full"
          TextareaStyle=""
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          onSubmit={handleEditSubmit}
          placeholder="Edit your comment..."
        />
      )}
      <div className="flex gap-2">
        {!editMode && (
          <Image
            src={comment.user?.imageUrl || ""}
            alt="banner ads"
            className="w-[30px] h-[30px]  rounded-full object-cover"
            width={200}
            height={200}
          />
        )}
        <div className="w-full">
          <div className="w-full flex items-center justify-between">
            {!editMode && (
              <div className="mb-2">
                <p className="text-xs font-bold ">{comment.user.fullName}</p>
                <p className="text-xs text-muted-foreground">
                  {formatTimestamp(comment.createdAt)}
                </p>
              </div>
            )}
            <div className="flex space-x-2 mt-2 ">
              {editMode ? (
                <Button className="cursor-pointer " onClick={toggleEditMode}>
                  Cancel
                </Button>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis className="text-muted-foreground" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Action</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={toggleEditMode}
                    >
                      <FilePenLine />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => onDeleteComment(comment.id)}
                    >
                      <Trash />
                      Delete
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <MessageSquareWarning /> Report
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>

          <div>{!editMode && <p className="text-sm">{comment.comment}</p>}</div>
        </div>
      </div>
    </div>
  );
};

const CommentSection = ({ comments, postId }: any) => {
  const { user } = useUser();
  const [postComments, setPostComments] = useState(comments); // Track the ID of the currently expanded reply form
  const [newCommentContent, setNewCommentContent] = useState("");

  const addCommentOptimistically = (newComment: any) => {
    setPostComments([newComment, ...postComments]);
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
          imageUrl: user?.imageUrl,
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
      {postComments.map((comment: any) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
