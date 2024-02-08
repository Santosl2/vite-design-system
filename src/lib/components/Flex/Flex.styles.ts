import styled from "styled-components";

import { type FlexContainerProps } from "./Flex.types";
import { insertResponsiveCSS } from "../../shared/util/responsive";
import { valueToRem } from "../../shared/util/to-rem";

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${({ gap }) => insertResponsiveCSS("gap", gap, valueToRem(gap as number))};

  ${({ justifyContent }) =>
    insertResponsiveCSS("justifyContent", justifyContent)}

  ${({ alignItems }) => insertResponsiveCSS("alignItems", alignItems)};

  ${({ flexDirection }) => insertResponsiveCSS("flexDirection", flexDirection)};

  ${({ flexWrap }) => insertResponsiveCSS("flexWrap", flexWrap)};
`;
