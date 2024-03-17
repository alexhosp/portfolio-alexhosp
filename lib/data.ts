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

export interface ModalImage {
  imageAlt: string;
  imageUrl: string;
}
export const getProjectsContent = async () => {
  const projectsContent = await prisma.content.findMany({
    where: {
      type: 'project',
    },
    select: {
      id: true,
      title: true,
      imageUrl: true,
      imageAlt: true,
      shortDescription: true,
      description: true,
      cta: true,
      ctaLink: true,
      additionalInfo: true,
    },
  });

  return projectsContent;
};

export const getFaqContent = async () => {
  const faqContent = await prisma.content.findMany({
    where: {
      type: 'faq',
    },
    select: {
      title: true,
      shortDescription: true,
      description: true,
      cta: true,
      ctaLink: true,
    },
  });
};
