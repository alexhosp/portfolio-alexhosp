import { Label } from '@/ui/Form/FormInput/Label/label';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Components/Form/Label',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Label>;

export const DefaultLabel: Story = {
  args: {
    htmlFor: 'input field id',
    children: 'Label for Input',
    intent: 'labelAbove',
  },
};
