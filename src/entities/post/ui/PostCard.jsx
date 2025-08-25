import { useState } from "react";
import { roles } from "@/shared/config/roles";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth";
import { CommentList } from "@/widgets/commentList/CommentList";
import { CommentForm } from "@/features/comment";

export function PostCard({ post, onEdit, onDelete }) {
  const [showComments, setShowComments] = useState(false);
  const user = useSelector(selectAuthUser);

  return (
    <div className="postCard">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>
        <small>Автор: {post.author?.name}</small>
      </div>
      {(user?.role === roles.admin ||
        (user?.role === roles.manager && post.authorId === user.id)) && (
        <div style={{ marginTop: 10 }}>
          <button onClick={() => onEdit(post)}>Редагувати</button>
          <button onClick={() => onDelete(post.id)}>Видалити</button>
        </div>
      )}
      <button onClick={() => setShowComments((v) => !v)}>
        {showComments ? "Сховати коментарі" : "Показати коментарі"}
      </button>
      {showComments && (
        <>
          <CommentList postId={post.id} />
          {user && <CommentForm postId={post.id} />}
        </>
      )}
    </div>
  );
}
