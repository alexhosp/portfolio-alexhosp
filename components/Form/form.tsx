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

export const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
  });

  const watchType = form.watch('type');

  const onSubmit = (data: z.infer<typeof ContactFormSchema>) => {
    toast({
      title: 'You selected the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-[var(--color-black)] p-4'>
          <code className='text-mercury'>{JSON.stringify(data, null, 2)}</code>
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
              <FormItem>
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
                <FormItem>
                  <FormControl>
                    <Input placeholder='Please specify.' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

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
