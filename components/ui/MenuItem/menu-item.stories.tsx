import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from './menu-item';

const meta: Meta<typeof MenuItem> = {
  title: 'Components/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Link',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  render: (args) => <MenuItem>{args.children}</MenuItem>,
  args: {
    children: 'Link',
  },
};
