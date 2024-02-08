import * as S from "./Radio.styles";
import type { RadioProps, RadioWithControllerProps } from "./Radio.types";

export function RadioWithController({
  controller,
  hasError,
  title,
  options,
}: RadioWithControllerProps) {
  return (
    <S.Wrapper>
      <h3>{title}</h3>
      <S.FormWrapper>
        {options.map((option) => (
          <S.RadioWrapper key={option.id}>
            {option.name}
            <input type="radio" {...controller} value={option.id} />
            <span className="checkmark"></span>
          </S.RadioWrapper>
        ))}
      </S.FormWrapper>
      {hasError && <S.Error>{hasError}</S.Error>}
    </S.Wrapper>
  );
}

export function Radio({
  children,
  onCheck,
  value,
  defaultChecked = false,
  size = "md",
  id,
}: RadioProps) {
  return (
    <S.RadioWrapper size={size}>
      {children}
      <input
        type="radio"
        name={id}
        onClick={onCheck}
        defaultChecked={defaultChecked}
        value={value}
      />
      <span className="checkmark"></span>
    </S.RadioWrapper>
  );
}
