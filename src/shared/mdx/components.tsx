import * as stylex from '@stylexjs/stylex';
import type { Component, JSX } from 'solid-js';
import { Button } from '~/components/core/Button/Button';

export const components = {
	a: (props) => (
		<Button variant={'hyperlink'} as={'a'} style={styles.a} {...props} />
	),
} satisfies Partial<
	Record<keyof HTMLElementTagNameMap, Component<{ children: JSX.Element }>>
>;

const styles = stylex.create({
	a: {
		backgroundColor: 'red',
	},
});
