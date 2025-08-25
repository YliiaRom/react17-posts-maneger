import React, { useState } from "react";
import { useDeleteCommentMutation } from "../api/commentApi";
export function CommentItem({ comment }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteComment] = useDeleteCommentMutation();
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteComment(comment.id).unwrap();
    } catch (e) {
      console.log(e.message);
      // handle error if needed
    }
  };
  return (
    <div className="commentItemBox">
      <div>
        <span>
          <b>{comment.authorName}</b>: {comment.text}
          {isDeleting && (
            <span style={{ marginLeft: 8, color: "#888" }}>Видаляється...</span>
          )}
        </span>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          style={{ marginLeft: 10 }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
//
