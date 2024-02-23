import { PrivacyPolicyModal } from './modal';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PrivacyPolicyModal> = {
  component: PrivacyPolicyModal,
  title: 'Components/Privacy Policy Modal',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof PrivacyPolicyModal>;

export const DefaultContactForm: Story = {};
