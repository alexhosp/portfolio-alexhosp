import { Meta, StoryObj } from '@storybook/react';
import { GradientCTAButton } from './cta-button';

const meta: Meta<typeof GradientCTAButton> = {
  title: 'Components/Button/GradientCTAButton',
  component: GradientCTAButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GradientCTAButton>;

export const AnimatedCTA: Story = {
  render: (args) => <GradientCTAButton>{args.children}</GradientCTAButton>,
  args: {
    children: 'Link',
  },
};
