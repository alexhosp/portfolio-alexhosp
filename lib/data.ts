import prisma from '@/lib/db';

export const getAboutContent = async () => {
  // add logic to fetch the longDescription conditionally
  const aboutContent = await prisma.content.findMany({
    where: {
      type: 'about',
    },
    select: {
      id: true,
      title: true,
      imageUrl: true,
      shortDescription: true,
      cta: true,
    },
  });
  return aboutContent;
};
