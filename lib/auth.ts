import { z } from 'zod';

export const ContactFormSchema = z
  .object({
    type: z.enum(['job', 'freelance', 'colab', 'other'], {
      required_error: 'Please specify an inquiry type',
    }),
    customType: z.string().optional(),
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
  );
