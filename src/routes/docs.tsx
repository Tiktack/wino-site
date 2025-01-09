import type { RouteSectionProps } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import { SidebarLayout } from '~/components/layouts/SidebarLayout';
import { colors } from '~/shared/theme/tokens.stylex';

export default function DocsLayout(props: RouteSectionProps) {
	return (
		<SidebarLayout
			routes={[
				// {
				// 	name: 'Overview',
				// 	path: '/docs/overview',
				// },
				// {
				// 	name: 'Install',
				// 	path: '/docs/install',
				// },
				{
					name: 'Comming Soon',
					path: '/docs/comming-soon',
				},
			]}
		>
			<div {...stylex.attrs(styles.content)}>{props.children}</div>
		</SidebarLayout>
	);
}

const styles = stylex.create({
	content: {
		// backgroundColor: colors.layerBackgroundDefault,
		padding: '2rem',
		margin: '0 auto',
		width: '100%',
		display: 'flex',
		height: '100vh',
		flexGrow: 1, // Add this to make it take full available width
		maxWidth: '100%', // Ensure it doesn't overflow
	},
});
