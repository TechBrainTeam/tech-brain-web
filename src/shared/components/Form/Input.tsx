import React from 'react';

type Props = {
  label: string;
  type?: string;
  error?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({
  label,
  error,
  type = 'text',
  icon,
  rightIcon,
  ...rest
}) => (
  <div className="group">
    <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors duration-200 group-focus-within:text-indigo-600">
      {label}
    </label>
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-200 group-focus-within:text-indigo-500">
          {icon}
        </div>
      )}
      <input
        type={type}
        className={`w-full bg-white border-2 px-3 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-4 transition-all duration-300 ease-out
          ${error
            ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
            : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-100 hover:border-gray-300'
          } 
          ${icon ? 'pl-10' : ''}
          ${rightIcon ? 'pr-10' : ''}
          placeholder:text-gray-400 placeholder:font-normal`}
        {...rest}
      />
      {rightIcon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer">
          {rightIcon}
        </div>
      )}
    </div>
    {error && (
      <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        {error}
      </p>
    )}
  </div>
);
