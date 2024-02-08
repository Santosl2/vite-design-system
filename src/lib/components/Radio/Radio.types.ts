import type { FormEvent, ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import type { Sizes } from "../../shared/interfaces";

type OptionProps = {
  name: string;
  id: string | number;
};

export type RadioWithControllerProps = {
  controller?: UseFormRegisterReturn;
  hasError?: string;
  title?: string;
  options: Array<OptionProps>;
};

export interface RadioProps {
  id: string;
  children: ReactNode;
  defaultChecked?: boolean;
  onCheck?: (value: FormEvent) => void;
  value: string;
  size?: Sizes;
}
