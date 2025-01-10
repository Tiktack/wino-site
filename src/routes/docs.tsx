import type { RouteSectionProps } from '@solidjs/router';
import { clientOnly } from '@solidjs/start';
import * as stylex from '@stylexjs/stylex';
import { children } from 'solid-js';
import { SidebarLayout } from '~/components/layouts/SidebarLayout';

// TODO:
const TableOfContents = clientOnly(() =>
	import('~/shared/mdx/TableOfContents').then((mod) => ({
		default: mod.TableOfContents,
	})),
);

export default function DocsLayout(props: RouteSectionProps) {
	const resolved = children(() => props.children);

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
			<div {...stylex.attrs(styles.container)}>
				<div {...stylex.attrs(styles.content)}>{resolved()}</div>

				<TableOfContents childrenReturn={resolved} />
			</div>
		</SidebarLayout>
	);
}

const styles = stylex.create({
	container: {
		display: 'flex',
		width: '100%',
	},
	content: {
		padding: '2rem',
		margin: '0 auto',
		width: '100%',
		flexGrow: 1, // Add this to make it take full available width
		maxWidth: '100%', // Ensure it doesn't overflow
	},
});
