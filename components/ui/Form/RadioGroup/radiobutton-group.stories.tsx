import RadioGroup from './radiobutton-group-v1';
import { Meta, StoryObj } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';

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
  args: {
    options: [
      { label: 'Job Offer', value: 'job' },
      { label: 'Freelance Opportunity', value: 'freelance' },
      { label: 'Collaboration Inquiry', value: 'colab' },
    ],
    title: 'type of inquiry',
  },
};
