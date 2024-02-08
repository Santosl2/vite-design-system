import styled, { css } from "styled-components";
import type { ContainerProps } from "./Text.types";
import { insertResponsiveCSS } from "../../shared/util/responsive";

export const Container = styled.p<ContainerProps>`
  ${({
    theme,
    size,
    fontWeight,
    color,
    hasEllipsis,
    fontFamily,
    display,
  }) => css`
    ${insertResponsiveCSS(
      "fontSize",
      typeof size === "string" ? theme.fonts.size[size] : size
    )}
    ${insertResponsiveCSS(
      "fontWeight",
      typeof fontWeight === "string"
        ? theme.fonts.weight[fontWeight]
        : fontWeight
    )}
    ${insertResponsiveCSS(
      "fontFamily",
      typeof fontFamily === "string"
        ? theme.fonts.family[fontFamily]
        : fontFamily
    )}
    ${insertResponsiveCSS("lineHeight", size)}
    ${insertResponsiveCSS("color", color)}

    color: ${color || theme.colors.colorText.lightGrey};

    ${hasEllipsis
      ? css`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `
      : css`
          ${insertResponsiveCSS("display", display)}
          flex-wrap: wrap;
        `}

    strong {
      color: ${theme.colors.darkGray[250]};
    }
  `}
`;
