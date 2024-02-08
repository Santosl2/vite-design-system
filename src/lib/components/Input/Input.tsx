import { useEffect, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { TbAlertCircle } from 'react-icons/tb';
import * as S from './Input.styles';
import { InputProps } from './Input.types';

export function Input({
  controller,
  name,
  label,
  hasError,
  value,
  helpText,
  type,
  background = 'primary',
  isRequired = false,
  isPassword = false,
  startIcon,
  placeholder,
  defaultValue,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    const textSize = String(value || '');
    setIsFilled(textSize.length >= 1);
  }, [value]);

  return (
    <>
      <S.Wrapper
        isFilled={isFilled}
        hasError={!!hasError}
        isFocused={isFocused}
        background={background}
        hasIcon={!!startIcon}
      >
        {label && (
          <S.Label htmlFor={name}>
            {label}
            {isRequired && <span>*obrigatório</span>}
          </S.Label>
        )}
        <S.InputWrapper>
          {!!startIcon && <S.IconWrapper>{startIcon}</S.IconWrapper>}
          <input
            name={name}
            id={name}
            onFocus={() => setIsFocused(true)}
            {...controller}
            onBlur={() => setIsFocused(isFilled)}
            {...rest}
            type={inputType}
            placeholder={
              !value && isPassword && inputType === 'text' ? '' : placeholder
            }
            defaultValue={defaultValue}
          />

          {hasError ? (
            <>
              <S.AlertIconWrapper>
                <TbAlertCircle />
              </S.AlertIconWrapper>
              <S.Error>{hasError}</S.Error>
            </>
          ) : (
            <S.HelpText>{helpText}</S.HelpText>
          )}
          {isPassword && (
            <S.ShowPasswordButton
              type="button"
              onClick={() =>
                setInputType(inputType === 'password' ? 'text' : 'password')
              }
              hasError={!!hasError}
            >
              {inputType === 'password' ? <FiEye /> : <FiEyeOff />}
            </S.ShowPasswordButton>
          )}
        </S.InputWrapper>
      </S.Wrapper>
    </>
  );
}
