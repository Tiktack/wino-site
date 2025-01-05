import * as ButtonPrimitive from '@kobalte/core/button';
import type { PolymorphicProps } from '@kobalte/core/polymorphic';
import * as stylex from '@stylexjs/stylex';
import type { JSX, ValidComponent } from 'solid-js';
import { splitProps } from 'solid-js';
import type { WithStyleX } from '~/shared/theme/type';

type IconButtonProps<T extends ValidComponent = 'button'> =
	ButtonPrimitive.ButtonRootProps<T> & {
		children: JSX.Element;
	};

export const IconButton = <T extends ValidComponent = 'button'>(
	props: WithStyleX<PolymorphicProps<T, IconButtonProps<T>>>,
) => {
	const [local, others] = splitProps(props as WithStyleX<IconButtonProps>, [
		'children',
		'style',
	]);

	return (
		<ButtonPrimitive.Root
			{...stylex.attrs(styles.base, local.style)}
			{...others}
		>
			{local.children}
		</ButtonPrimitive.Root>
	);
};

const styles = stylex.create({
	base: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		outline: 'none',
		border: 'none',
		boxSizing: 'border-box',
		minInlineSize: '30px',
		minBlockSize: '30px',
		padding: '8px',
		color: 'var(--text-primary)',
		borderRadius: 'var(--control-corner-radius)',
		backgroundColor: 'var(--subtle-fill-transparent)',
		':focus-visible': {
			boxShadow: 'var(--focus-stroke)',
		},
		':hover': {
			backgroundColor: 'var(--subtle-fill-secondary)',
		},
		':active': {
			backgroundColor: 'var(--subtle-fill-tertiary)',
		},
		':disabled': {
			backgroundColor: 'var(--subtle-fill-disabled)',
			color: 'var(--text-disabled)',
		},
	},
});
