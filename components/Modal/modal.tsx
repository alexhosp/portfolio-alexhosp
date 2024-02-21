'use client';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/ui/Dialog/dialog';
import EmailIcon from '@/ui/assets/EmailIcon/email-icon';
import { Card } from '@/ui/Card/card';
import { MotionButton } from '@/ui/Button/button';

export const ContactFormModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <EmailIcon />
      </DialogTrigger>
      <DialogContent>
        <Card color='gradientPrimary' edge='rounded' width='full'>
          <DialogHeader>
            <DialogTitle>Let&#39;s join Forces!</DialogTitle>
            <DialogDescription>
              Interested in working together? Please provide your details and
              feel free to add any questions and requests. I&#39;ll get in touch
              shortly.
            </DialogDescription>
          </DialogHeader>
          <div className='grid flex-1 gap-2'>test</div>
          {/* add the form here */}
          <DialogFooter>
            <DialogClose>
              <MotionButton type='button' variant='destructive' size='xs'>
                Close
              </MotionButton>
            </DialogClose>
          </DialogFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
