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
import ListItem, { ListItemNew } from '~/components/core/ListItem/ListItem';
import { base, colors } from '~/shared/theme/tokens.stylex';

interface Route {
	name: string;
	path: string;
	Icon?: string;
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
								// icon={
								// 	route.Icon && (
								// 		<FluentIcon
								// 			icon={route.Icon}
								// 			{...stylex.attrs(routeStyles.icon)}
								// 		/>
								// 	)
								// }
							>
								{route.name}
								<CollapsibleTriggerIcon style={routeStyles.triggerIcon}>
									<FluentIcon icon={ChevronDown24Regular} />
								</CollapsibleTriggerIcon>
							</ListItemNew>

							<CollapsibleContent style={routeStyles.collapsibleContent}>
								{traverseRoutes(route.routes)}
							</CollapsibleContent>
						</Collapsible>
					) : (
						<ListItemNew
							selected={location.pathname === route.path}
							as={A}
							// icon={
							// 	route.Icon ? (
							// 		<FluentIcon
							// 			icon={route.Icon}
							// 			{...stylex.attrs(routeStyles.icon)}
							// 		/>
							// 	) : undefined
							// }
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

const routeStyles = stylex.create({
	collapsibleTrigger: {
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		margin: '3px 5px',
		paddingInline: '12px',
		borderRadius: base.controlCornerRadius,
		backgroundColor: colors.subtleFillTransparent,
		border: '1px solid var(--control-stroke)',
		color: colors.textPrimary,
		textDecoration: 'none',
		cursor: 'default',
		userSelect: 'none',
		blockSize: '34px',
		':hover': {
			backgroundColor: colors.subtleFillSecondary,
		},
	},
	icon: {
		marginInlineEnd: '16px',
		fill: colors.textPrimary,
	},
	textSpan: {
		flexGrow: '1',
		textAlign: 'left',
	},
	triggerIcon: {
		marginInlineStart: '8px',
	},
	collapsibleContent: {
		marginLeft: '16px',
	},
});

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
});
