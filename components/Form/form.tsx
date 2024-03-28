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
          className='bg-[var(--color-background)]/25 mx-auto md:grid md:grid-cols-2 md:gap-x-10'
        >
          <div className='md:col-start-1 flex md:items-end flex-col min-h-[13.25rem]'>
            <FormField
              control={form.control}
              name='type'
              render={({ field }) => (
                <FormItem className='my-3 flex flex-col items-start relative'>
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
                          <FormLabel className='font-normal'>
                            Job Offer
                          </FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='quote' />
                          </FormControl>
                          <FormLabel className='font-normal'>
                            Get a Quote
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
            <div className='min-h-8'>
              {watchType === 'other' && (
                <FormField
                  control={form.control}
                  name='customType'
                  render={({ field }) => (
                    <FormItem className='min-w-60 min-h-[3.25rem] md:pl-96'>
                      <FormControl>
                        <Input
                          placeholder='Please specify.'
                          fieldHeight='small'
                          fieldWidth='default'
                          className='md:min-w-48'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='text-left' />
                    </FormItem>
                  )}
                />
              )}
            </div>
          </div>
          <div className='md:col-start-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='my-3 flex flex-col items-start min-h-20 md:min-h-24'>
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
                <FormItem className='my-3 flex flex-col items-start min-h-[8.25rem] md:min-h-64 min-w-72'>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Provide a short project description and feel free to add any questions and requests.'
                      className='resize-none w-[75vw] md:w-[35vw] md:h-[20vh]'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='md:col-span-2'>
            <SmallCTAButton
              type='submit'
              variant='cta'
              size='xs'
              className='inline-flex place-items-center min-w-20 mt-6 drop-shadow-lg bg-[var(--color-background)] text-[var(--color-foreground)]'
              disabled={isSubmitting}
            >
              {isSubmitting ? <LoadinSpinner /> : 'Submit'}
            </SmallCTAButton>
          </div>
        </form>
      </Form>
      <Toaster />
    </>
  );
};
