import { useState } from "react";
import {
  useGetPostsQuery,
  useDeletePostMutation,
} from "@/entities/post/api/postApi";
import { PostCard } from "@/entities/post/ui/PostCard";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth";
import { roles } from "@/shared/config/roles";

export function PostList() {
  const user = useSelector(selectAuthUser);
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, isLoading, error } = useGetPostsQuery({ page, limit });
  const [deletePost] = useDeletePostMutation();
  const [editingPost, setEditingPost] = useState(null);

  if (isLoading) return <div>Завантаження оголошень...</div>;
  if (error) return <div>Помилка: {error.toString()}</div>;

  const posts = data.items || [];

  const totalPages = data?.totalPages || 1;
  const onEdit = (post) => {
    setEditingPost(post);
  };
  const onDelete = async (id) => {
    await deletePost(id);
    if (posts.length === 1) setPage((p) => Math.max(p - 1, 1));
  };

  return (
    <div className="postListWrapper">
      {user?.role === roles.manager || user?.role === roles.admin ? (
        <button onClick={() => setEditingPost({})} className="newCommentBtn">
          + Додати оголошення
        </button>
      ) : null}
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
      {/* ----pagination */}
      <div className="postListPaginationBox">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Назад
        </button>

        <span>
          Сторінка {page} з {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Вперед
        </button>
      </div>
      {editingPost !== null && (
        <PostEditModal
          post={editingPost}
          onClose={() => setEditingPost(null)}
        />
      )}
    </div>
  );
}
