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

const TraverseRoutes = (routes: Route[], location: string) => {
	return routes.reduce(
		(acc, route) => {
			return (
				<>
					{acc}
					{route.routes ? (
						<Collapsible>
							<CollapsibleTrigger
								{...stylex.attrs(routeStyles.collapsibleTrigger)}
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
									{...stylex.attrs(routeStyles.triggerIcon)}
								>
									<FluentIcon icon={ChevronDown24Regular} />
								</CollapsibleTriggerIcon>
							</CollapsibleTrigger>
							<CollapsibleContent
								{...stylex.attrs(routeStyles.collapsibleContent)}
							>
								{TraverseRoutes(route.routes, location)}
							</CollapsibleContent>
						</Collapsible>
					) : (
						<ListItem
							selected={location === route.path}
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
			);
		},
		// biome-ignore lint/complexity/noUselessFragments: <explanation>
		<></>,
	);
};

export const SidebarLayout = (props: SidebarLayoutProps) => {
	const location = useLocation();

	return (
		<main {...stylex.attrs(styles.main)}>
			<div {...stylex.attrs(styles.sidebar)}>
				{TraverseRoutes(props.routes, location.pathname)}
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
