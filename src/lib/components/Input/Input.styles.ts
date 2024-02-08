import styled, { DefaultTheme, css } from "styled-components";

type InputWrapperProps = {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
  background: "primary";
  hasIcon: boolean;
};

type ShowPasswordButtonProps = {
  hasError: boolean;
};

const wrapperModifiers = {
  primary: (theme: DefaultTheme, hasError: boolean, hasIcon: boolean) => css`
    height: auto;
    position: relative;
    background-color: ${theme.colors.white};
    label {
      display: flex;
      gap: 0.5rem;
      font-size: 14px;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: ${theme.colors.colorText.darkGrey};

      span {
        color: ${theme.colors.darkGray[350]};
        font-size: 12px;
        font-weight: 400;
        align-self: flex-end;
      }
    }
    input {
      display: block;
      padding: ${hasIcon ? "10px 0 10px 35px" : "10px 16px"};
      border: 1px solid ${theme.colors.silver[100]};
      border-radius: 4px;
      background-color: ${theme.colors.white};

      transition: border 0.1s ease-in-out;

      ${!hasError &&
      css`
        &:focus {
          border: 1px solid ${theme.colors.blue[500]};
          box-shadow: rgba(226, 243, 255, 1) 0px 0px 0px 2px inset,
            rgba(226, 243, 255, 1) 0px 0px 0px 2px;
        }
      `}

      ${hasError &&
      css`
        border: 1px solid ${theme.colors.lightRed[550]};
      `}

      &::placeholder {
        color: ${theme.colors.darkGray[350]};
      }
    }
  `,
};

export const Wrapper = styled.div<InputWrapperProps>`
  ${({ theme, background, hasError, hasIcon }) => css`
    width: 100%;
    max-width: 400px;
    position: relative;
    margin-bottom: 0.5rem;
    input {
      height: 48px;
      top: 0;
      left: 0;
      width: 100%;
      background: transparent;
      border: none;
      z-index: 2;
      outline: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px ${theme.colors.white} inset;
      -webkit-text-fill-color: #333;
    }

    ${wrapperModifiers[background](theme, hasError, hasIcon)}

    @media (max-width: 500px) {
      input {
        font-size: 16px;
      }
    }
  `}
`;

export const Label = styled.label``;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Error = styled.span`
  ${({ theme }) => css`
    position: absolute;
    z-index: 0;
    top: calc(100% + 0.4rem);
    left: 0;
    font-size: 12px;
    color: ${theme.colors.red};
  `}
`;

export const HelpText = styled.span`
  ${({ theme }) => css`
    position: absolute;
    z-index: 3;
    top: calc(100% + 0.4rem);
    left: 0;
    font-size: 12px;
    color: ${theme.colors.colorText.lightGrey};
  `}
`;

export const ShowPasswordButton = styled.button<ShowPasswordButtonProps>`
  ${({ theme, hasError }) => css`
    border: none;
    height: 34px;
    width: 34px;
    position: absolute;
    right: ${hasError ? "32px" : "5px"};
    top: calc(50% - 17px);
    background-color: transparent;
    display: grid;
    place-items: center;

    svg {
      height: 18px;
      width: 18px;
    }
    color: ${theme.colors.colorText.lightGrey};
  `}
`;

export const AlertIconWrapper = styled.span`
  ${({ theme }) => css`
    position: absolute;
    display: grid;
    place-items: center;
    height: 34px;
    width: 34px;
    right: 5px;
    top: calc(50% - 17px);

    svg {
      height: 19px;
      width: 19px;
      color: ${theme.colors.lightRed[550]};
    }
  `}
`;

export const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;

  height: 100%;

  svg {
    width: 18px;
    height: 18px;
  }

  color: ${(props) => props.theme.colors.colorText.icon};
`;
