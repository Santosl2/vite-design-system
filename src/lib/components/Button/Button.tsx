import { ButtonProps } from './Button.types';
import * as S from './Button.styles';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = false,
  iconPosition = 'right',
  width,
  isLoading = false,
  loadingText = '',
  disabled = false,
  color = undefined,
  radius = 'small',
  ...props
}: ButtonProps) {
  const isDisabled = isLoading || disabled;

  return (
    <S.Button
      variant={variant}
      size={size}
      width={width}
      isLoading={isLoading}
      iconPosition={iconPosition}
      disabled={isDisabled}
      color={color}
      radius={radius}
      {...props}
    >
      <S.ButtonContentWrapper isLoading={isLoading}>
        {icon && iconPosition && (
          <S.IconWrapper iconPosition={iconPosition}>{icon}</S.IconWrapper>
        )}
        {isLoading && loadingText ? '' : children}
        {isLoading && loadingText}
      </S.ButtonContentWrapper>

      <S.LoaderContent isLoading={isLoading}>
        {loadingText}
        <S.Spinner data-testid="loading" />
      </S.LoaderContent>
    </S.Button>
  );
}
