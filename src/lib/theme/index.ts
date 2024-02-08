import { CustomTheme, DefaultTheme } from "styled-components";

import { border } from "./border";
import { boxShadow } from "./boxShadow";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { mediaQuery } from "./mediaQuery";
import { WhitelabelProps } from "../shared/interfaces/Whitelabel.types";

export const theme = {
  colors,
  fonts,
  mediaQuery,
  border,
  boxShadow,
};

type NewHostCompany = {
  hostCompany: WhitelabelProps;
};

export function combineTheme(
  whitelabel: CustomTheme | NewHostCompany
): DefaultTheme {
  return { ...theme, ...whitelabel };
}
