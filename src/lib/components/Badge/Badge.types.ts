import type { DefaultTheme } from 'styled-components';

export type BadgeTypes = 'success' | 'warning' | 'danger' | 'info';

export type BadgeTypeProps = {
  variant?: BadgeTypes;
};

export type BadgeModifiersType = Record<
  BadgeTypes,
  (theme: DefaultTheme) => void
>;

export type BadgeProps = Partial<BadgeTypeProps> & {
  children: React.ReactNode;
};
