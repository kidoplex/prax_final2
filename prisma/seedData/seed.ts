import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Vytvorenie testovacieho používateľa
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
    },
  });

  console.log(`✅ Vytvorený používateľ: ${user.email}`);

  // Vytvorenie 100 príspevkov pre tohto používateľa
  const posts = Array.from({ length: 100 }, (_, i) => ({
    title: `Príspevok #${i + 1}`,
    content: `Toto je obsah príspevku číslo ${i + 1}.`,
    userId: user.id, // Prepojenie s používateľom
  }));

  await prisma.post.createMany({ data: posts });

  console.log('✅ 100 príspevkov bolo úspešne pridaných!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
