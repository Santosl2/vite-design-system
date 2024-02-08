import { InputHTMLAttributes, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import type { Sizes } from '../interfaces/Sizes';

export type CheckboxProps = {
  name: string;
  label?: ReactNode;
  isPassword?: boolean;
  size?: Sizes;
  controller?: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;
