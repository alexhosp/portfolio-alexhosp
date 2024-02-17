import { MotionHeading } from './heading';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MotionHeading> = {
  component: MotionHeading,
  title: 'Components/Animated Heading',
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select', options: ['h1', 'h2'] },
      defaultValue: 'h2',
    },
  },
};
export default meta;

type Story = StoryObj<typeof MotionHeading>;

export const AnimatedH1: Story = {
  render: (args) => (
    <MotionHeading as={args.as} size={args.size} color={args.color}>
      {args.children}
    </MotionHeading>
  ),
  args: {
    as: 'h1',
    size: 'h1Default',
    color: 'h1accent',
    children: 'Animated H1',
  },
};