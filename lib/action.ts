'use server';

import { ServerContactFormSchema, AllowedMimeType } from '@/lib/auth';
import { validateExtension, sanitizeFilename } from '@/lib/auth';
import { z } from 'zod';
import sharp from 'sharp';

interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: string[];
}

const formDataToObject = (formData: FormData): Record<string, unknown> => {
  const object: Record<string, unknown> = {};

  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string') {
      object[key] = value;
    } else if (value instanceof File) {
      object[key] = {
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
    const mutableDataObject = { ...dataObject };

    if (mutableDataObject.file) {
      const file = mutableDataObject.file as {
        mimetype: AllowedMimeType;
        name: string;
        size: number;
      };

      file.name = sanitizeFilename(file.name);
      /* 
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        console.log(`File is a valid PNG or JPEG: ${(file.name, typeof file)}`);
      } */
    }
    const zodValidatedData = ServerContactFormSchema.parse(mutableDataObject);

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
