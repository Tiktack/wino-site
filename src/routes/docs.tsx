import type { RouteSectionProps } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import { SidebarLayout } from '~/components/layouts/SidebarLayout';
import { colors } from '~/shared/theme/tokens.stylex';

export default function DocsLayout(props: RouteSectionProps) {
	return (
		<SidebarLayout
			routes={[
				{
					name: 'Overview',
					path: '/docs/overview',
				},
				{
					name: 'Install',
					path: '/docs/install',
				},
			]}
		>
			<div {...stylex.attrs(styles.content)}>{props.children}</div>
		</SidebarLayout>
	);
}

const styles = stylex.create({
	content: {
		backgroundColor: colors.layerBackgroundDefault,
		padding: '2rem',
		margin: '0 auto',
		display: 'flex',
		flexDirection: 'column',
		borderTopLeftRadius: '0.75rem',
		height: '100vh',
	},
});
