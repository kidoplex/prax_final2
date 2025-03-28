import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { postId, userId } = await req.json(); // userId je potrebný, aby užívateľ mohol lajkovať len raz

    if (!postId || !userId) {
      return NextResponse.json({ error: 'Missing postId or userId' }, { status: 400 });
    }

    // Skontrolujeme, či užívateľ už lajkoval tento post
    const existingLike = await prisma.like.findFirst({
      where: { postId, userId },
    });

    if (existingLike) {
      // Ak už lajk existuje, odstránime ho (unlike)
      await prisma.like.delete({ where: { id: existingLike.id } });
      return NextResponse.json({ success: true, liked: false });
    } else {
      // Ak lajk neexistuje, vytvoríme nový záznam
      await prisma.like.create({
        data: { postId, userId },
      });
      return NextResponse.json({ success: true, liked: true });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
