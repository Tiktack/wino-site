import type { StyleXStyles } from '@stylexjs/stylex';

export type WithStyleX<T> = Omit<T, 'class' | 'classList' | 'style'> & {
  style?: StyleXStyles;
}