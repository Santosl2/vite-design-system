import { FlexContainer } from "./Flex.styles";
import { FlexContainerProps, FlexProps } from "./Flex.types";

export function Flex({
  children,
  alignItems = "center",
  flexDirection = "row",
  justifyContent = "center",
  flexWrap = "nowrap",
  gap = 16,
  ...rest
}: FlexProps & FlexContainerProps) {
  return (
    <FlexContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      gap={gap}
      flexWrap={flexWrap}
      {...rest}
    >
      {children}
    </FlexContainer>
  );
}
