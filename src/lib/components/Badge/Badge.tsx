import { Container } from "./styles";
import type { BadgeProps } from "./Badge.types";

export function Badge({ children, variant = "warning" }: BadgeProps) {
  return <Container variant={variant}>{children}</Container>;
}
