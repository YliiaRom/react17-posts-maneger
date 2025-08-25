import { useState } from "react";
import { useCreateCommentMutation } from "../../../entities/post/comments/api/commentApi";
export function CommentForm({ postId }) {
  const [content, setContent] = useState("");
  const [createComment, { isLoading }] = useCreateCommentMutation();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    await createComment({ postId, text: content });
    setContent("");
  };
  return (
    <div>
      {/* <p>Form:</p> */}
      <form onSubmit={onSubmit} className="formComment">
        <label>
          {" "}
          Form:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
            placeholder="Напишіть коментар..."
            required
            style={{ width: "100%" }}
          />
        </label>
        <button
          type="submit"
          disabled={isLoading}
          style={{ backgroundColor: "#d6ebf3", color: "#000" }}
        >
          Додати коментар
        </button>
      </form>
    </div>
  );
}
