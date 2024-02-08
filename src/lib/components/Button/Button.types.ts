import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { buttonSizes, buttonVariants } from "./Button.styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    width?: string | "full";
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    isLoading?: boolean;
    loadingText?: string;
    color?: "error" | "success";
    radius?: "small" | "medium" | "full";
  };

export type Variant = keyof typeof buttonVariants;

export type Size = keyof typeof buttonSizes;
