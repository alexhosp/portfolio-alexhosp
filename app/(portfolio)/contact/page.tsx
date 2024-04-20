import { MotionHeading, Heading } from '@/ui/Heading/heading';
import { CardItemAnimationWrapper } from '@/ui/util/animation-wrapper';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/ui/Tabs/tabs';
import { Card, CardHeader, CardContent } from '@/ui/Card/card';
import { ContactForm } from '@/components/Form/form';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='md:mt-12'>
        <MotionHeading
          as='h2'
          color='default'
          size='h2Small'
          text='Contact.'
          spanText="Let's Build the Future Together."
        ></MotionHeading>
      </div>
      <CardItemAnimationWrapper
        animate='floatUp'
        className='w-screen my-4 md:mt-12'
      >
        <Tabs defaultValue='contact' className='w-full'>
          <TabsList className='grid grid-cols-2 w-10/12 mx-auto md:mb-3'>
            <TabsTrigger value='contact'>
              <Heading as='h3' color='default' size='h3Small'>
                Contact
              </Heading>
            </TabsTrigger>
            <TabsTrigger value='booking'>
              <Heading as='h3' color='default' size='h3Small'>
                Booking
              </Heading>
            </TabsTrigger>
          </TabsList>
          <TabsContent value='contact' className='mx-auto'>
            <Card
              color='gradientGrayDetail'
              edge='rounded'
              className='text-[var(--color-foreground)] py-2 px-3.5 md:pb-4 md:w-4/5'
            >
              <ContactForm fullForm />
            </Card>
          </TabsContent>
          <TabsContent value='booking'>
            <Card
              color='gradientGrayPrimary'
              edge='rounded'
              className='text-[var(--color-foreground)] py-2 px-3.5 md:pb-4 min-h-3/6'
            >
              <CardHeader>
                <Heading
                  as='h2'
                  color='default'
                  size='h2Small'
                  className='opacity-50'
                >
                  Currently working on this :)
                </Heading>
              </CardHeader>
              <CardContent>
                <Image
                  src='https://takpdarjgrwxjlffpfkw.supabase.co/storage/v1/object/public/portfolio-media/images/contact/in-progress.png'
                  alt='matrix code'
                  width='960'
                  height='640'
                  className='md:max-h-[50vh] md:w-auto'
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardItemAnimationWrapper>
    </div>
  );
};
export default ContactPage;
