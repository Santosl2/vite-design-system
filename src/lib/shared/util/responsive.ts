import { type CSSProperties } from "styled-components";
import { mediaQuery } from "../../theme/mediaQuery";
import { type PossibleBreakpoints, breakpoint } from "./breakpoints";

export type Responsive<T> = {
  [key in keyof typeof mediaQuery]: T;
};

function toKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function formatToCss(cssProperty: keyof CSSProperties, value: any) {
  return `
    ${toKebabCase(cssProperty)}: ${value};
  `;
}

export function insertResponsiveCSS(
  cssProperty: keyof CSSProperties,
  data: any,
  formattedData?: string
) {
  if (typeof data !== "object")
    return formatToCss(cssProperty, formattedData ?? data);

  return Object.entries(data).map(([key, value]) => {
    return breakpoint[key as PossibleBreakpoints](
      formatToCss(cssProperty, value)
    );
  });
}
