import { distanceToNow } from '@/lib/date-relative';
import { remark } from 'remark';
import html from 'remark-html';
import { Post } from '@prisma/client';
import { notFound } from 'next/navigation';
import { absoluteUrl } from '@/lib/utils';
import Comment from '@/components/comment';

export default async function Page({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getPost(postId);

  const html = await markdownToHtml(post.content);

  return (
    <main className={'py-14'}>
      <div className={'container max-w-2xl m-auto px-4 flex flex-col gap-20'}>
        <article className={'flex flex-col gap-10'}>
          <header className={'flex flex-col gap-2'}>
            <h1 className={'text-4xl font-bold'}>{post.title}</h1>
            <p className={'text-xl'}>{post.excerpt}</p>
            <time className={'text-gray-400'} suppressHydrationWarning={true}>
              {distanceToNow(post.date)}
            </time>
          </header>
          <div className={'prose'} dangerouslySetInnerHTML={{ __html: html }} />
        </article>
        <div className={'flex flex-col gap-10'}>
          <Comment />
        </div>
      </div>
    </main>
  );
}

async function getPost(postId: string) {
  const res = await fetch(absoluteUrl(`/api/posts/${postId}`), {
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }

  const { data } = await res.json();

  return data as Post;
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
