import type { Meta, StoryObj } from '@storybook/react';
import HamburgerIcon from './hamburger-icon';

const meta: Meta<typeof HamburgerIcon> = {
  title: 'Components/HamburgerIcon',
  component: HamburgerIcon,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Whether the hamburger icon is open',
    },
  },
};
export default meta;

export const InteractiveIcon: StoryObj<typeof HamburgerIcon> = {
  render: (args) => {
    return <HamburgerIcon {...args} />;
  },
  args: {
    isOpen: false,
  },
};
