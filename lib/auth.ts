import { z } from 'zod';
import * as path from 'path';

export type AllowedMimeType =
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
    formType: z.enum(['contact', 'modal']),
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

const serverFileSchema = z.instanceof(File).superRefine((file, ctx) => {
  if (!(file.type in allowedFileTypes)) {
    ctx.addIssue({
      code: 'custom',
      message: `Files of type ${file.type} are not allowed.`,
    });
  } else {
    const fileSizeLimit = allowedFileTypes[file.type as AllowedMimeType];
    if (file.size > fileSizeLimit) {
      const sizeLimitMB = fileSizeLimit / (1024 * 1024);
      ctx.addIssue({
        code: 'custom',
        message: `Files can be no larger than ${sizeLimitMB}MB.`,
      });
    }
    if (file.size <= 0) {
      ctx.addIssue({
        code: 'custom',
        message: 'File size must be larger than 0 bytes.',
      });
    }
  }
});

export const ServerContactFormSchema = z
  .object({
    type: z.string().min(1, 'Please specify an inquiry type'),
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
    formType: z.enum(['contact', 'modal']),
    file: serverFileSchema.optional(),
  })
  .refine((data) => data.type.trim().length > 0, {
    message: 'Invalid inquiry type',
    path: ['type'],
  });

// additional file validation

const allowedExtensions = {
  'application/pdf': ['.pdf'],
  'application/msword': ['.doc', '.docx'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'video/mp4': ['.mp4'],
};

export const validateExtension = (
  fileName: string,
  mimeType: AllowedMimeType,
): boolean => {
  const extension = path.extname(fileName).toLowerCase();
  return allowedExtensions[mimeType].includes(extension) || false;
};

export const sanitizeFilename = (fileName: string) => {
  const validFilename = fileName
    .replace(/[^a-zA-Z0-9.]/g, '_')
    .replace(/_{2,}/g, '_');

  const extention = path.extname(fileName).toLowerCase();
  return path.basename(validFilename, extention) + extention;
};
