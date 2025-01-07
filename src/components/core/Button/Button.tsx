import * as ButtonPrimitive from '@kobalte/core/button';
import type { PolymorphicProps } from '@kobalte/core/polymorphic';
import * as stylex from '@stylexjs/stylex';
import type { JSX, ValidComponent } from 'solid-js';
import { splitProps } from 'solid-js';
import { base, colors } from '~/shared/theme/tokens.stylex';
import type { WithStyleX } from '~/shared/theme/type';

type ButtonProps<T extends ValidComponent = 'button'> =
	ButtonPrimitive.ButtonRootProps<T> & {
		children: JSX.Element;
		variant?: 'standard' | 'accent' | 'hyperlink';
	};

export const Button = <T extends ValidComponent = 'button'>(
	props: WithStyleX<PolymorphicProps<T, ButtonProps<T>>>,
) => {
	const [local, others] = splitProps(props as WithStyleX<ButtonProps>, [
		'variant',
		'style',
	]);

	const variant = () => local.variant ?? 'standard';

	return (
		<ButtonPrimitive.Root
			{...others}
			{...stylex.attrs(styles.base, styles[variant()], local.style)}
		/>
	);
};

const styles = stylex.create({
	base: {
		position: 'relative',
		boxSizing: 'border-box',
		paddingBlock: '4px 6px',
		paddingInline: '11px',
		textDecoration: 'none',
		border: 'none',
		outline: 'none',
		cursor: 'default',
		width: 'fit-content',
		fontSize: base.bodyFontSize,
		borderRadius: base.controlCornerRadius,
		transition: 'var(--control-faster-duration) ease background',
		':focus-visible': {
			boxShadow: 'var(--focus-stroke)',
		},
		':disabled': {
			pointerEvents: 'none',
		},
	},
	standard: {
		border: '1px solid',
		borderColor: 'var(--control-border-default)',
		backgroundColor: 'var(--control-fill-default)',
		color: colors.textPrimary,
		backgroundClip: 'padding-box',
		':hover': {
			backgroundColor: 'var(--control-fill-secondary)',
		},
		':active': {
			borderColor: 'var(--control-stroke-default)',
			backgroundColor: 'var(--control-fill-tertiary)',
			color: colors.textSecondary,
		},
		':disabled': {
			borderColor: 'var(--control-stroke-default)',
			backgroundColor: 'var(--control-fill-disabled)',
			color: colors.textDisabled,
		},
	},
	accent: {
		border: '1px solid var(--control-stroke-on-accent-default)',
		borderBottomColor: 'var(--control-stroke-on-accent-secondary)',
		backgroundColor: colors.accentDefault,
		color: colors.textOnAccentPrimary,
		transition: 'var(--control-faster-duration) ease border-color',
		':hover': {
			backgroundColor: colors.accentSecondary,
		},
		':active': {
			borderColor: 'var(--control-stroke-on-accent-tertiary)',
			backgroundColor: colors.accentTertiary,
			color: colors.textOnAccentSecondary,
		},
		':disabled': {
			borderColor: 'var(--control-stroke-on-accent-default)',
			backgroundColor: 'var(--control-fill-disabled)',
			color: colors.textOnAccentDisabled,
		},
	},
	hyperlink: {
		backgroundColor: colors.subtleFillTransparent,
		color: colors.accentTextPrimary,
		cursor: 'pointer',
		':hover': {
			backgroundColor: colors.subtleFillSecondary,
		},
		':active': {
			backgroundColor: colors.subtleFillTertiary,
			color: colors.accentTertiary,
		},
		':disabled': {
			color: colors.accentTextDisabled,
		},
	},
});
