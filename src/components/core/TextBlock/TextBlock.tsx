import * as stylex from '@stylexjs/stylex';
import { type Component, type JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { base, colors } from '~/shared/theme/tokens.stylex';
import type { WithStyleX } from '~/shared/theme/type';

type Variant =
	| 'caption'
	| 'body'
	| 'bodyStrong'
	| 'bodyLarge'
	| 'subtitle'
	| 'title'
	| 'titleLarge'
	| 'display';

interface TextBlockProps extends JSX.HTMLAttributes<HTMLElement> {
	variant?: Variant;
	tag?: keyof JSX.IntrinsicElements;
	ref?: HTMLElement;
}

const variantMap = {
	caption: { tag: 'span', name: 'caption' },
	body: { tag: 'span', name: 'body' },
	bodyStrong: { tag: 'h5', name: 'bodyStrong' },
	bodyLarge: { tag: 'h5', name: 'bodyLarge' },
	subtitle: { tag: 'h4', name: 'subtitle' },
	title: { tag: 'h3', name: 'title' },
	titleLarge: { tag: 'h2', name: 'titleLarge' },
	display: { tag: 'h1', name: 'display' },
} as const;

export const TextBlock: Component<WithStyleX<TextBlockProps>> = (props) => {
	const [local, other] = splitProps(props, ['style']);
	const variant = () => other.variant || 'body';
	const Tag = other.tag ?? variantMap[variant()].tag;

	return (
		<Dynamic
			component={Tag}
			{...stylex.attrs(
				styles.textBlock,
				styles[variantMap[variant()].name],
				local.style,
			)}
			{...other}
		>
			{other.children}
		</Dynamic>
	);
};

const styles = stylex.create({
	textBlock: {
		margin: 0,
		padding: 0,
		color: colors.textPrimary,
		fontFamily: base.fontFamilyText,
		display: 'inline-block',
		textDecoration: 'none',
	},
	caption: {
		fontSize: '0.75rem',
		lineHeight: 1.66,
	},
	body: {
		fontSize: base.bodyFontSize,
		// lineHeight: 1.5,
	},
	bodyStrong: {
		fontSize: base.bodyFontSize,
		// lineHeight: 1.5,
	},
	bodyLarge: {
		fontSize: base.bodyLargeFontSize,
		// lineHeight: 1.5,
	},
	subtitle: {
		fontSize: base.subtitleFontSize,
		// lineHeight: 1.5,
	},
	title: {
		fontSize: base.titleFontSize,
		// lineHeight: 1.5,
	},
	titleLarge: {
		fontSize: base.titleLargeFontSize,
		// lineHeight: 1.5,
	},
	display: {
		fontSize: base.displayFontSize,
		// lineHeight: 1.5,
	},
});
