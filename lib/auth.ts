import { z } from 'zod';

type AllowedMimeType =
  | 'application/pdf'
  | 'application/msword'
  | 'image/jpeg'
  | 'image/png'
  | 'video/mp4';

const allowedFileTypes: Record<AllowedMimeType, number> = {
  'application/pdf': 10 * 1024 * 1024, // PDFs up to 10MB
  'application/msword': 10 * 1024 * 1024, // DOCs up to 10MB
  'image/jpeg': 5 * 1024 * 1024, // JPEG Images up to 5MB
  'image/png': 5 * 1024 * 1024, // PNG Images up to 5MB
  'video/mp4': 100 * 1024 * 1024, // MP4 Videos up to 100MB
};

const fileSchema = z.object({
  file: z
    .instanceof(File)
    .optional()
    .superRefine((file: File | undefined, ctx) => {
      if (!file) return true; // optional

      const fileType: string = file.type;
      if (!Object.keys(allowedFileTypes).includes(fileType)) {
        console.log('unsupported file type:', fileType);
        ctx.addIssue({
          code: 'custom',
          message: `Files of type ${fileType} are not allowed.`,
        });
      }

      const fileSizeLimit = allowedFileTypes[file.type as AllowedMimeType];
      if (file.size > fileSizeLimit) {
        const sizeLimitMB = fileSizeLimit / (1024 * 1024);
        ctx.addIssue({
          code: 'custom',
          message: `${fileType.split('/')[1].toUpperCase()} files can be no larger than ${sizeLimitMB}MB.`,
        });
      }
      return true;
    }),
});
export const ContactFormSchema = z
  .object({
    type: z.enum(['job', 'quote', 'colab', 'other'], {
      errorMap: (issue, ctx) => {
        if (issue.code === z.ZodIssueCode.invalid_enum_value) {
          return { message: 'Please specify an inquiry type' };
        }
        return { message: ctx.defaultError };
      },
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
  .merge(fileSchema)
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
    },
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
