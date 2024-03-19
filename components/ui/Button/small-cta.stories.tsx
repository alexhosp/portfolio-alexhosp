import { Meta, StoryObj } from '@storybook/react';
import { SmallCTAButton } from './cta-button';
import { ChevronRight } from 'lucide-react';
import LoadingSpinner from '@/ui/assets/LoadingSpinner/loading-spinner';

const meta: Meta<typeof SmallCTAButton> = {
  title: 'Components/Button/SmallCTAButton',
  component: SmallCTAButton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof SmallCTAButton>;

export const FormCTAArrow: Story = {
  render: (args) => (
    <SmallCTAButton {...args}>
      {args.children}
      <ChevronRight />
    </SmallCTAButton>
  ),
  args: {
    children: 'Link',
  },
};

export const LoadingCTA: Story = {
  render: (args) => (
    <SmallCTAButton {...args}>
      <LoadingSpinner />
      {args.children}
    </SmallCTAButton>
  ),
};
