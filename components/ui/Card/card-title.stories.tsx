import { CardTitle } from './card';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CardTitle> = {
  component: CardTitle,
  title: 'Components/Card/Card Title',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Card Title',
    },
  },
};
export default meta;

type Story = StoryObj<typeof CardTitle>;

export const FormCardTitle: Story = {
  render: (args) => <CardTitle>{args.children}</CardTitle>,
  args: {
    children: `Let's join Forces!`,
  },
};
