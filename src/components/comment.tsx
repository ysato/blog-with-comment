'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Comment() {
  const session = useSession();
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const isAuthenticated = session.status === 'authenticated';

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    ref.current?.reset();

    router.refresh();
  }

  return (
    <>
      <form onSubmit={handleSubmit} ref={ref} className={'flex flex-col gap-4'}>
        <textarea
          name={'content'}
          className={
            'w-full max-h-40 p-3 rounded resize-y bg-gray-200 text-gray-900 placeholder-gray-500'
          }
          placeholder={
            isAuthenticated
              ? 'What are your thoughts?'
              : 'Please login to leave a comment'
          }
          rows={2}
          disabled={!isAuthenticated}
        />
        <div className={'flex items-center gap-6'}>
          {isAuthenticated ? (
            <>
              <button
                type={'submit'}
                className={
                  'py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700'
                }
              >
                Send
              </button>
              <button
                type={'button'}
                className={'text-gray-500'}
                onClick={() => signOut()}
              >
                Log out
              </button>
            </>
          ) : (
            <button
              type={'button'}
              className={
                'py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700'
              }
              onClick={() => signIn()}
            >
              Log In
            </button>
          )}
        </div>
      </form>
    </>
  );
}
