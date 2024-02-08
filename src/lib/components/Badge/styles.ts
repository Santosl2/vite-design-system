/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import styled, { css, type DefaultTheme } from "styled-components";
import { BadgeModifiersType, BadgeTypeProps } from "./Badge.types";

const BadgeModifiers: BadgeModifiersType = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.lightGreen[100]};
    color: ${theme.colors.lightGreen[700]};
  `,
  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.orange[500]};
    color: ${theme.colors.orange[600]};
  `,
  danger: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.lightRed[200]};
    color: ${theme.colors.lightRed[300]};
  `,
  info: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.lightGray[100]};
    color: ${theme.colors.lightGray[200]};
  `,
};

export const Container = styled.span<BadgeTypeProps>`
  ${({ theme, variant = "warning" }) => css`
    border-radius: 50px;
    padding: 0.2rem 0.5rem;
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.size.sm};

    ${variant && BadgeModifiers[variant.toString()](theme)}
  `}
`;
