import type { PolymorphicProps } from '@kobalte/core';
import * as CollapsiblePrimitive from '@kobalte/core/collapsible';
import * as stylex from '@stylexjs/stylex';
import {
	type ComponentProps,
	type JSX,
	type ValidComponent,
	splitProps,
} from 'solid-js';
import type { WithStyleX } from '~/shared/theme/type';

const Collapsible = CollapsiblePrimitive.Root;

type CollapsibleTriggerProps<T extends ValidComponent = 'div'> =
	CollapsiblePrimitive.CollapsibleTriggerProps<T> & {
		children: JSX.Element;
	};

const CollapsibleTrigger = <T extends ValidComponent = 'div'>(
	props: WithStyleX<PolymorphicProps<T, CollapsibleTriggerProps<T>>>,
) => {
	const [local, others] = splitProps(
		props as WithStyleX<CollapsibleTriggerProps>,
		['style'],
	);
	return (
		<CollapsiblePrimitive.Trigger
			{...stylex.attrs(styles.trigger, local.style)}
			{...others}
		/>
	);
};

type CollapsibleTriggerIconProps = WithStyleX<ComponentProps<'div'>>;

const CollapsibleTriggerIcon = (props: CollapsibleTriggerIconProps) => {
	const [local, others] = splitProps(props, ['style']);
	return <div {...stylex.attrs(styles.triggerIcon, local.style)} {...others} />;
};

type CollapsibleContentProps<T extends ValidComponent = 'div'> =
	CollapsiblePrimitive.CollapsibleContentProps<T> & {
		children: JSX.Element;
	};

const CollapsibleContent = <T extends ValidComponent = 'div'>(
	props: WithStyleX<PolymorphicProps<T, CollapsibleContentProps<T>>>,
) => {
	const [local, others] = splitProps(
		props as WithStyleX<CollapsibleContentProps>,
		['style'],
	);
	return (
		<CollapsiblePrimitive.Content
			{...stylex.attrs(styles.triggerContent, local.style)}
			{...others}
		/>
	);
};

const slideUp = stylex.keyframes({
	'0%': { height: 'var(--kb-collapsible-content-height)' },
	'100%': { height: 0 },
});

const slideDown = stylex.keyframes({
	'0%': { height: 0 },
	'100%': { height: 'var(--kb-collapsible-content-height)' },
});

const styles = stylex.create({
	trigger: {
		display: 'inline-flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	triggerContent: {
		overflow: 'hidden',
		animationName: slideUp,
		animationDuration: '300ms',
		animationTimingFunction: 'ease-out',
		':is([data-expanded])': {
			animationName: slideDown,
		},
	},
	triggerIcon: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export {
	Collapsible,
	CollapsibleTrigger,
	CollapsibleTriggerIcon,
	CollapsibleContent,
};
