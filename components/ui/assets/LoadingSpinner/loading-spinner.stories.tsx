import { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from './loading-spinner';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Components/Assets/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const DefaultLoadingSpinner: Story = {};
