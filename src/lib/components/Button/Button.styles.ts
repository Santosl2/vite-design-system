import styled, { DefaultTheme, css, keyframes } from 'styled-components';
import { ButtonProps } from '.';

type ButtonModifiersProps = Omit<ButtonProps, 'children'>;

export type ButtonColors = 'error' | 'success' | 'light' | undefined;

export const buttonColors = {
  error: (theme: DefaultTheme) => theme.colors.lightRed[550],
  success: (theme: DefaultTheme) => theme.colors.lightGreen[400],
};

export const buttonVariants = {
  primary: (theme: DefaultTheme, color: ButtonColors) => css`
    background-color: ${!theme.hostCompany.isPartner
      ? theme.colors.blue[500]
      : theme.hostCompany.cor};
    color: ${theme.colors.white};

    ${color &&
    css`
      background-color: ${buttonColors[color](theme)};
      color: ${theme.colors.white};
      border: 2px solid ${buttonColors[color](theme)};
    `}

    &:disabled {
      background: ${theme.colors.gray[500]};
      border: 2px solid ${theme.colors.gray[500]};
    }
  `,
  outlined: (theme: DefaultTheme, color: ButtonColors) => css`
    background-color: transparent;
    border-radius: 4px;
    color: ${theme.hostCompany.cor};

    ${color &&
    css`
      color: ${buttonColors[color](theme)};
      border: 2px solid ${buttonColors[color](theme)};
    `}

    &:disabled {
      border: 2px solid ${theme.colors.gray[500]};
      color: ${theme.colors.gray[500]};
    }
  `,
  link: (theme: DefaultTheme, color: ButtonColors) => css`
    border: 0;
    color: ${theme.hostCompany.cor};
    background: transparent;
    font-weight: ${theme.fonts.weight.bold};

    ${color &&
    css`
      color: ${buttonColors[color](theme)};
    `}

    a,
    span,
    p,
    b,
    h1 {
      &:hover {
        text-decoration: underline;
      }
    }
  `,
  soft: (theme: DefaultTheme) => css`
    color: ${theme.colors.darkGray[325]};
    font-weight: ${theme.fonts.weight.bold};
    background-color: transparent;
    border: 1px solid ${theme.colors.lightGray[550]};
    transition: all ease-in-out 0.2s;
    padding: 0;

    &:hover {
      background-color: ${theme.colors.lightGray[150]};
      border-color: ${theme.colors.lightGray[150]};
      color: ${theme.colors.lightBlue[700]};
      filter: unset;
    }

    &:disabled {
      border: 1px solid ${theme.colors.lightGray[550]};
      color: ${theme.colors.darkGray[325]};
      opacity: 0.5;
    }
  `,
  plain: (theme: DefaultTheme) => css`
    font-weight: ${theme.fonts.weight.bold};
    transition: all ease-in-out 0.2s;
    background-color: ${theme.colors.lightBlue[650]};
    border: 2px solid ${theme.colors.lightBlue[650]};
    color: ${theme.colors.lightBlue[700]};

    &:hover {
      background-color: ${theme.colors.lightBlue[700]};
      color: ${theme.colors.white};
      border: 2px solid ${theme.colors.lightBlue[700]};
    }

    &:disabled {
      border: 2px solid ${theme.colors.darkGray[325]};
      color: ${theme.colors.darkGray[325]};
      opacity: 0.5;
    }
  `,
  classic: (theme: DefaultTheme, color: ButtonColors) => css`
    ${buttonVariants.primary(theme, color)}
    background-color: ${theme.hostCompany.cor_antiga};
    border: 2px solid ${theme.hostCompany.cor_antiga};
  `,
};

export const buttonSizes = {
  sm: (theme: DefaultTheme) => css`
    height: 2rem;
    font-size: ${theme.fonts.size.xs};
    padding: 0.125rem 0.75rem;
  `,

  md: (theme: DefaultTheme) => css`
    height: 2.5rem;
    font-size: ${theme.fonts.size.sm};
    width: 100%;
    max-width: 400px;
    padding: 0.25rem 1rem;

    @media (min-width: 720px) {
      width: auto;
    }
  `,
  lg: (theme: DefaultTheme) => css`
    height: 3rem;
    padding: 0.375rem 1.5rem;
    font-size: ${theme.fonts.size.md};
  `,
};

const borderModifiers = {
  small: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.borderRadius.sm};
  `,
  medium: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.borderRadius.md};
  `,
  full: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.borderRadiusButton.md};
  `,
};

export const Button = styled.button<ButtonModifiersProps>`
  ${({ theme, size, variant, width, isLoading, color, radius }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-size: ${theme.fonts.size.md};
    font-weight: bold;
    cursor: ${isLoading ? 'default' : 'pointer'};
    border: 2px solid
      ${!theme.hostCompany.isPartner
        ? theme.colors.blue[500]
        : theme.hostCompany.cor};
    background-color: transparent;
    color: ${theme.colors.blue[500]};
    width: ${width === 'full' ? '100%' : width ? `${width}rem` : 'auto'};
    position: relative;

    &:hover {
      filter: brightness(1.1);
    }

    &:hover:disabled {
      filter: brightness(0.9);
    }

    ${size && buttonSizes[size](theme)}
    ${variant && buttonVariants[variant](theme, color)}
    ${radius && borderModifiers[radius](theme)}
  `}
`;

type ButtonContentWrapperProps = {
  isLoading: boolean;
};

export const ButtonContentWrapper = styled.div<ButtonContentWrapperProps>`
  visibility: ${({ isLoading }) => (isLoading ? 'hidden' : 'visible')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  font-family: inherit;
`;

type IconWrapperProps = {
  iconPosition: 'left' | 'right';
};

export const IconWrapper = styled.span<IconWrapperProps>`
  ${({ iconPosition }) => css`
    display: flex;
    order: ${iconPosition === 'left' ? 0 : 1};
  `}
`;

export const spinnerAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.gray[200]};
    border-top: 2px solid ${theme.colors.gray[500]};
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    animation: ${spinnerAnimation} 1s linear infinite;
  `}
`;

type LoaderContentProps = {
  isLoading: boolean;
};

export const LoaderContent = styled.div<LoaderContentProps>`
  ${({ isLoading }) => css`
    visibility: ${isLoading ? 'visible' : 'hidden'};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
  `}
`;
