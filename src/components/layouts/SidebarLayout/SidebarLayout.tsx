import { useLocation } from "@solidjs/router";
import { For, type JSX } from "solid-js";
import ListItem from "~/components/core/ListItem/ListItem";
import type { IconTypes } from "solid-icons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, CollapsibleTriggerIcon } from "~/components/core/Collapsible/Collapsible";
import { FaSolidChevronDown } from "solid-icons/fa";

interface Route {
	name: string;
	path: string,
	Icon?: IconTypes,
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
						// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
						<Collapsible class={"ml-4"}>
							<CollapsibleTrigger>
								{route.name}
								<CollapsibleTriggerIcon>
									<FaSolidChevronDown />
								</CollapsibleTriggerIcon>
							</CollapsibleTrigger>
							<CollapsibleContent>
								{TraverseRoutes(route.routes, location)}
							</CollapsibleContent>
						</Collapsible>
					) : (
						// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
						<ListItem
							selected={location === route.path}
							icon={route.Icon ? <route.Icon /> : undefined}
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
			<main class="flex w-full">
				<div class="flex flex-col gap-[0.1rem] w-[20%] p-4 border-r border-control-stroke">
					{TraverseRoutes(props.routes, location.pathname)}

					{/* <For each={props.routes}>
						{(route) => (
							<ListItem
								selected={location.pathname === route.path}
								href={route.path}
							>
								{route.Icon && <route.Icon />}
								{route.name}
							</ListItem>
						)}
					</For>
					<ListItem href="/components/buttons">TopLevel1</ListItem>
					<ListItem href="/components/buttons">TopLevel2</ListItem>
					<ListItem href="/components/buttons">
						<ListItem>NestedLevel3</ListItem>
					</ListItem> */}
				</div>

				<div class="w-[80%] p-4">{props.children}</div>
			</main>
		);
}

