'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ContactFormSchema } from '@/lib/auth';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

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
/* import { InputFile } from '@/ui/Form/FileInput/file-input'; */
import { Textarea } from '@/ui/Form/Textarea/textarea';
import { Toaster } from '@/ui/Toast/toaster';
import LoadinSpinner from '@/ui/assets/LoadingSpinner/loading-spinner';
import { createPotentialCustomer } from '@/lib/action';

export interface ContactFormData {
  type: string;
  email: string;
  message: string;
  /*   file?: File; */
  customType?: string;
}

export const ContactForm = ({ fullForm }: { fullForm?: boolean }) => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: '',
      message: '',
      type: '',
      formType: 'contact',
    },
  });

  useEffect(() => {
    form.setValue('formType', fullForm ? 'contact' : 'modal');
  }, [form, fullForm]);

  const watchType = form.watch('type');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
    setIsSubmitting(true);

    /*    const { type, email, message, file, formType } = data;

    console.log('Form Submission Data:', {
      type,
      email,
      message,
      file: file ? { name: file.name, type: file.type, size: file.size } : null,
      formType,
    }); */

    const contactFormData: FormData = new FormData();
    contactFormData.append('type', data.type);
    contactFormData.append('email', data.email);
    contactFormData.append('message', data.message);
    contactFormData.append('formType', data.formType);

    if (data.type === 'other' && data.customType) {
      contactFormData.append('customType', data.customType);
    }
    /*  if (data.file) {
      const fileBuffer = await data.file.arrayBuffer();
      const fileBlob = new Blob([fileBuffer], { type: data.file.type });
      contactFormData.append('file', fileBlob, data.file.name);
    } */

    try {
      const response = await createPotentialCustomer(contactFormData);
      if (response) {
        if (response.success) {
          toast({
            title: response.message,
            description: (
              <pre className='mt-2 rounded-md bg-[var(--color-black)] p-1'>
                <code className='text-xs text-mercury'>
                  {JSON.stringify(response.data, null, 2)}
                </code>
              </pre>
            ),
          });
        } else {
          toast({
            title: 'Error submitting form',
            description: response.message,
          });
        }
      }
    } catch (error) {
      // Handle unexpected errors
      toast({
        title: 'Error',
        description: 'An unexpected error occurred.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          className='bg-[var(--color-background)]/25 mx-auto md:grid md:grid-cols-2 md:gap-x-10 max-w-full'
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
                        <FormItem className='flex items-center space-x-3 space-y-0 relative'>
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
                  defaultValue=''
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
                <FormItem className='my-3 flex flex-col items-start min-h-[8.25rem] md:min-h-[17rem] min-w-72'>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Provide a short project description and feel free to add any questions and requests.'
                      className='resize-none w-[75vw] md:w-[35vw] md:h-[20vh]'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='max-w-64 text-left' />
                </FormItem>
              )}
            />
            {/*  {fullForm && (
              <div className='min-h-[8.25rem]'>
                <FormField
                  control={form.control}
                  name='file'
                  render={({ field: { onChange, onBlur, ...rest } }) => (
                    <FormItem className='text-left'>
                      <FormLabel>Additional File (Optional)</FormLabel>
                      <FormControl>
                        <InputFile
                          onChange={(selectedFile) => {
                            onChange(selectedFile);
                          }}
                          onBlur={onBlur}
                          {...rest}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )} */}
          </div>
          <div className='md:col-span-2 relative mb-3 md:mb-0'>
            <SmallCTAButton
              type='submit'
              variant='cta'
              size='xs'
              className='inline-flex place-items-center min-w-20 mt-1 drop-shadow-lg bg-[var(--color-background)] text-[var(--color-foreground)] border border-[var(--color-accent)]'
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
