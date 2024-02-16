import type { ReactNode } from "react";
import { PossibleSizes } from "../../shared/interfaces/PossibleSizes.types";

export type PossibleAlertStyles = "outlined" | "plain" | "soft" | "solid";
export type PossibleAlertColors =
  | "neutral"
  | "primary"
  | "danger"
  | "success"
  | "warning";

export interface AlertProps {
  color?: PossibleAlertColors;
  variant?: PossibleAlertStyles;
  endDecorator?: ReactNode;
  startDecorator?: ReactNode;
  size?: PossibleSizes;
  children: ReactNode;
}

export interface AlertChildrenProps {
  children: ReactNode;
}
