import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { postId: string } },
) {
  try {
    const data = await prisma.post.findUnique({
      where: { id: params.postId },
    });

    if (data === null) {
      return new Response(null, { status: 404 });
    }

    return NextResponse.json({ data });
  } catch (e) {
    return new Response(null, { status: 500 });
  }
}
