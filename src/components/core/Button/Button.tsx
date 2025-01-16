import * as ButtonPrimitive from '@kobalte/core/button';
import type { PolymorphicProps } from '@kobalte/core/polymorphic';
import * as stylex from '@stylexjs/stylex';
import type { JSX, ValidComponent } from 'solid-js';
import { splitProps } from 'solid-js';
import {
	colors,
	cornerRadii,
	durations,
	fontSizes,
} from '~/shared/theme/tokens.stylex';
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
		fontSize: fontSizes.body,
		borderRadius: cornerRadii.control,
		transition: `${durations.faster} ease background`,
		':focus-visible': {
			boxShadow: colors.focusStroke,
		},
		':disabled': {
			pointerEvents: 'none',
		},
	},
	standard: {
		border: '1px solid',
		borderColor: 'var(--control-border-default)',
		backgroundColor: colors.controlFillDefault,
		color: colors.textPrimary,
		backgroundClip: 'padding-box',
		':hover': {
			backgroundColor: colors.controlFillSecondary,
		},
		':active': {
			borderColor: colors.controlStrokeDefault,
			backgroundColor: colors.controlFillTertiary,
			color: colors.textSecondary,
		},
		':disabled': {
			borderColor: colors.controlStrokeDefault,
			backgroundColor: colors.controlFillDisabled,
			color: colors.textDisabled,
		},
	},
	accent: {
		border: `1px solid ${colors.controlStrokeOnAccentDefault}`,
		borderBottomColor: colors.controlStrokeOnAccentSecondary,
		backgroundColor: colors.accentDefault,
		color: colors.textOnAccentPrimary,
		transition: `${durations.faster} ease border-color`,
		':hover': {
			backgroundColor: colors.accentSecondary,
		},
		':active': {
			borderColor: colors.controlStrokeOnAccentTertiary,
			backgroundColor: colors.accentTertiary,
			color: colors.textOnAccentSecondary,
		},
		':disabled': {
			borderColor: colors.controlStrokeOnAccentDefault,
			backgroundColor: colors.controlFillDisabled,
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
