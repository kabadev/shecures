import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const AddComment = ({ commentdata }: any) => {
  return (
    <div>
      <div className="mt-6">
        <Textarea
          className="w-full p-2 border rounded"
          placeholder="Write a new comment..."
        />
        <Button className="mt-2">Submit</Button>
      </div>
    </div>
  );
};

export default AddComment;
