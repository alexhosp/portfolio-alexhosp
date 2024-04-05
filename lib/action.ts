'use server';

import { ServerContactFormSchema, AllowedMimeType } from '@/lib/auth';
import { validateExtension, sanitizeFilename } from '@/lib/auth';
import { z } from 'zod';
import { nanoid } from 'nanoid';
import { supabase } from '@/lib/supabase';

interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: string[];
}

const formDataToObject = (formData: FormData): Record<string, unknown> => {
  const object: Record<string, unknown> = {};

  for (const [key, value] of formData.entries()) {
    object[key] = value;
  }
  return object;
};

const validateFormData = async (
  dataObject: Record<string, unknown>,
  /* eslint-disable-next-line */
): Promise<ValidationResult<Record<string, unknown>>> => {
  try {
    const zodValidatedData = ServerContactFormSchema.parse(dataObject);
    if (zodValidatedData.file instanceof File) {
      const file: File = zodValidatedData.file;

      const mimeType: AllowedMimeType = file.type as AllowedMimeType;
      const sanitizedFileName = sanitizeFilename(file.name);

      const isExtentionValid = validateExtension(sanitizedFileName, mimeType);
      if (!isExtentionValid) {
        return { success: false, errors: ['Invalid file extension'] };
      }
    }
    // If the file extension is valid, return success and the validated data
    return { success: true, data: zodValidatedData };
  } catch (error) {
    // Handle validation errors from Zod
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.errors.map((e) => `${e.path.join('.')} : ${e.message}`),
      };
    } else {
      // Handle other unexpected errors
      const errorMessage =
        error instanceof Error ? error.message : 'An unexpected error occurred';
      return {
        success: false,
        errors: [errorMessage],
      };
    }
  }
};

// requires Blob to upload to supabase
const formatAndStoreFile = async (file: File, uniqueId: string) => {
  const { type, name } = file;
  const fileExtention = name.split('.').pop();

  const mimeTypeToSubdir = {
    'application/pdf': 'pdfs',
    'application/msword': 'docs',
    'image/jpeg': 'images',
    'image/png': 'images',
    'video/mp4': 'videos',
  };

  const subdir =
    type in mimeTypeToSubdir
      ? mimeTypeToSubdir[type as keyof typeof mimeTypeToSubdir]
      : 'others';
  const filePath = `${subdir}/${uniqueId}.${fileExtention}`;

  try {
    const { data, error } = await supabase.storage
      .from('potential-customer-files')
      .upload(filePath, file);
    if (error) {
      throw error;
    }
    console.log('Upload successful: ', data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log('Upload failed: ', error.message);
      // throw error to be handled in createPotentialCustomer
      throw error;
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
    const uniqueId = nanoid(14);
    const validatedData = validationResult.data;
    if (validatedData?.file instanceof File) {
      console.log('validated file: ', validatedData.file);
      await formatAndStoreFile(validatedData.file, uniqueId);
    }

    console.log('allData:', uniqueId, validationResult.success, validatedData);
  } else {
    console.error('Validation failed: ', validationResult.errors);
  }
};
