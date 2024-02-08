const ROOT_FONT_SIZE = 16;

export const valueToRem = (value: number) =>
  (value / ROOT_FONT_SIZE).toString().concat("rem");
