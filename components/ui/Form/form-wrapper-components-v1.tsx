import * as React from 'react';
import * as FormPrimitive from '@radix-ui/react-form';

interface FormFieldProps {
  children: React.ReactNode;
  name: string;
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ name, children }, ref) => {
    return (
      <FormPrimitive.Field ref={ref} name={name} className='grid mb-6'>
        {children}
      </FormPrimitive.Field>
    );
  }
);

FormField.displayName = 'FormField';
