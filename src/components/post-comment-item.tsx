'use client';

import { useSession } from 'next-auth/react';
import { notFound, useRouter } from 'next/navigation';
import React from 'react';
import { Comment, User } from '@prisma/client';
import { distanceToNow } from '@/lib/date-relative';
import Image from 'next/image';

export default function PostCommentItem({
  comment,
}: {
  comment: Comment & { user: User };
}) {
  const session = useSession();
  const router = useRouter();

  const isAuthenticated = session.status === 'authenticated';
  const isAuthor = session.data?.user?.id === comment.userId;

  async function handleClick() {
    const res = await fetch(`/api/comments/${comment.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (res.status === 404) {
      notFound();
    }

    if (!res.ok) {
      throw new Error('Failed to fetch comments');
    }

    router.refresh();
  }

  return (
    <div className={'flex gap-4'}>
      <Image
        src={comment.user.image as string}
        alt={comment.user.name as string}
        width={48}
        height={48}
        className={'rounded-full w-[40px] h-[40px]'}
      />
      <div>
        <div className={'flex gap-2'}>
          <b>{comment.user.name}</b>
          <time className={'text-gray-400'} suppressHydrationWarning={true}>
            {distanceToNow(comment.date)}
          </time>
          {isAuthenticated && isAuthor && (
            <button
              onClick={handleClick}
              className={'text-gray-400 hover:text-red-500'}
            >
              x
            </button>
          )}
        </div>
        <div>{comment.content}</div>
      </div>
    </div>
  );
}
