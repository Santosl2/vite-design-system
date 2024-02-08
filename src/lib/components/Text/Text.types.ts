import type { ReactNode } from "react";
import type { DefaultTheme, CSSObject } from "styled-components";
import type { PartialResponsive } from "../../shared/interfaces";

export type Size = keyof DefaultTheme["fonts"]["size"];
export type FontFamily = keyof DefaultTheme["fonts"]["family"];
export type FontWeight = keyof DefaultTheme["fonts"]["weight"];
export type Display = CSSObject["display"];

export interface ContainerProps {
  size: Size | PartialResponsive<Size>;
  fontWeight: FontWeight | PartialResponsive<FontWeight>;
  hasEllipsis: boolean;
  fontFamily: FontFamily | PartialResponsive<FontFamily>;
  display: Display | PartialResponsive<Display>;
}

export interface TextProps {
  children: ReactNode;
  size?: Size | PartialResponsive<string>;
  fontWeight?: FontWeight | PartialResponsive<string>;
  color?: string;
  hasEllipsis?: boolean;
  fontFamily?: FontFamily | PartialResponsive<string>;
  as?: keyof JSX.IntrinsicElements;
  display?: Display | PartialResponsive<string>;
}
