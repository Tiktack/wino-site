import { Title } from '@solidjs/meta';
import type { RouteSectionProps } from '@solidjs/router';
import { clientOnly } from '@solidjs/start';
import * as stylex from '@stylexjs/stylex';
import { children } from 'solid-js';
import { SidebarLayout } from '~/components/layouts/SidebarLayout';
import { getDocRoutes } from '~/shared/lib/mdx';

// TODO:
const TableOfContents = clientOnly(() =>
	import('~/components/layouts/TableOfContents').then((mod) => ({
		default: mod.TableOfContents,
	})),
);

export default function DocsLayout(props: RouteSectionProps) {
	const docRoutes = getDocRoutes();
	const resolved = children(() => props.children);

	return (
		<main>
			<Title>Wino | Docs </Title>
			<SidebarLayout routes={docRoutes}>
				<div {...stylex.attrs(styles.container)}>
					<div {...stylex.attrs(styles.content)}>{resolved()}</div>

					<TableOfContents childrenReturn={resolved} />
				</div>
			</SidebarLayout>
		</main>
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
