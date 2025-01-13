import type { PolymorphicProps } from '@kobalte/core';
import * as ButtonPrimitive from '@kobalte/core/button';
import * as stylex from '@stylexjs/stylex';
import {
	type JSX,
	Show,
	type ValidComponent,
	children,
	splitProps,
} from 'solid-js';
import { base, colors } from '~/shared/theme/tokens.stylex';
import type { WithStyleX } from '~/shared/theme/type';

type ListItemProps<T extends ValidComponent = 'button'> =
	ButtonPrimitive.ButtonRootProps<T> & {
		children?: JSX.Element;
		selected?: boolean;
		hierarchyLevel?: number;
		icon?: JSX.Element;
	};

export const ListItem = <T extends ValidComponent = 'button'>(
	props: WithStyleX<PolymorphicProps<T, ListItemProps<T>>>,
) => {
	const [local, others] = splitProps(props as WithStyleX<ListItemProps>, [
		'children',
		'hierarchyLevel',
		'icon',
		'selected',
		'disabled',
		'style',
	]);

	const hierarchyLevel =
		local.hierarchyLevel && local.hierarchyLevel > 0 ? local.hierarchyLevel : 0;

	const resolvedIcon = children(() => local.icon);

	return (
		<ButtonPrimitive.Root
			{...others}
			{...stylex.attrs(
				styles.base(hierarchyLevel),
				local.selected && styles.selected,
				local.disabled && styles.disabled,
				local.style,
			)}
		>
			<Show when={resolvedIcon}>{resolvedIcon()}</Show>
			{local.children}
		</ButtonPrimitive.Root>
	);
};

const styles = stylex.create({
	base: (level: number) => ({
		gap: '1rem',
		display: 'flex',
		alignItems: 'center',
		inlineSize: 'calc(100% - 10px)',
		position: 'relative',
		boxSizing: 'border-box',
		flex: '0 0 auto',
		fontSize: base.bodyFontSize,
		outline: 'none',
		backgroundColor: colors.subtleFillTransparent,
		color: colors.textPrimary,
		textDecoration: 'none',
		cursor: 'default',
		userSelect: 'none',
		blockSize: '34px',
		paddingInlineEnd: '12px',
		border: 'none',
		borderRadius: base.controlCornerRadius,
		transition: 'var(--control-faster-duration) ease background',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		paddingInlineStart: `${12 + (level) * 16}px`,
		':focus-visible': {
			boxShadow: 'var(--focus-stroke)',
		},
		borderColor: 'var(--control-border-default)',
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
		'::before': {
			content: '',
			position: 'absolute',
			borderRadius: '3px',
			backgroundColor: colors.accentDefault,
			transition:
				'transform var(--control-fast-duration) var(--control-fast-out-slow-in-easing)',
			opacity: '0',
			insetInlineStart: '0',
			inlineSize: '3px',
			blockSize: '16px',
			transform: 'scaleY(0)',
			marginLeft: `${level * 16}px`,
		},
	}),
	selected: {
		backgroundColor: colors.subtleFillSecondary,
		'::before': {
			transform: 'scaleY(1)',
			opacity: '1',
		},
	},
	disabled: {
		backgroundColor: colors.subtleFillTransparent,
		color: colors.textDisabled,
	},
});

export default ListItem;
