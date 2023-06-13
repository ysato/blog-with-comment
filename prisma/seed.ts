import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function seed() {
  await db.post.createMany({ data: getPosts() });
}

seed();

function getPosts() {
  return [
    {
      title: 'At the Sign of the Prancing Pony',
      content:
        'Placeat consequuntur ullam aut sapiente illo velit. Eius facere ut molestias totam laborum pariatur quam. Praesentium quo veritatis expedita animi.\n\nQuite anything glass benefit. Such form clearly top tend can require my. Federal degree sort performance region maintain.\n\nUt dignissimos sapiente culpa rerum pariatur consequatur. Corporis suscipit ad corrupti aut. Expedita culpa aut deleniti officiis.\n\nPorro eum id sit quia expedita. Alias expedita asperiores. Corporis ex eum atque cum ea.',
      excerpt:
        'The Hobbits reach the The Prancing Pony inn at Bree, where Frodo uses a false name, Underhill.',
    },
    {
      title: 'A Long-expected Party',
      content:
        'Placeat consequuntur ullam aut sapiente illo velit. Eius facere ut molestias totam laborum pariatur quam. Praesentium quo veritatis expedita animi.\n\nQuite anything glass benefit. Such form clearly top tend can require my. Federal degree sort performance region maintain.\n\nUt dignissimos sapiente culpa rerum pariatur consequatur. Corporis suscipit ad corrupti aut. Expedita culpa aut deleniti officiis.\n\nPorro eum id sit quia expedita. Alias expedita asperiores. Corporis ex eum atque cum ea.',
      excerpt:
        "Gandalf arrives in the Shire for Bilbo's Farewell Birthday Party. Bilbo leaves the Shire permanently.",
    },
  ];
}
