import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { ContactForm } from '@/components/Form/form';
import {
  Open_Sans as opensans,
  Space_Grotesk as spacegrotesk,
} from 'next/font/google';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/Card/card';
import { Heading } from '@/ui/Heading/heading';
import { CardItemAnimationWrapper } from '../util/animation-wrapper';
import Image from 'next/image';

const openSans = opensans({
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = spacegrotesk({
  subsets: ['latin'],
  display: 'swap',
});

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const TwoTabs: Story = {
  render: (args) => (
    <Tabs {...args} className={`w-full ${openSans.className}`}>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger className={spaceGrotesk.className} value='contact'>
          <Heading as='h3' color='default' size='h3Small'>
            Contact
          </Heading>
        </TabsTrigger>
        <TabsTrigger className={spaceGrotesk.className} value='booking'>
          <Heading as='h3' color='default' size='h3Small'>
            Booking
          </Heading>
        </TabsTrigger>
      </TabsList>
      <TabsContent value='contact'>
        <Card
          color='gradientGrayDetail'
          edge='rounded'
          className='text-[var(--color-foreground)] w-[90vw]'
        >
          <ContactForm />
        </Card>
      </TabsContent>
      <TabsContent value='booking'>
        <p>Booking</p>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'contact',
  },
};

export const AnimatedTwoTabs: Story = {
  render: (args) => (
    <CardItemAnimationWrapper animate='floatUp' className='w-screen'>
      <Tabs {...args} className={`w-full ${openSans.className}`}>
        <TabsList className='grid grid-cols-2 w-10/12 mx-auto'>
          <TabsTrigger className={spaceGrotesk.className} value='contact'>
            <Heading as='h3' color='default' size='h3Small'>
              Contact
            </Heading>
          </TabsTrigger>
          <TabsTrigger className={spaceGrotesk.className} value='booking'>
            <Heading as='h3' color='default' size='h3Small'>
              Booking
            </Heading>
          </TabsTrigger>
        </TabsList>
        <TabsContent value='contact' className='mx-auto'>
          <Card
            color='gradientGrayDetail'
            edge='rounded'
            className='text-[var(--color-foreground)] py-2 px-3.5 md:pb-4 md:w-4/5 mx-auto'
          >
            <ContactForm fullForm />
          </Card>
        </TabsContent>
        <TabsContent value='booking'>
          <Card
            color='gradientGrayPrimary'
            edge='rounded'
            className='text-[var(--color-foreground)] py-2 px-3.5 md:pb-4 min-h-screen'
          >
            <CardHeader>
              <CardTitle>Currently working on this :)</CardTitle>{' '}
            </CardHeader>
            <CardContent>
              <Image
                src='https://takpdarjgrwxjlffpfkw.supabase.co/storage/v1/object/public/portfolio-media/images/contact/in-progress.png'
                alt='matrix code'
                width='960'
                height='640'
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </CardItemAnimationWrapper>
  ),
  args: {
    defaultValue: 'contact',
  },
};
