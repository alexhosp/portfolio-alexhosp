import { Meta, StoryObj } from '@storybook/react';
import { CTAButton } from './cta-button';
import { ChevronRight } from 'lucide-react';

const meta: Meta<typeof CTAButton> = {
  title: 'Components/CTAButton',
  component: CTAButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CTAButton>;

export const AnimatedCTA: Story = {
  render: (args) => <CTAButton {...args} />,
  args: {
    children: (
      <>
        Link <ChevronRight />
      </>
    ),
  },
};
