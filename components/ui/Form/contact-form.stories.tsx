import { ContactForm } from './form';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ContactForm> = {
  component: ContactForm,
  title: 'Components/Form/Contact Form',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ContactForm>;

export const DefaultContactForm: Story = {};
