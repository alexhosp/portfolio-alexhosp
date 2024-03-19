import { Input } from '@/ui/Form/FormInput/InputField/input-v1';
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
    as: 'input',
    type: 'email',
    placeholder: 'Email',
  },
};

export const TextInput: Story = {
  args: {
    as: 'textarea',
    placeholder: 'Message',
    label: 'Name',
  },
};

export const InputSmall: Story = {
  args: {
    as: 'input',
    type: 'email',
    placeholder: 'Email',
    fieldSize: 'small',
    label: 'Email',
  },
};
