'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { Controller, useFormContext } from 'react-hook-form';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, options }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroupPrimitive.Root {...field} className='flex flex-col gap-2'>
          {options.map((option) => (
            <div key={option.value} className='flex items-center'>
              <RadioGroupPrimitive.Item
                id={`${name}-${option.value}`}
                value={option.value}
                className='w-4 h-4'
              />
              <label htmlFor={`${name}-${option.value}`} className='ml-2'>
                {option.label}
              </label>
            </div>
          ))}
        </RadioGroupPrimitive.Root>
      )}
    />
  );
};
