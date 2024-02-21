import { SubmitHandler, useForm } from 'react-hook-form';
import RadioGroup from '@/ui/Form/RadioGroup/radiobutton-group-v1';
import React from 'react';
import { useState } from 'react';
import { SmallCTAButton } from '../Button/cta-button';
import { motion } from 'framer-motion';
import { CTAButtonAnimation } from '@/ui/util/animation';
import * as Form from '@radix-ui/react-form';
import { FormField } from '@/ui/Form/form-wrapper-components-v1';
import { Input } from './FormInput/InputField/input-v1';

const RadioOptions = [
  { label: 'Job Offer', value: 'job' },
  { label: 'Freelance Opportunity', value: 'freelance' },
  { label: 'Collaboration Inquiry', value: 'colab' },
];

export interface FormInput {
  radioGroup: string;
  email: string;
  test: string;
}

export const ContactForm = () => {
  const { handleSubmit, control, register, watch } = useForm<FormInput>();
  const [otherValue, setOtherValue] = useState('');

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log('triggered');
    const finalData = {
      ...data,
      radioGroup: data.radioGroup === 'other' ? otherValue : data.radioGroup,
    };
    console.log(finalData);
  };

  const handleOtherValueChange = (newValue: string) => {
    setOtherValue(newValue);
  };

  const emailValue = watch('email');
  console.log('email value: ', emailValue);

  console.log(register);

  return (
    <Form.Root onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
      <FormField name='radioGroup'>
        <RadioGroup
          name='radioGroup'
          options={RadioOptions}
          title='Type of Inquiry'
          control={control}
          onOtherValueChange={handleOtherValueChange}
        />
      </FormField>
      <FormField name='email'>
        <Input as='input' fieldSize='small' type='email' name='email' />
      </FormField>

      <motion.div {...CTAButtonAnimation} style={{ display: 'inline-block' }}>
        <SmallCTAButton type='submit'>Submit</SmallCTAButton>
      </motion.div>
    </Form.Root>
  );
};
