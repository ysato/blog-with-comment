import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(
  request: Request,
  { params }: { params: { postId: string } },
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(null, { status: 401 });
  }

  const body = await request.json();

  const comment = await prisma.comment.create({
    data: {
      content: body.content as string,
      postId: params.postId,
      userId: session.user?.id as string,
    },
  });

  return NextResponse.json({ data: comment }, { status: 201 });
}
