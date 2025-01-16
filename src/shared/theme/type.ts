import type { StyleXStyles } from '@stylexjs/stylex';

// TODO: rename to `types`
// TODO: this breaks typescript for `variant` prop in `Button` component
export type WithStyleX<T> = Omit<T, 'class' | 'classList' | 'style'> & {
	style?: StyleXStyles;
};
