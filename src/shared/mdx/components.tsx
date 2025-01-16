import * as stylex from '@stylexjs/stylex';
import type { Component, JSX } from 'solid-js';
import { resolvePath } from '~/shared/lib/resolvePath';
import {
	colors,
	cornerRadii,
	durations,
	fontFamilies,
	fontSizes,
} from '~/shared/theme/tokens.stylex';

export const components = {
	img: (props: JSX.ImgHTMLAttributes<HTMLImageElement>) => (
		<img
			{...stylex.attrs(styles.base, styles.img)}
			{...props}
			src={resolvePath(props.src ?? '')}
		/>
	),
	a: (props) => <a {...stylex.attrs(styles.base, styles.a)} {...props} />,
	h1: (props) => <h1 {...stylex.attrs(styles.base, styles.h1)} {...props} />,
	h2: (props) => <h2 {...stylex.attrs(styles.base, styles.h2)} {...props} />,
	h3: (props) => <h3 {...stylex.attrs(styles.base, styles.h3)} {...props} />,
	p: (props) => <p {...stylex.attrs(styles.base, styles.p)} {...props} />,
	ul: (props) => <ul {...stylex.attrs(styles.base, styles.ulOl)} {...props} />,
	ol: (props) => <ol {...stylex.attrs(styles.base, styles.ulOl)} {...props} />,
	li: (props) => <li {...stylex.attrs(styles.base, styles.li)} {...props} />,
} satisfies Partial<
	Record<
		keyof HTMLElementTagNameMap,
		Component<{
			children: JSX.Element;
		}>
	>
>;

const styles = stylex.create({
	base: {
		fontFamily: fontFamilies.text,
		lineHeight: 1.6,
		color: colors.textPrimary,
	},
	h1: {
		fontSize: fontSizes.titleLarge,
		marginBlock: '2rem 1rem',
		fontFamily: fontFamilies.display,
	},
	h2: {
		fontSize: fontSizes.title,
		marginBlock: '1.5rem 1rem',
		fontFamily: fontFamilies.display,
	},
	h3: {
		fontSize: fontSizes.subtitle,
		marginBlock: '1.25rem 0.75rem',
	},
	p: {
		fontSize: fontSizes.body,
		margin: 0,
	},
	ulOl: {
		paddingLeft: '1.5rem',
		marginBlock: '1rem',
	},
	li: {
		marginBlock: '0.1rem',
	},
	a: {
		backgroundColor: colors.subtleFillTransparent,
		textDecoration: 'none',
		color: colors.accentTextPrimary,
		borderRadius: cornerRadii.control,
		transition: `${durations.faster} ease background`,
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
	img: {
		maxWidth: '100%',
		height: 'auto',
		borderRadius: cornerRadii.overlay,
		display: 'block',
		marginBlock: '1rem',
	},
});
