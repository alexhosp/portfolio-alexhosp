import { SubmitHandler, useForm } from 'react-hook-form';
import RadioGroup from '@/ui/Form/RadioGroup/radiobutton-group';
import React from 'react';
import { useState } from 'react';

const RadioOptions = [
  { label: 'Job Offer', value: 'job' },
  { label: 'Freelance Opportunity', value: 'freelance' },
  { label: 'Collaboration Inquiry', value: 'colab' },
];

export interface FormInput {
  radioGroup: string;
}

export const ContactForm = () => {
  const { handleSubmit, control } = useForm<FormInput>();
  const [otherValue, setOtherValue] = useState('');

  const handleOtherValueChange = (newValue: string) => {
    console.log('value entered: ', newValue);
    setOtherValue(newValue);
  };

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const finalData = {
      ...data,
      radioGroup: data.radioGroup === 'other' ? otherValue : data.radioGroup,
    };
    console.log(finalData);
  };

  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
      <RadioGroup
        name='radioGroup'
        options={RadioOptions}
        title='Type of Inquiry'
        control={control}
        onOtherValueChange={handleOtherValueChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};
