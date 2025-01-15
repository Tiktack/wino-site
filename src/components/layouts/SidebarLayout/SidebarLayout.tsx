import ChevronDown24Regular from '@fluentui/svg-icons/icons/chevron_down_24_regular.svg?raw';
import type { PolymorphicCallbackProps } from '@kobalte/core';
import type {
	CollapsibleTriggerOptions,
	CollapsibleTriggerRenderProps,
} from '@kobalte/core/collapsible';
import { A, useLocation } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import type { ComponentProps, JSX } from 'solid-js';
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

export const SidebarLayout = (props: SidebarLayoutProps) => {
	const location = useLocation();

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

			<div {...stylex.attrs(styles.content)}>{props.children}</div>
		</main>
	);
};

const styles = stylex.create({
	main: {
		display: 'flex',
		width: '100%',
		minHeight: '100vh',
	},
	sidebar: {
		display: 'flex',
		flexDirection: 'column',
		gap: '0.4rem',
		width: '300px',
		flexShrink: 0,
		padding: '1rem',
		borderRight: '1px solid var(--border-color)',
		'@media (max-width: 768px)': {
			display: 'none',
		},
	},
	content: {
		flex: '1 1 auto',
		minWidth: 0,
		maxWidth: 'calc(100% - 300px)', // Ensure it doesn't overflow when table of contents is hidden
		'@media (max-width: 768px)': {
			maxWidth: '100%',
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
