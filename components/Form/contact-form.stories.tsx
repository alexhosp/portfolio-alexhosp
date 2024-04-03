import { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './form';
import { Open_Sans as opensans } from 'next/font/google';

const openSans = opensans({
  subsets: ['latin'],
  display: 'swap',
});

const meta: Meta<typeof ContactForm> = {
  title: 'Components/Form/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContactForm>;

export const DefaultContactForm: Story = {
  render: () => (
    <div className={openSans.className}>
      <ContactForm />
    </div>
  ),
};
