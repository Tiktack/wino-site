import ChevronDown24Regular from '@fluentui/svg-icons/icons/chevron_down_24_regular.svg?raw';
import { A, useLocation } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import type { JSX } from 'solid-js';
import { FluentIcon } from '~/components/FluentIcon';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	CollapsibleTriggerIcon,
} from '~/components/core/Collapsible/Collapsible';
import { ListItemNew } from '~/components/core/ListItem/ListItem';

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

	const traverseRoutes = (routes: Route[]) => {
		return routes.reduce(
			(Acc, route) => (
				<>
					{Acc}
					{route.routes ? (
						<Collapsible>
							<ListItemNew
								as={CollapsibleTrigger}
								// icon={route.Icon && <FluentIcon icon={route.Icon} />}
							>
								{route.name}
								<CollapsibleTriggerIcon style={styles.triggerIcon}>
									<FluentIcon icon={ChevronDown24Regular} />
								</CollapsibleTriggerIcon>
							</ListItemNew>

							<CollapsibleContent style={styles.collapsibleContent}>
								{traverseRoutes(route.routes)}
							</CollapsibleContent>
						</Collapsible>
					) : (
						<ListItemNew
							selected={location.pathname === route.path}
							as={A}
							// icon={route.Icon && <FluentIcon icon={route.Icon} />}
							href={route.path}
						>
							{route.name}
						</ListItemNew>
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
				{traverseRoutes(props.routes)}
			</div>

			<div {...stylex.attrs(styles.content)}>{props.children}</div>
		</main>
	);
};

const styles = stylex.create({
	main: {
		display: 'flex',
		width: '100%',
	},
	sidebar: {
		display: 'flex',
		flexDirection: 'column',
		gap: '0.4rem',
		width: '20%',
		padding: '1rem',
	},
	content: {
		width: '80%',
		padding: '1rem',
	},
	collapsibleContent: {
		marginLeft: '16px',
	},
	triggerIcon: {
		marginInlineStart: '8px',
	},
});
