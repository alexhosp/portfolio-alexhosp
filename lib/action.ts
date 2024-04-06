'use server';

import { ServerContactFormSchema, AllowedMimeType } from '@/lib/auth';
import { validateExtension, sanitizeFilename } from '@/lib/auth';
import { z } from 'zod';
import { nanoid } from 'nanoid';
import { supabase } from '@/lib/supabase';
import { insertPotentialCustomer, PotentialCustomerData } from '@/lib/data';

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
  console.log('file: ', object.file);
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

  const bucketName = 'potential-customer-files';

  try {
    const { error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);
    if (error) {
      throw error; // upload error
    }
    try {
      const { data: signedUrlData, error: signedUrlError } =
        await supabase.storage
          .from(bucketName)
          .createSignedUrl(filePath, 365 * 24 * 60 * 60);

      if (signedUrlError) {
        throw signedUrlError; // url genration error
      }

      const signedUrl = signedUrlData.signedUrl;
      return signedUrl;
    } catch (error) {
      console.error(
        'Failed to create signed URL:',
        error instanceof Error ? error.message : 'Unknown error',
      );
      throw error;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log('Upload failed: ', error.message);
      // throw error to be handled in createPotentialCustomer
      throw error;
    }
  }
};

// add error handling for all possible validation errors, upload errors and database write errors
// errors are thrown in the functions called and need to be caught and handled here

/* eslint-disable-next-line */
export const createPotentialCustomer = async (formData: FormData) => {
  // this needs to accept the validated form data JS object
  const data = formData;
  const dataObject = formDataToObject(data);
  const validationResult = await validateFormData(dataObject);

  if (validationResult.success && validationResult.data) {
    const uniqueId = nanoid(14);
    const validatedData = validationResult.data;

    if (validatedData.file instanceof File) {
      const file = validatedData.file;
      const fileUrl = await formatAndStoreFile(file, uniqueId);

      delete validatedData.file;
      validatedData.fileUrl = fileUrl;
    }
    const potentialCustomerData: PotentialCustomerData = {
      uniqueId: uniqueId,
      inquiryType: validationResult.data.type as string,
      email: validationResult.data.email as string,
      message: validationResult.data.message as string,
      formType: validationResult.data.formType as string,
      fileUrl: validationResult.data.fileUrl as string | undefined,
    };
    try {
      await insertPotentialCustomer(potentialCustomerData);
      // along with success message return saved data here
      return { success: true, message: 'Recieved your message.' };
    } catch (error) {
      console.error('Error creating potential customer:', error);
      return {
        success: false,
        message:
          error instanceof Error ? error.message : 'Something went wrong',
      };
    }
  } else {
    console.error('Validation failed: ', validationResult.errors);
  }
};
