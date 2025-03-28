import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { postId, text } = await req.json();
    if (!postId || !text.trim()) {
      return NextResponse.json({ error: 'Missing postId or text' }, { status: 400 });
    }

    await prisma.comment.create({
      data: { postId, text },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
