import styled, { type Interpolation, css } from "styled-components";
import { type Sizes } from "../../shared/interfaces";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  h3 {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-weight: 400;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.3rem;
`;

export const Error = styled.span`
  ${({ theme }) => css`
    position: absolute;
    z-index: 3;
    top: calc(100% + 0.2rem);
    left: 0;
    font-size: 12px;
    color: ${theme.colors.red};
  `}
`;

const sizes: Record<Sizes, Interpolation<any>> = {
  sm: css`
    span {
      width: 1rem;
      height: 1rem;
      &:after {
        width: 10px;
        height: 10px;
      }
    }
  `,
  md: css`
    span {
      width: 1.25rem;
      height: 1.25rem;
      &:after {
        width: 12px;
        height: 12px;
      }
    }
  `,
  lg: css`
    padding-left: 30px;

    span {
      width: 1.5rem;
      height: 1.5rem;

      &:after {
        width: 16px;
        height: 16px;
      }
    }
  `,
};

export const RadioWrapper = styled.label<{ size: Sizes }>`
  ${({ theme, size = "md" }) => css`
    font-family: ${theme.fonts.family.text};
    color: ${theme.colors.darkGray[350]};
    display: block;
    position: relative;
    padding-left: 25px;
    height: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.8rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    span {
      position: absolute;
      top: calc(50% - 9px);
      left: 0;
      height: 18px;
      width: 18px;
      background-color: white;
      border-radius: 100%;
      border: 2px solid #9e9e9e;
      display: grid;
      place-items: center;

      &:hover {
        box-shadow: ${theme.colors.lightGray[600]} 0px 1px 6px,
          ${theme.colors.lightGray[600]} 0px 0px 0px 4px;
      }
    }

    input:checked ~ span {
      background-color: white;
      border: 2px solid ${theme.colors.blue[500]};
      &:hover {
        box-shadow: ${theme.colors.lightBlue[650]} 0px 1px 6px,
          ${theme.colors.lightBlue[650]} 0px 0px 0px 4px;
      }
    }

    span:after {
      content: "";
      display: none;
    }

    input:checked ~ span:after {
      display: block;
    }

    span:after {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${theme.colors.blue[500]};
    }

    ${sizes[size]}
  `}
`;
