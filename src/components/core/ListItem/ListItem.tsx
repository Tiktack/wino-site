import type { PolymorphicProps } from '@kobalte/core';
import * as ButtonPrimitive from '@kobalte/core/button';
import { A } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import {
	type Component,
	type JSX,
	Show,
	type ValidComponent,
	children,
	splitProps,
} from 'solid-js';
import { FluentIcon } from '~/components/FluentIcon';
import { base, colors } from '~/shared/theme/tokens.stylex';
import type { WithStyleX } from '~/shared/theme/type';
import styles from './ListItem.module.css';

interface ListItemProps extends JSX.HTMLAttributes<HTMLElement> {
	selected?: boolean;
	disabled?: boolean;
	href?: string;
	class?: string;
	ref?: HTMLAnchorElement | HTMLLIElement;
	children?: JSX.Element;
	icon?: JSX.Element;
}

const ListItem: Component<ListItemProps> = (props) => {
	const [local, others] = splitProps(props, [
		'selected',
		'disabled',
		'href',
		'role',
		'class',
		'ref',
		'children',
		'icon',
	]);

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			(e.target as HTMLElement).click();
		}
	};

	const baseClass = () =>
		`${styles.listItem} ${local.class || ''} ${
			props.selected ? styles.selected : ''
		} ${local.disabled ? styles.disabled : ''}`;

	if (local.href && !local.disabled) {
		return (
			<A
				{...others}
				href={local.href}
				class={baseClass()}
				tabIndex={local.disabled ? -1 : 0}
				aria-selected={props.selected}
				onKeyDown={handleKeyDown}
			>
				{local.icon}
				{/* <TextBlock>{local.children}</TextBlock> */}
				{local.children}
			</A>
		);
	}

	return (
		<li
			{...others}
			class={baseClass()}
			tabIndex={local.disabled ? -1 : 0}
			aria-selected={props.selected}
			onKeyDown={handleKeyDown}
		>
			{local.icon}
			{/* <TextBlock>{local.children}</TextBlock> */}
			{local.children}
		</li>
	);
};

type ListItemNewProps<T extends ValidComponent = 'button'> =
	ButtonPrimitive.ButtonRootProps<T> & {
		children: JSX.Element;
		selected?: boolean;
		icon?: JSX.Element;
	};

export const ListItemNew = <T extends ValidComponent = 'button'>(
	props: WithStyleX<PolymorphicProps<T, ListItemNewProps<T>>>,
) => {
	const [local, others] = splitProps(props as WithStyleX<ListItemNewProps>, [
		'children',
		'icon',
		'selected',
		'disabled',
		'style',
	]);

	const resolvedIcon = children(() => local.icon);

	return (
		<ButtonPrimitive.Root
			{...others}
			{...stylex.attrs(
				stylesNew.base,
				local.selected && stylesNew.selected,
				local.disabled && stylesNew.disabled,
				local.style,
			)}
		>
			<Show when={resolvedIcon}>{resolvedIcon()}</Show>
			{local.children}
		</ButtonPrimitive.Root>
	);
};

const stylesNew = stylex.create({
	base: {
		gap: '1rem',
		display: 'flex',
		alignItems: 'center',
		inlineSize: 'calc(100% - 10px)',
		position: 'relative',
		boxSizing: 'border-box',
		flex: '0 0 auto',
		fontSize: base.bodyFontSize,
		paddingInline: '12px',
		outline: 'none',
		backgroundColor: colors.subtleFillTransparent,
		color: colors.textPrimary,
		textDecoration: 'none',
		cursor: 'default',
		userSelect: 'none',
		blockSize: '34px',
		border: 'none',
		borderRadius: base.controlCornerRadius,
		transition: 'var(--control-faster-duration) ease background',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
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
		},
	},
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
