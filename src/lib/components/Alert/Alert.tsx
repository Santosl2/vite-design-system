/* eslint-disable @typescript-eslint/ban-ts-comment */
import { HStack, Text, VStack } from "..";
import { IconWrapper } from "../IconWrapper";
import { AlertWrapper } from "./Alert.styles";
import type { AlertChildrenProps, AlertProps } from "./Alert.types";

function Alert({
  children,
  endDecorator,
  size = "lg",
  startDecorator,
  variant = "outlined",
  color = "primary",
}: AlertProps) {
  return (
    <AlertWrapper gap={2} variant={variant} size={size} color={color}>
      <HStack gap={10} flex={1}>
        <IconWrapper>{startDecorator}</IconWrapper>
        <VStack gap={1}>{children}</VStack>
      </HStack>
      <IconWrapper>{endDecorator}</IconWrapper>
    </AlertWrapper>
  );
}

Alert.Title = function ({ children }: AlertChildrenProps) {
  return (
    <Text as="h2" size="md" fontWeight="semibold" color="inherit">
      {children}
    </Text>
  );
};

Alert.Description = function ({ children }: AlertChildrenProps) {
  return (
    <Text as="p" size="md" color="inherit">
      {children}
    </Text>
  );
};

// @ts-expect-error
Alert.Title.displayName = "Alert.Title";
// @ts-expect-error
Alert.Description.displayName = "Alert.Description";

export { Alert };
