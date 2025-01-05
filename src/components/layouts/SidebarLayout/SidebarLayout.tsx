import { useLocation } from "@solidjs/router";
import type { JSX } from "solid-js";
import ListItem from "~/components/core/ListItem/ListItem";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	CollapsibleTriggerIcon,
} from "~/components/core/Collapsible/Collapsible";
import ChevronDown24Regular from "@fluentui/svg-icons/icons/chevron_down_24_regular.svg?raw";
import { FluentIcon } from "~/components/FluentIcon";
import * as stylex from "@stylexjs/stylex";
import { colors } from "~/shared/theme/tokens.stylex";

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
							<CollapsibleTrigger
								style={routeStyles.collapsibleTrigger}
							>
								{route.Icon && (
									<FluentIcon
										icon={route.Icon}
										{...stylex.attrs(routeStyles.icon)}
									/>
								)}
								<span {...stylex.attrs(routeStyles.textSpan)}>
									{route.name}
								</span>
								<CollapsibleTriggerIcon
									style={routeStyles.triggerIcon}
								>
									<FluentIcon icon={ChevronDown24Regular} />
								</CollapsibleTriggerIcon>
							</CollapsibleTrigger>
							
							<CollapsibleContent
								style={routeStyles.collapsibleContent}
							>
								{traverseRoutes(route.routes)}
							</CollapsibleContent>
						</Collapsible>
					) : (
						<ListItem
							selected={location.pathname === route.path}
							icon={
								route.Icon ? (
									<FluentIcon
										icon={route.Icon}
										{...stylex.attrs(routeStyles.icon)}
									/>
								) : undefined
							}
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
				{traverseRoutes(props.routes)}
			</div>

			<div {...stylex.attrs(styles.content)}>{props.children}</div>
		</main>
	);
};

const routeStyles = stylex.create({
	collapsibleTrigger: {
		display: "flex",
		alignItems: "center",
		width: "100%",
		position: "relative",
		flex: "0 0 auto",
		margin: "3px 5px",
		paddingInline: "12px",
		borderRadius: "var(--control-corner-radius)",
		backgroundColor: "var(--subtle-fill-transparent)",
		border: "1px solid var(--control-stroke)",
		color: colors.textPrimary,
		textDecoration: "none",
		cursor: "default",
		userSelect: "none",
		blockSize: "34px",
		":hover": {
			backgroundColor: "var(--subtle-fill-secondary)",
		},
	},
	icon: {
		marginInlineEnd: "16px",
		fill: colors.textPrimary,
	},
	textSpan: {
		flexGrow: "1",
		textAlign: "left",
	},
	triggerIcon: {
		marginInlineStart: "8px",
	},
	collapsibleContent: {
		marginLeft: "16px",
	},
});

const styles = stylex.create({
	main: {
		display: "flex",
		width: "100%",
	},
	sidebar: {
		display: "flex",
		flexDirection: "column",
		gap: "0.1rem",
		width: "20%",
		padding: "1rem",
		borderRight: "1px solid var(--control-stroke)",
	},
	content: {
		width: "80%",
		padding: "1rem",
	},
});
