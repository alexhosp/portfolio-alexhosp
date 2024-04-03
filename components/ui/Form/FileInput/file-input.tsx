import { Input } from '@/ui/Form/FormInput/InputField/input';
import { Label } from '@/ui/Form/FormInput/Label/label';
import { useRef, useState } from 'react';

export const InputFile: React.FC<{
  className?: string;
  onChange?: (file: File | undefined) => void;
  onBlur?: () => void;
}> = ({ className, onChange, onBlur }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = () => {
    if (inputFileRef.current?.files) {
      const file =
        inputFileRef.current.files.length > 0
          ? inputFileRef.current.files[0]
          : undefined;
      setSelectedFileName(file?.name ?? '');
      if (onChange) {
        onChange(file);
      }
    } else {
      setSelectedFileName('');
      if (onChange) {
        onChange(undefined);
      }
    }
  };
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <div
      className={`${className} relative grid grid-cols-2 w-full max-w-sm items-center`}
    >
      <Label intent='labelAbove' htmlFor='file'>
        <span
          className={`bg-[var(--color-detail)] text-[var(--color-foreground)/80] px-4 py-2 rounded-full ${isFocused ? 'ring-2 ring-offset-1 ring-offset-[var(--color-accent-soft)] ring-[var(--color-accent)] ring-opacity-50 text-body text-[var(--color-foreground)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-foreground)]/80 focus:bg-[var(--color-background)] disabled:cursor-not-allowed disabled:opacity-50 transition-transform duration-150 ease-in-out' : ''}`}
        >
          Upload File
        </span>
      </Label>
      <div className='text-xs md:text-sm text-[var(--color-foreground)] p-2 rounded z-10 '>
        {selectedFileName || 'No file chosen'}
      </div>
      <Input
        fieldHeight='default'
        fieldWidth='full'
        id='file'
        type='file'
        aria-describedby='file_input'
        ref={inputFileRef}
        onChange={handleFileChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className='opacity-0 absolute inset-0 z-0'
      />
    </div>
  );
};
