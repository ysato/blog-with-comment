import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await prisma.post.findMany({ orderBy: { date: 'desc' } });

    return NextResponse.json({ data });
  } catch (e) {
    return new Response(null, { status: 500 });
  }
}
