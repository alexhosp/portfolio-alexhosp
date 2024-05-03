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
import Text from '@/ui/Text/text';
import React from 'react';

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
            className='backdrop-blur-lg sm:max-w-screen w-[22rem] md:w-full'
          >
            <DialogHeader>
              <DialogTitle>Let&#39;s join Forces!</DialogTitle>
              <Text as='p' size='small' textColor='muted'>
                Interested in working together? I&#39;ll get in touch shortly.
              </Text>
            </DialogHeader>
            <div className='grid flex-1 gap-2 mt-2.5'>
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

interface Cta {
  name: string;
  link: string | null;
}

export type CtaData = Cta[] | undefined;

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
          <div className='md:hidden'>
            <SmallCTAButton>{ctaName}</SmallCTAButton>
          </div>
          <div className='hidden md:block'>
            <CTAButton className='!text-lg'>{ctaName}</CTAButton>
          </div>
        </CardItemAnimationWrapper>
      </DialogTrigger>
      <DialogContent>
        <Card color='solidBackground' edge='rounded' className='p-1.5 py-5'>
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
              priority
            />
            <div className='flex place-content-center self-stretch ml-10 -mt-4'>
              <ul className='list-none pl-0 flex flex-col items-baseline mx-auto pr-4 text-sm/[1.2rem] tracking-[0.007em] antialiased text-pretty whitespace-normal text-[var(--color-foreground)] opacity-80'>
                {bulletPoints.map((line, index) => {
                  return (
                    <li className='py-1 text-left flex' key={index}>
                      <span className='shrink-0'>&#x2714;</span>
                      <span className='flex-1'>{line}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </DialogHeader>
          <DialogFooter className='flex flex-col'>
            <div className='flex flex-row gap-4 p-4'>
              {dialogCtaData?.map((cta, index) => {
                const isDisabled =
                  dialogTitle === 'Dev Portfolio' && cta.name === 'See it Live';

                const tooltipText = `You're already here.`;
                return (
                  <div key={index} className='relative group'>
                    <SmallCTAButton>
                      {cta.link !== null ? (
                        <Link href={cta.link}>{cta.name}</Link>
                      ) : (
                        <span>{cta.name}</span>
                      )}
                    </SmallCTAButton>
                    {isDisabled && (
                      <div className='absolute bottom-full mb-2 hidden group-hover:block w-max p-2 bg-[var(--color-detail)] text-[var(--color-foreground)] text-sm rounded-md'>
                        {tooltipText}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </DialogFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

/* interface serviceModalData {
  title: string;
  icon?: string | undefined;
  description?: string | undefined;
  examples: string[] | undefined;
  technologies?: string[] | undefined;
  features?: string[] | undefined;
  cta?: string | undefined;
}
 */
/* export const ServiceModal = React.forwardRef<HTMLDivElement, serviceModalData>(
  (
    { title, cta, icon, description, examples, technologies, features },
    ref,
  ) => {
    const descriptionArray = description?.split('|');
    console.log(descriptionArray?.[0]);
    return (
      <div ref={ref}>
        <Dialog>
          <DialogTrigger>
            <CardItemAnimationWrapper animate='scaleUp'>
              <div className='md:hidden'>
                <SmallCTAButton>{cta}</SmallCTAButton>
              </div>
              <div className='hidden md:block'>
                <CTAButton className='!text-lg'>{cta}</CTAButton>
              </div>
            </CardItemAnimationWrapper>
          </DialogTrigger>
          <DialogContent className='w-11/12'>
            <Card color='solidBackground' edge='rounded' className='p-1.5 py-5'>
              <DialogHeader className='flex flex-row gap-5'>
                <ServiceIcon icon={icon} />
                <div className='mx-auto mt-7 mb-3.5'>
                  <Heading
                    as='h3'
                    color='default'
                    size='h3Small'
                    className='inline !text-left md:hidden'
                  >
                    {`${title}.`}
                    <span className='text-[var(--color-primary)] ml-1'>
                      Details
                    </span>
                  </Heading>
                  <Heading
                    as='h3'
                    color='default'
                    size='h3Default'
                    className='!text-left hidden md:inline'
                  >
                    {`${title}.`}
                    <span className='text-[var(--color-primary)] ml-1'>
                      Details
                    </span>
                  </Heading>
                </div>
              </DialogHeader>
              <Text as='p' textColor='default' size='small'>
                {descriptionArray[0]}
              </Text>
              <Collapsible>
                <CollapsibleTrigger>{descriptionArray[1]}</CollapsibleTrigger>
                <CollapsibleContent>
                  <ul>
                    {examples?.map((example, index) => {
                      return (
                        <li key={index}>
                          <Text as='p' textColor='muted' size='small'>
                            {example}
                          </Text>
                        </li>
                      );
                    })}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
              <DialogFooter className='flex flex-col'></DialogFooter>
            </Card>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
);

ServiceModal.displayName = 'serviceModal';
 */
