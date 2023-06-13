import { distanceToNow } from '@/lib/date-relative';
import { Post } from '@prisma/client';
import { absoluteUrl } from '@/lib/utils';
import Link from 'next/link';

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <main className={'py-14'}>
      <div className={'container max-w-2xl m-auto px-4 flex flex-col gap-10'}>
        {posts &&
          posts.map((post) => {
            return (
              <article key={post.id}>
                <Link
                  href={`/posts/${post.id}`}
                  className={'text-lg leading-6 font-bold'}
                >
                  {post.title}
                </Link>
                <p>{post.excerpt}</p>
                <time
                  className={'text-gray-400'}
                  suppressHydrationWarning={true}
                >
                  {distanceToNow(post.date)}
                </time>
              </article>
            );
          })}
      </div>
    </main>
  );
}

async function getAllPosts() {
  const res = await fetch(absoluteUrl(`/api/posts`), { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const { data } = await res.json();

  return data as Post[];
}
