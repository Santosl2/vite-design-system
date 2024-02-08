import { ComponentProps } from "react";
import { type CSSProperties } from "styled-components";
import type { PartialResponsive } from "../../shared/interfaces";

export type FlexProps = ComponentProps<"div"> & {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

export type FlexContainerProps = {
  justifyContent?:
    | CSSProperties["justifyContent"]
    | PartialResponsive<CSSProperties["justifyContent"]>;
  alignItems?:
    | CSSProperties["alignItems"]
    | PartialResponsive<CSSProperties["alignItems"]>;
  flexDirection?:
    | CSSProperties["flexDirection"]
    | PartialResponsive<CSSProperties["flexDirection"]>;
  flexWrap?:
    | CSSProperties["flexWrap"]
    | PartialResponsive<CSSProperties["flexWrap"]>;
  gap: number | PartialResponsive<string>;
};
