import prisma from '@/lib/db';
import { getPlaiceholder } from 'plaiceholder';

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
      description: true,
      fullDescription: true,
      cta: true,
      additionalInfo: true,
      ctaLink: true,
      icon: true,
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
      id: true,
      title: true,
      shortDescription: true,
      description: true,
      cta: true,
      ctaLink: true,
    },
  });
  return faqContent;
};

export interface PotentialCustomerData {
  uniqueId: string;
  inquiryType: string;
  email: string;
  message: string;
  formType: string;
  fileUrl?: string;
}

export const insertPotentialCustomer = async (data: PotentialCustomerData) => {
  try {
    const createdPotentialCustomer = await prisma.potentialCustomer.create({
      data: {
        uniqueId: data.uniqueId,
        inquiryType: data.inquiryType,
        email: data.email,
        message: data.message,
        formType: data.formType,
        fileUrl: data.fileUrl,
      },
    });
    console.log('Customer created', createdPotentialCustomer);
  } catch (error) {
    console.error('Error creating potential customer:', error);
    throw error; // handle in createPotentialCustomer
  }
};
