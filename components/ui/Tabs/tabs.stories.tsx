import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { ContactForm } from '@/components/Form/form';
import {
  Open_Sans as opensans,
  Space_Grotesk as spacegrotesk,
} from 'next/font/google';
import { Card } from '@/ui/Card/card';
import { Heading } from '@/ui/Heading/heading';

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
          color='solidBackground'
          edge='rounded'
          className='text-[var(--color-foreground)]'
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
