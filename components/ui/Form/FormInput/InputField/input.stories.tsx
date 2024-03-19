import { Input } from '@/ui/Form/FormInput/InputField/input';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Form/Text Input',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const EmailInputDefault: Story = {
  args: {
    type: 'email',
    placeholder: 'Email',
  },
};

export const InputSmall: Story = {
  args: {
    type: 'email',
    placeholder: 'Email',
  },
};
