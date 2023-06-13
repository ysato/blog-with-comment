import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'My awesome blog',
  description: 'Clone and deploy your own Next.js portfolio in minutes.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className={'py-6'}>
        <nav className={'container max-w-2xl m-auto px-4 flex justify-between'}>
          <ul className={'flex gap-4'}>
            <li>
              <Link href={'/'}>About</Link>
            </li>
            <li>
              <Link href={'/posts'}>Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
}
