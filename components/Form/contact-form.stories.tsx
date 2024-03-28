import { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './form';

const meta: Meta<typeof ContactForm> = {
  title: 'Components/Form/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContactForm>;

export const DefaultContactForm: Story = {
  render: () => <ContactForm />,
};
