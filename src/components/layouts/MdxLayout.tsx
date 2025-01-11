import { clientOnly } from '@solidjs/start';
import * as stylex from '@stylexjs/stylex';
import { type Component, type JSX, Match, Switch, children } from 'solid-js';

type MdxLayoutProps = {
	layout?: Component<{
		children: JSX.Element;
	}>;
	children: JSX.Element;
};

const TableOfContents = clientOnly(() =>
	import('~/shared/mdx/TableOfContents').then((mod) => ({
		default: mod.TableOfContents,
	})),
);

export default function MdxLayout(props: MdxLayoutProps) {
	const resolved = children(() => props.children);

	return (
		<div {...stylex.attrs(styles.container)}>
			<div {...stylex.attrs(styles.sidebar)} />
			<div {...stylex.attrs(styles.content)}>
				<Switch>
					<Match when={props.layout}>
						{props.layout && <props.layout>{resolved()} </props.layout>}
					</Match>
					<Match when={props.layout === undefined}>{resolved()}</Match>
				</Switch>
			</div>
			<div {...stylex.attrs(styles.tableOfContents)}>
				<TableOfContents childrenReturn={resolved} />
			</div>
		</div>
	);
}

const styles = stylex.create({
	container: {
		display: 'flex',
		// width: '100%',
		justifyContent: 'center',
		gap: '2rem',
		padding: '2rem',
		minHeight: '100vh',
	},
	sidebar: {
		flex: '1',
		'@media (max-width: 1200px)': {
			flex: '0.5',
		},
		'@media (max-width: 1000px)': {
			display: 'none',
		},
	},
	content: {
		flex: '0 0 800px',
		'@media (max-width: 1000px)': {
			flex: '1',
			maxWidth: '800px',
		},
	},
	tableOfContents: {
		flex: '1',
		// position: 'relative', // Add this line
		'@media (max-width: 1200px)': {
			flex: '0.5',
		},
		'@media (max-width: 1000px)': {
			display: 'none',
		},
	},
});
