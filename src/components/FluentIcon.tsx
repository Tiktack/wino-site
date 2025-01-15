import * as stylex from '@stylexjs/stylex';
import { type JSX, splitProps } from 'solid-js';
import { colors } from '~/shared/theme/tokens.stylex';
import type { WithStyleX } from '~/shared/theme/type';

interface FluentIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
	icon: string;
}

export const FluentIcon = (props: WithStyleX<FluentIconProps>) => {
	const [local, others] = splitProps(props, ['icon', 'style']);

	return (
		<div
			{...stylex.attrs(styles.icon, local.style)}
			{...others}
			innerHTML={local.icon}
		/>
	);
};

const styles = stylex.create({
	icon: {
		width: '1.1rem',
		height: '1.1rem',
		fill: colors.textPrimary,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
