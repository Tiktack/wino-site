import ChevronDown24Regular from '@fluentui/svg-icons/icons/chevron_down_24_regular.svg?raw';
import type { PolymorphicCallbackProps } from '@kobalte/core';
import type {
	CollapsibleTriggerOptions,
	CollapsibleTriggerRenderProps,
} from '@kobalte/core/collapsible';
import { A, useLocation } from '@solidjs/router';
import { clientOnly } from '@solidjs/start';
import * as stylex from '@stylexjs/stylex';
import { type ComponentProps, type JSX, children } from 'solid-js';
import { FluentIcon } from '~/components/FluentIcon';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '~/components/core/Collapsible/Collapsible';
import ListItem from '~/components/core/ListItem/ListItem';

interface Route {
	name: string;
	path: string;
	icon?: string;
	routes?: Route[];
}

interface SidebarLayoutProps {
	children: JSX.Element;
	routes: Route[];
}

const TableOfContents = clientOnly(() =>
	import('~/components/layouts/TableOfContents').then((mod) => ({
		default: mod.TableOfContents,
	})),
);

export const SidebarLayout = (props: SidebarLayoutProps) => {
	const location = useLocation();
	const resolved = children(() => props.children);

	const traverseRoutes = (routes: Route[], level: number) => {
		return routes.reduce(
			(Tree, route) => (
				<>
					{Tree}
					{route.routes ? (
						<Collapsible defaultOpen={true}>
							<CollapsibleTrigger
								as={(
									props: PolymorphicCallbackProps<
										ComponentProps<typeof ListItem>,
										CollapsibleTriggerOptions,
										CollapsibleTriggerRenderProps
									>,
								) => (
									<ListItem
										{...props}
										hierarchyLevel={level}
										icon={route.icon && <FluentIcon icon={route.icon} />}
									>
										<span {...stylex.props(styles.triggerContent)}>
											{route.name}
											<FluentIcon
												icon={ChevronDown24Regular}
												style={
													props['aria-expanded']
														? styles.chevronExpanded
														: styles.chevron
												}
											/>
										</span>
									</ListItem>
								)}
							/>
							<CollapsibleContent>
								{traverseRoutes(route.routes, level + 1)}
							</CollapsibleContent>
						</Collapsible>
					) : (
						<ListItem
							selected={location.pathname === route.path}
							as={A}
							hierarchyLevel={level}
							icon={route.icon && <FluentIcon icon={route.icon} />}
							href={route.path}
						>
							{route.name}
						</ListItem>
					)}
				</>
			),
			// biome-ignore lint/complexity/noUselessFragments: <explanation>
			<></>,
		);
	};

	return (
		<main {...stylex.attrs(styles.main)}>
			<div {...stylex.attrs(styles.sidebar)}>
				{traverseRoutes(props.routes, 0)}
			</div>

			<div {...stylex.attrs(styles.content)}>{resolved()}</div>
			<div {...stylex.attrs(styles.tableOfContents)}>
				<TableOfContents childrenReturn={resolved} />
			</div>
		</main>
	);
};

const styles = stylex.create({
	main: {
		display: 'flex',
		width: '100%',
		height: '100%',
		minHeight: '100vh',
		maxWidth: '1600px', // Added to contain the total width
		margin: '0 auto', // Center the layout
	},
	sidebar: {
		display: 'flex',
		position: 'sticky',
		top: '5rem',
		flexDirection: 'column',
		gap: '0.4rem',
		width: '300px',
		flexShrink: 0, // Prevent sidebar from shrinking
		padding: '1rem',
		'@media (max-width: 768px)': {
			display: 'none',
		},
	},
	content: {
		flex: '1 1 auto',
		padding: '0 2rem',
		minWidth: 0,
		maxWidth: '1000px', // Set max width for content
		margin: '0 auto', // Center the content
		'@media (max-width: 768px)': {
			maxWidth: '100%',
			padding: '0 1rem',
		},
	},
	tableOfContents: {
		width: '300px',
		padding: '2rem',
		flexShrink: 0, // Prevent shrinking
		position: 'sticky',
		top: '5rem',
		height: 'fit-content',
		'@media (max-width: 1024px)': {
			display: 'none',
		},
	},
	triggerContent: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
	},
	chevron: {
		transition: 'transform 0.2s ease',
	},
	chevronExpanded: {
		transition: 'transform 0.2s ease',
		transform: 'rotate(180deg)',
	},
});
