import { Meta, StoryObj } from '@storybook/react';
import { MotionButton } from './button';
/* import { ChevronRight } from 'lucide-react'; */
import * as animations from '../util/animation';

const meta: Meta<typeof MotionButton> = {
  title: 'Components/Button/Animated Buttons',
  component: MotionButton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: 'text' } },
  },
};

export default meta;

type Story = StoryObj<typeof MotionButton>;

export const SmallAnimatedCancelButton: Story = {
  render: (args) => (
    <MotionButton {...args} {...animations.cancelButtonAnimation}>
      {args.children}
    </MotionButton>
  ),
  args: {
    children: 'Cancel',
    variant: 'destructive',
    size: 'xs',
  },
};
