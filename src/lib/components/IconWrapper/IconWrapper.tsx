import { type ReactNode } from "react";
import * as S from "./IconWrapper.styles";

export function IconWrapper({ children }: { children: ReactNode }) {
  return <S.IconWrapper>{children}</S.IconWrapper>;
}
