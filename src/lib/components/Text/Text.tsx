/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import { Container } from "./Text.styles";
import { TextProps } from "./Text.types";

export function Text({
  children,
  size = "md",
  fontWeight = "normal",
  fontFamily = "text",
  color,
  hasEllipsis = false,
  display = "flex",
  ...rest
}: TextProps) {
  return (
    <Container
      hasEllipsis={hasEllipsis}
      color={color}
      size={size}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      display={display}
      {...rest}
    >
      {children}
    </Container>
  );
}
