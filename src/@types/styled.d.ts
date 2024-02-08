import "styled-components";

import { WhitelabelProps } from "../shared/interfaces/Whitelabel.types";
import { theme } from "../lib";

export type Theme = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {
    hostCompany: WhitelabelProps;
  }
  export interface CustomTheme {
    hostCompany: WhitelabelProps;
  }
}
