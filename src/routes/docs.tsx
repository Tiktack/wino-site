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

					<div {...stylex.attrs(styles.tableOfContents)}>
						<TableOfContents childrenReturn={resolved} />
					</div>
				</div>
			</SidebarLayout>
		</main>
	);
}

const styles = stylex.create({
	container: {
		display: 'flex',
		width: '100%',
		gap: '2rem',
	},
	content: {
		flex: '1 1 auto',
		minWidth: 0,
		maxWidth: 'calc(100% - 300px)', // Account for table of contents
		// padding: '2rem',
		'@media (max-width: 1024px)': {
			maxWidth: '100%',
		},
	},
	tableOfContents: {
		width: '300px',
		padding: '2rem',
		flexShrink: 0,
		position: 'sticky',
		top: '5rem',
		height: 'fit-content',
		'@media (max-width: 1024px)': {
			display: 'none',
		},
	},
});
