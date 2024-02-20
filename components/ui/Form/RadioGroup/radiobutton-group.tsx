'use client';

import * as React from 'react';
import { useState } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Control, Controller } from 'react-hook-form';
import { Heading } from '@/ui/Heading/heading';
import { Label } from '@/ui/Form/FormInput/Label/label';
import { Input } from '@/ui/Form/FormInput/InputField/input';
import { FormInput } from '../form';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: 'radioGroup';
  options: RadioOption[];
  title: string;
  control: Control<FormInput>;
  onOtherValueChange?: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  title,
  control,
  onOtherValueChange,
}) => {
  const [otherValue, setOtherValue] = useState('');

  return (
    <>
      <Heading as='h3' color='default' size='h3Small' className='text-left'>
        {title}
      </Heading>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <RadioGroupPrimitive.Root
            onValueChange={(value) => {
              if (value === 'other') {
                field.onChange(value);
              } else {
                field.onChange(value);
                if (value !== 'other') {
                  setOtherValue('');
                }
              }
            }}
            value={field.value} // current value of the controlled component
            className='flex flex-col gap-2'
          >
            {options.map((option) => (
              <div key={option.value} className='flex items-center'>
                <RadioGroupPrimitive.Item
                  id={`${name}-${option.value}`}
                  value={option.value} // set value of the controlled component to option chosen
                  className='w-4 h-4 relative border-2 border-[var(--color-primary)] rounded-full my-1 ml-1 mr-2'
                >
                  <RadioGroupPrimitive.Indicator className='absolute inset-0 bg-[var(--color-accent)] rounded-full' />
                </RadioGroupPrimitive.Item>
                <Label intent='labelAbove' htmlFor={`${name}-${option.value}`}>
                  {option.label}
                </Label>
              </div>
            ))}
            <div className='flex items-center'>
              <RadioGroupPrimitive.Item
                id={`${name}-other`}
                value='other' // set value, this triggers the onValueChange event
                className='w-4 h-4 relative border-2 border-[var(--color-primary)] rounded-full my-1 ml-1 mr-2'
              >
                <RadioGroupPrimitive.Indicator className='absolute inset-0 bg-[var(--color-accent)] rounded-full' />
              </RadioGroupPrimitive.Item>
              <Label intent='labelAbove' htmlFor={`${name}-other`}>
                Other
              </Label>
              {field.value === 'other' && (
                <Input
                  label=''
                  as='input'
                  fieldSize='small'
                  type='text'
                  value={otherValue}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setOtherValue(newValue);
                    if (onOtherValueChange) {
                      onOtherValueChange(newValue);
                    }
                  }}
                  placeholder='Please specify'
                  className='ml-2 text-[var(--color-foreground)] bg-[var(--background-color)] max-w-[75%]'
                />
              )}
            </div>
          </RadioGroupPrimitive.Root>
        )}
      />
    </>
  );
};

export default RadioGroup;
