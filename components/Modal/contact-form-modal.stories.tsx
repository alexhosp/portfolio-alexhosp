import { ContactFormModal } from './modal';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ContactFormModal> = {
  component: ContactFormModal,
  title: 'Components/Form/Contact Form Modal',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ContactFormModal>;

export const DefaultContactForm: Story = {};
