'use server';

import { ServerContactFormSchema, AllowedMimeType } from '@/lib/auth';
import { validateExtension } from '@/lib/auth';
import { z } from 'zod';

interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: string[];
}

const formDataToObject = (formData: FormData): Record<string, unknown> => {
  const object: Record<string, unknown> = {};

  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string') {
      object[key as string] = value;
    } else if (value instanceof File) {
      object[key as string] = {
        mimetype: value.type,
        size: value.size,
        name: value.name,
        // include more file information if needed
      };
    }
  }
  return object;
};

const validateFormData = async (
  dataObject: Record<string, unknown>,
  /* eslint-disable-next-line */
): Promise<ValidationResult<Record<string, unknown>>> => {
  try {
    const zodValidatedData = ServerContactFormSchema.parse(dataObject);
    // additional validation for the file
    if (zodValidatedData.file) {
      const { mimetype, name } = zodValidatedData.file as {
        mimetype: AllowedMimeType;
        name: string;
      };
      const isExtentionValid = validateExtension(name, mimetype);
      if (!isExtentionValid) {
        return { success: false, errors: ['Invalid file extension'] };
      }
    }
    return { success: true, data: zodValidatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.errors.map((e) => `${e.path.join('.')} : ${e.message}`),
      };
    } else {
      const errorMessage =
        error instanceof Error ? error.message : 'An unexpected error occurred';
      return {
        success: false,
        errors: [errorMessage],
      };
    }
  }
};

/* eslint-disable-next-line */
export const createPotentialCustomer = async (formData: FormData) => {
  // this needs to accept the validated form data JS object
  const data = formData;
  const dataObject = formDataToObject(data);
  const validationResult = await validateFormData(dataObject);

  if (validationResult.success) {
    console.log(validationResult.success, validationResult.data);
  } else {
    console.error('Validation failed: ', validationResult.errors);
  }
};

// To Do: add a basic sanitization function, this is a basic idea of it
/* const sanitizeFileName = (fileName) => {
  return fileName.replace(/[^a-z0-9_\-\.]/gi, '_').toLowerCase();
};
 */

// add validation for image files and videos?
// https://chat.openai.com/c/21ce20aa-0aa8-4b6f-b6d8-4f1df8a09157
