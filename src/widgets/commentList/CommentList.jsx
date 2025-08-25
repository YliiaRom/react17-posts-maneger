import {
  CommentItem,
  useGetCommentsByPostQuery,
} from "@/entities/post/comments";

export function CommentList({ postId }) {
  const { data, isLoading, error } = useGetCommentsByPostQuery({
    postId,
  });
  if (isLoading) return <div>Завантаження коментарів...</div>;
  if (error) return <div>Помилка: {error.toString()}</div>;
  const comments = data || [];
  return (
    <div className="commentWrap">
      <h3 className="titleDecor">Коментарі: </h3>
      {comments.map((c) => (
        <CommentItem key={c.id} comment={c} />
      ))}
    </div>
  );
}
