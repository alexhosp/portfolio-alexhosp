'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ContactFormSchema } from '@/lib/auth';
import { useForm } from 'react-hook-form';

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
import { Toaster } from '@/ui/Toast/toaster';
import { toast } from '@/ui/Toast/hooks/use-toast';
import { Input } from '@/ui/Form/FormInput/InputField/input';
import { Textarea } from '@/ui/Form/Textarea/textarea';

export const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });

  const watchType = form.watch('type');

  const onSubmit = (data: z.infer<typeof ContactFormSchema>) => {
    const { type, email } = data;
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

    // add the server action
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem className='mb-3'>
                <FormLabel>Inquiry Type</FormLabel>
                <FormControl>
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
              <FormItem className='mb-3'>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Email'
                    fieldHeight='small'
                    fieldWidth='default'
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
              <FormItem>
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
            className='mt-6'
          >
            Submit
          </SmallCTAButton>
        </form>
      </Form>
      <Toaster />
    </>
  );
};
