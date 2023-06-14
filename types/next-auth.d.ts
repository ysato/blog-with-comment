import { DefaultSession } from 'next-auth/src/core/types';

declare module 'next-auth' {
  export interface Session {
    user?: {
      id?: string | null;
    } & DefaultSession['user'];
  }
}
