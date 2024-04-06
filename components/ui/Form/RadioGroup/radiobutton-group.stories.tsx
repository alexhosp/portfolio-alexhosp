import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from '../FormInput/Label/label';
import { Meta, StoryObj } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';

import { Open_Sans as opensans } from 'next/font/google';

const openSans = opensans({
  subsets: ['latin'],
  display: 'swap',
});

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'Components/Form/Radio Group',
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const DefaultRadioGroup: Story = {
  render: () => (
    <RadioGroup defaultValue='option-one' className={openSans.className}>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-one' id='option-one' />
        <Label htmlFor='option-one'>Option One</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-two' id='option-two' />
        <Label htmlFor='option-two'>Option Two</Label>
      </div>
    </RadioGroup>
  ),
};
