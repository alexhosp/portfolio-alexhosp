import { Heading } from './heading';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Components/Heading',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Heading',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const DefaultH1: Story = {
  render: (args) => (
    <Heading as={args.as} size={args.size} color={args.color}>
      {args.children}
    </Heading>
  ),
  args: {
    as: 'h1',
    size: 'h1Default',
    color: 'default',
    children: 'Default H1',
  },
};
