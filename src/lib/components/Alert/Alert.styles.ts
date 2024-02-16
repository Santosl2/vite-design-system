/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled, {
  type ExecutionContext,
  type Interpolation,
  css,
} from "styled-components";
import { Flex } from "..";
import {
  type PossibleAlertStyles,
  AlertProps,
  type PossibleAlertColors,
} from "./Alert.types";
import { type PossibleSizes } from "../../shared/interfaces/PossibleSizes.types";

const VARIANT_COLOR_PARSER: Record<PossibleAlertColors, string> = {
  primary: "primary",
  danger: "error",
  success: "success",
  warning: "attention",
  neutral: "neutral",
};
const variantsStyles: Record<PossibleAlertStyles, Interpolation<object>> = {
  outlined: css`
    border: 1px solid;
    background: transparent;
  `,
  plain: css`
    background: transparent;
    border: none;
  `,
  soft: css`
    ${({
      color = "primary",
      theme,
    }: ExecutionContext & { color?: PossibleAlertColors }) => {
      const parsedColor = VARIANT_COLOR_PARSER[color as PossibleAlertColors];
      // @ts-expect-error
      const colorFormatted = theme.colors[parsedColor || "primary"];

      return css`
        color: ${colorFormatted?.[700] ?? theme.colors.primary[700]};
        border-color: ${colorFormatted?.[300] ?? theme.colors.primary[300]};
        background-color: ${colorFormatted?.[50] ?? theme.colors.primary[50]};
      `;
    }}
  `,
  solid: css`
    color: #fff;
  `,
};

const sizeStyles: Record<PossibleSizes, Interpolation<object>> = {
  sm: css`
    padding: 0.5rem;
  `,
  md: css`
    padding: 0.75rem;
  `,
  lg: css`
    padding: 1rem;
  `,
};

const insertColor = (color: string) => css`
  background-color: ${color};
  border-color: ${color};
  color: ${color};
`;

const colorsStyles: Record<PossibleAlertColors, Interpolation<object>> = {
  primary: css`
    ${({ theme }) => {
      const cor = theme.hostCompany.cor;
      return insertColor(cor);
    }};
  `,
  danger: css`
    ${({ theme }) => {
      const cor = theme.colors.error[500];
      return insertColor(cor);
    }};
  `,
  success: css`
    ${({ theme }) => {
      const cor = theme.colors.success[500];
      return insertColor(cor);
    }};
  `,
  warning: css`
    ${({ theme }) => {
      const cor = theme.colors.attention[500];
      return insertColor(cor);
    }};
  `,
  neutral: css`
    ${({ theme }) => {
      const cor = theme.colors.neutral.primary;
      return insertColor(cor);
    }};
  `,
};

export const AlertWrapper = styled(Flex).attrs({
  gap: 10, //
})<Pick<AlertProps, "variant" | "size" | "color">>`
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.border.borderRadius.sm};
  flex: 1;
  min-width: 600px;
  border: 1px solid;

  button {
    color: inherit;
  }

  ${({ color = "primary", variant = "outlined", size = "lg" }) => css`
    ${sizeStyles[size]};
    ${colorsStyles[color]};
    ${variantsStyles[variant]};
  `}
`;
