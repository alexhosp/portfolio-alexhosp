'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui/Form/form-wrapper-components';
import { Input } from '@/ui/Form/FormInput/InputField/input';
import RadioGroup from '@/ui/Form/RadioGroup/radiobutton-group';
import { SmallCTAButton as FormCTA } from '@/ui/Button/cta-button';
import { motion } from 'framer-motion';
import { CTAButtonAnimation } from '../util/animation';

// add input validation with Zod
// for debugging
import { useState } from 'react';

const radioOptions = [
  { label: 'Job Offer', value: 'job' },
  { label: 'Freelance Opportunity', value: 'freelance' },
  { label: 'Collaboration Inquiry', value: 'colab' },
];

export const ContactForm = () => {
  const form = useForm({});

  // just for debugging
  const [submittedData, setSubmittedData] = useState(null);
  const onSubmit = (data) => {
    console.log(data);
    setSubmittedData(data); // Store the submitted data in state
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='radioGroup'
          render={({ field }) => (
            <FormItem>
              <RadioGroup
                options={radioOptions}
                title='Type of Inquiry'
                {...field}
              />
              <FormDescription>
                Please select the reason for your contact.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={() => (
            <FormItem>
              <FormLabel intent='labelAbove'>Email</FormLabel>
              <FormControl>
                <Input as='input' fieldSize='default' />
              </FormControl>
              <FormDescription>I will come back to you by mail</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {}
        <FormCTA type='submit'>Submit</FormCTA>
      </form>
    </Form>
  );
};
