import { InputHTMLAttributes, ReactNode } from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

export type InputProps = {
  name: string;
  label?: string;
  background?: "primary";
  isRequired?: boolean;
  isFilled?: string;
  hasError?: string;
  helpText?: string;
  startIcon?: ReactNode;
  isPassword?: boolean;
  controller?: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;
