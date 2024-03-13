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

// get services array
export const getServicesContent = async () => {
  const servicesContent = await prisma.content.findMany({
    where: {
      type: 'service',
    },
    select: {
      id: true,
      title: true,
      imageUrl: true,
      imageAlt: true,
      shortDescription: true,
      cta: true,
      ctaLink: true,
    },
  });
  return servicesContent;
};
