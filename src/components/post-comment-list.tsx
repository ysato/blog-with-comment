import type { Comment, User } from '@prisma/client';
import React from 'react';
import PostCommentItem from '@/components/post-comment-item';

export default async function PostCommentList({
  promise,
}: {
  promise: Promise<(Comment & { user: User })[]>;
}) {
  const comments = await promise;

  return (
    <div className={'flex flex-col gap-6'}>
      {comments.map((comment) => (
        <PostCommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
