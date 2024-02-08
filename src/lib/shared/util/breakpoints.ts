import { type Interpolation, css } from "styled-components";
import { mediaQuery } from "../../theme/mediaQuery";

export type PossibleBreakpoints = keyof typeof mediaQuery;

function automaticBreakpoint(breakpoint: PossibleBreakpoints) {
  return (styles: string) => {
    return css`
      @media screen and (min-width: ${mediaQuery[breakpoint]}) {
        ${styles}
      }
    `;
  };
}

export const breakpoint: Record<
  PossibleBreakpoints,
  (styles: string) => Interpolation<any>
> = {
  mobile: automaticBreakpoint("mobile"),
  xs: automaticBreakpoint("xs"),
  sm: automaticBreakpoint("sm"),
  md: automaticBreakpoint("md"),
  lg: automaticBreakpoint("lg"),
  xl: automaticBreakpoint("xl"),
  "2xl": automaticBreakpoint("2xl"),
};
