import type { RouteSectionProps } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';

export default function SupportLayout(props: RouteSectionProps) {
	return (
		<div {...stylex.attrs(styles.content)}>
			<div>{props.children}</div>
		</div>
	);
}

const styles = stylex.create({
	content: {
		maxWidth: '1000px',
		padding: '2rem',
		margin: '0 auto',
		display: 'flex',
		flexDirection: 'column',
	},
});
