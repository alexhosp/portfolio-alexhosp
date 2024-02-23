'use client';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/ui/Dialog/dialog';
import EmailIcon from '@/ui/assets/EmailIcon/email-icon';
import { Card } from '@/ui/Card/card';

import { ContactForm } from '@/components/Form/form';

export const ContactFormModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <EmailIcon />
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
