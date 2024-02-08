import * as S from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

export function Checkbox({ controller, name, label, size }: CheckboxProps) {
  return (
    <S.Wrapper className="checkbox" size={size}>
      <input className="inp-cbx" id={name} type="checkbox" {...controller} />
      <label className="cbx" htmlFor={name}>
        <span>
          <svg width="12px" height="10px">
            <use xlinkHref="#check-4"></use>
          </svg>
        </span>
        <p>{label}</p>
      </label>
      <svg className="inline-svg">
        <symbol id="check-4">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>
    </S.Wrapper>
  );
}
