'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/ui/Dialog/dialog';
import { CardItemAnimationWrapper } from '@/ui/util/animation-wrapper';
import { SmallCTAButton, CTAButton } from '@/ui/Button/cta-button';
import Link from 'next/link';
import Image from 'next/image';

import { Mail } from 'lucide-react';
import { Card } from '@/ui/Card/card';
import { iconAnimation } from '@/ui/util/animation';
import { motion } from 'framer-motion';

import { ContactForm } from '@/components/Form/form';
import { FooterMenuItem } from '@/ui/MenuItem/menu-item';

const MotionMail = motion(Mail);

export const ContactFormModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <MotionMail
            {...iconAnimation}
            style={{ height: '50px', width: '50px' }}
            aria-label='Open the contact form'
          />
        </DialogTrigger>
        <DialogContent>
          <Card
            color='gradientPrimary'
            edge='rounded'
            width='full'
            className='backdrop-blur-lg sm:max-w-screen'
          >
            <DialogHeader>
              <DialogTitle>Let&#39;s join Forces!</DialogTitle>
              <DialogDescription>
                Interested in working together? I&#39;ll get in touch shortly.
              </DialogDescription>
            </DialogHeader>
            <div className='grid flex-1 gap-2'>
              <ContactForm />
            </div>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const PrivacyPolicyModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <FooterMenuItem isModalTrigger>Privacy Policy</FooterMenuItem>
        </DialogTrigger>
        <DialogContent>
          <Card
            color='solidPrimary'
            edge='rounded'
            width='full'
            className='backdrop-blur-lg sm:max-w-screen'
          >
            <DialogHeader>
              <DialogTitle>Privacy Policy</DialogTitle>
              <DialogDescription className='text-left'>
                This article provides an overview how I store and process your
                data to enhance your experience on my site.
              </DialogDescription>
            </DialogHeader>
            <div className='grid flex-1 gap-2 overflow-y-auto mt-3 pr-2'>
              <div className='text-left'>
                Add Privacy Policy here as soon as I integrated analytics and
                know how I will use it. This is going to be a long text and must
                be well structured and scrollable. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Amet explicabo illum officiis
                fugit veniam consequuntur ipsa excepturi maiores rem doloremque
                sit, doloribus nisi iusto dolor, officia totam omnis, error
                quasi.
              </div>
            </div>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};

export interface CtaData {
  cta: string[];
  ctaLink: string[];
}

export const ProjectModal: React.FC<{
  dialogTitle: string;
  bulletPoints: string[];
  ctaName: string | null;
  imageUrl: string;
  imageAlt: string;
  dialogCtaData: CtaData;
}> = ({
  dialogTitle,
  bulletPoints,
  ctaName,
  imageUrl,
  imageAlt,
  dialogCtaData,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CardItemAnimationWrapper animate='scaleUp'>
          <div className='md:hidden pt-5'>
            <SmallCTAButton>{ctaName}</SmallCTAButton>
          </div>
          <div className='hidden md:block md:mt-16'>
            <CTAButton className='!text-lg'>{ctaName}</CTAButton>
          </div>
        </CardItemAnimationWrapper>
      </DialogTrigger>
      <DialogContent className='rounded-full sm:w-10/12'>
        <Card color='solidDetail' edge='rounded' width='full'>
          <DialogHeader>
            <DialogTitle className='self-stretch'>{dialogTitle}</DialogTitle>
            <Image
              src={imageUrl ? imageUrl : '/project_fallback.webp'}
              alt={
                imageAlt ? imageAlt : 'illustration representing the project'
              }
              height={512}
              width={512}
              className='max-h-[50%] w-auto mx-auto'
            />
            <DialogDescription className='flex place-content-center self-stretch ml-10 -mt-4'>
              <ul className='flex flex-col items-baseline mx-auto'>
                {bulletPoints.map((line, index) => {
                  return (
                    <li className='py-1' key={index}>
                      &#x2714; {line}
                    </li>
                  );
                })}
              </ul>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='flex flex-col'>
            <div className='flex flex-row gap-4 p-4'>
              {dialogCtaData.cta.map((cta, index) => {
                return (
                  <SmallCTAButton key={index}>
                    <Link href={dialogCtaData.ctaLink[index]}>{cta}</Link>
                  </SmallCTAButton>
                );
              })}
            </div>
          </DialogFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
