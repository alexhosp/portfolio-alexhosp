import { z } from 'zod';

export const ContactFormSchema = z
  .object({
    type: z.enum(['job', 'freelance', 'colab', 'other'], {
      required_error: 'Please specify an inquiry type',
    }),
    customType: z.string().optional(),
    email: z.string().email({
      message: 'Please enter your email address.',
    }),
    message: z
      .string()
      .min(10, {
        message: 'Your message must be at least 10 characters long.',
      })
      .max(500, {
        message: 'Your message must be 500 or less characters long. ',
      }),
  })
  .refine(
    (data) => {
      if (data.type === 'other') {
        return (
          data.customType != undefined && data.customType.trim().length > 0
        );
      }
      return true;
    },
    {
      message: 'Please specify the type of your inquiry',
      path: ['customType'],
    }
  )
  .transform((data) => {
    if (
      data.type === 'other' &&
      data.customType &&
      data.customType.trim().length > 0
    ) {
      return {
        ...data,
        type: data.customType.trim(),
        customType: undefined,
      };
    }
    return data;
  });
