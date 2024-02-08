import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import type { Sizes } from "../interfaces/Sizes";

const sizes: Record<Sizes, FlattenSimpleInterpolation> = {
  lg: css`
    width: 1.5rem;
    height: 1.5rem;
    &:first-child svg {
      top: 5px;
      left: 4px;
    }
  `,
  md: css`
    width: 1.25rem;
    height: 1.25rem;
    &:first-child svg {
      top: 3px;
      left: 2px;
    }
  `,
  sm: css`
    width: 1rem;
    height: 1rem;
    &:first-child svg {
      top: 1px;
      left: 1px;
      stroke-dasharray: 13px;
    }
  `,
};

export const Wrapper = styled.div<{ size?: Sizes }>`
  ${({ theme, size = "md" }) => css`
    * {
      box-sizing: border-box;
    }

    .cbx {
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      padding: 6px 8px;
      border-radius: 4px;
      overflow: hidden;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .cbx:not(:last-child) {
      margin-right: 6px;
    }
    .cbx span {
      float: left;
      vertical-align: middle;
      transform: translate3d(0, 0, 0);
    }
    .cbx span:first-child {
      position: relative;
      ${sizes[size]}
      border-radius: 4px;
      transform: scale(1);
      border: 2px solid #9e9e9e;
      transition: all 0.2s ease;
      box-shadow: 0 1px 1px rgba(0, 16, 75, 0.05);
    }

    .cbx:hover {
      span:first-child {
        background-color: ${theme.colors.lightGray[600]};
      }
    }
    .cbx span:first-child svg {
      position: absolute;
      top: 2px;
      left: 1px;
      fill: none;
      stroke: #fff;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 15px;
      stroke-dashoffset: 15px;
      transition: all 0.3s ease;
      transition-delay: 0.1s;
      transform: translate3d(0, 0, 0);
    }
    .cbx span:last-child {
      padding-left: 8px;
      line-height: 18px;
    }

    .inp-cbx {
      position: absolute;
      visibility: hidden;
    }
    .inp-cbx:checked + .cbx span:first-child {
      background: ${theme.colors.blue[500]};
      border-color: ${theme.colors.blue[500]};
      animation: wave-4 0.4s ease;
    }
    .inp-cbx:checked + .cbx span:first-child svg {
      stroke-dashoffset: 0;
    }
    .inline-svg {
      position: absolute;
      width: 0;
      height: 0;
      pointer-events: none;
      user-select: none;
    }
    @media screen and (max-width: 640px) {
      .cbx {
        width: 100%;
        display: inline-block;
      }
    }
    @-moz-keyframes wave-4 {
      50% {
        transform: scale(0.9);
      }
    }
    @-webkit-keyframes wave-4 {
      50% {
        transform: scale(0.9);
      }
    }
    @-o-keyframes wave-4 {
      50% {
        transform: scale(0.9);
      }
    }
    @keyframes wave-4 {
      50% {
        transform: scale(0.9);
      }
    }

    label p {
      line-height: 22px;
      text-align: center;
    }

    @media (min-width: 1200px) {
      label p {
        text-align: left;
      }
    }
  `}
`;
