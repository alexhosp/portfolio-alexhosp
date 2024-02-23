'use client';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/ui/Dialog/dialog';
import { EmailIconLarge } from '@/ui/assets/EmailIcon/email-icon';
import { Card } from '@/ui/Card/card';

import { ContactForm } from '@/components/Form/form';
import { FooterMenuItem } from '@/ui/MenuItem/menu-item';

export const ContactFormModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <EmailIconLarge />
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
          <FooterMenuItem>Privacy Policy</FooterMenuItem>
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
