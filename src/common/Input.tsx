import { AllHTMLAttributes } from 'react';

export const Input = ({
  label,
  id,
  ...props
}: {
  label: string;
  id: string;
} & AllHTMLAttributes<HTMLElement>) => {
  return (
    <div className='form-control py-4'>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        {...props}
        placeholder={label}
        className='border rounded py-2 px-4'
      />
    </div>
  );
};
