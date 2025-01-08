import type { RouteSectionProps } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import mdxStyles from '~/shared/theme/mdx.module.css';
import { colors } from '~/shared/theme/tokens.stylex';

export default function SupportLayout(props: RouteSectionProps) {
	return (
		<div {...stylex.attrs(styles.content)}>
			<div class={mdxStyles.contentBase}>{props.children}</div>
		</div>
	);
}

const styles = stylex.create({
	content: {
		maxWidth: '1000px',
		padding: '2rem',
		color: colors.textPrimary,
		margin: '0 auto', // Centers horizontally
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center', // Centers content vertically
		':not(#__unused__) > a': {
			color: 'red',
		},
	},
});
