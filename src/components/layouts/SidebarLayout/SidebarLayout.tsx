import { useLocation } from "@solidjs/router";
import type { JSX } from "solid-js";
import ListItem from "~/components/core/ListItem/ListItem";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, CollapsibleTriggerIcon } from "~/components/core/Collapsible/Collapsible";
import ChevronDown24Regular from "@fluentui/svg-icons/icons/chevron_down_24_regular.svg?raw";
import FluentIcon from "~/components/FluentIcon";

interface Route {
	name: string;
	path: string,
	Icon?: string,
	routes?: Route[]
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
								style={{
									display: "flex",
									"align-items": "center",
									width: "100%",
									position: "relative",
									flex: "0 0 auto",
									margin: "3px 5px",
									"padding-inline": "12px",
									"border-radius": "var(--control-corner-radius)",
									"background-color": "var(--subtle-fill-transparent)",
									"border": "1px solid var(--control-stroke)",
									color: "var(--text-primary)",
									"text-decoration": "none",
									cursor: "default",
									"user-select": "none",
									"block-size": "34px",
								}}
							>
								{route.Icon && (
									<FluentIcon icon={route.Icon} style={{ "margin-inline-end": "16px" }} />
								)}
								<span style={{ "flex-grow": "1" }}>{route.name}</span>
								<CollapsibleTriggerIcon style={{ "margin-inline-start": "8px" }}>
									<FluentIcon icon={ChevronDown24Regular} />
								</CollapsibleTriggerIcon>
							</CollapsibleTrigger>
							<CollapsibleContent style={{ "margin-left": "16px" }}>
								{TraverseRoutes(route.routes, location)}
							</CollapsibleContent>
						</Collapsible>
					) : (
						<ListItem
							selected={location === route.path}
							icon={route.Icon ? <FluentIcon icon={route.Icon} style={{ "margin-inline-end": "16px" }} /> : undefined}
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
			<main style={{ display: "flex", width: "100%" }}>
				<div
					style={{
						display: "flex",
						"flex-direction": "column",
						gap: "0.1rem",
						width: "20%",
						padding: "1rem",
						"border-right": "1px solid var(--control-stroke)",
					}}
				>
					{TraverseRoutes(props.routes, location.pathname)}
				</div>

				<div style={{ width: "80%", padding: "1rem" }}>{props.children}</div>
			</main>
		);
}

