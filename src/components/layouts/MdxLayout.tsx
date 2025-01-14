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
	import('~/components/layouts/TableOfContents').then((mod) => ({
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
		justifyContent: 'center',
		gap: '2rem',
		padding: '2rem',
		minHeight: '100vh',
		margin: '0 auto',
	},
	sidebar: {
		flex: '1 1 300px',
		minWidth: '200px',
		'@media (max-width: 1400px)': {
			flex: '1 1 250px',
		},
		'@media (max-width: 1200px)': {
			flex: '1 1 200px',
		},
		'@media (max-width: 1100px)': {
			display: 'none',
		},
	},
	content: {
		flex: '0 1 800px',
		minWidth: '0',
		'@media (max-width: 900px)': {
			flex: '1 1 auto',
			maxWidth: '800px',
		},
	},
	tableOfContents: {
		flex: '1 1 300px',
		position: 'relative',
		minWidth: '200px',
		'@media (max-width: 1400px)': {
			flex: '1 1 250px',
		},
		'@media (max-width: 1200px)': {
			flex: '1 1 200px',
		},
		'@media (max-width: 1100px)': {
			display: 'none',
		},
	},
});
