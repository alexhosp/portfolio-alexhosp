'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ContactFormSchema } from '@/lib/auth';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { SmallCTAButton } from '@/ui/Button/cta-button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui/Form/form';

import { RadioGroup, RadioGroupItem } from '@/ui/Form/RadioGroup/radio-group';
import { toast } from '@/ui/Toast/hooks/use-toast';
import { Input } from '@/ui/Form/FormInput/InputField/input';
import { Textarea } from '@/ui/Form/Textarea/textarea';
import { Toaster } from '@/ui/Toast/toaster';
import LoadinSpinner from '@/ui/assets/LoadingSpinner/loading-spinner';

export const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });

  const watchType = form.watch('type');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
    setIsSubmitting(true);

    const { type, email } = data;

    // simulate the server action, add the server action here
    // make sure to add error handling
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: 'Received your message.',
      description: (
        <pre className='mt-2 rounded-md bg-[var(--color-black)] p-1'>
          <code className='text-xs text-mercury'>
            {JSON.stringify({ type, email }, null, 2)}
          </code>
        </pre>
      ),
    });
    setIsSubmitting(false);
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          className='bg-[var(--color-background)]/25 mx-auto w-[20rem]'
        >
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem className='my-3 flex flex-col items-start'>
                <FormLabel>Inquiry Type</FormLabel>
                <FormControl>
                  <div className='flex flex-col items-center'>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-1'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='job' />
                        </FormControl>
                        <FormLabel className='font-normal'>Job Offer</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='freelance' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          Freelance Opportunity
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='colab' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          Collaboration Request
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='other' />
                        </FormControl>
                        <FormLabel className='font-normal'>Other</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {watchType === 'other' && (
            <FormField
              control={form.control}
              name='customType'
              render={({ field }) => (
                <FormItem className='mt-1 mb-3'>
                  <FormControl>
                    <Input
                      placeholder='Please specify.'
                      fieldHeight='small'
                      fieldWidth='default'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='my-3 flex flex-col items-start'>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Email'
                    fieldHeight='small'
                    fieldWidth='full'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='my-3 flex flex-col items-start'>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Feel free to add any questions and requests.'
                    className='resize-none'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SmallCTAButton
            type='submit'
            variant='cta'
            size='xs'
            className='inline-flex place-items-center min-w-20 mt-6 drop-shadow-lg bg-[var(--color-background)] text-[var(--color-foreground)]'
            disabled={isSubmitting}
          >
            {isSubmitting ? <LoadinSpinner /> : 'Submit'}
          </SmallCTAButton>
        </form>
      </Form>
      <Toaster />
    </>
  );
};
