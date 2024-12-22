import { useLocation } from "@solidjs/router";
import { For, type JSX } from "solid-js";
import ListItem from "~/components/core/ListItem/ListItem";
import type { IconTypes } from "solid-icons";

interface SidebarLayoutProps {
  children: JSX.Element;
  routes: Array<{
    name: string,
    path: string,
    Icon?: IconTypes,
  }>
}

export const SidebarLayout = (props: SidebarLayoutProps) => {
  const location = useLocation();

  return (
			<main class="flex w-full">
				<div class="flex flex-col gap-[0.1rem] w-[20%] p-4 border-r border-control-stroke">
					<For each={props.routes}>
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
				</div>

				<div class="w-[80%] p-4">{props.children}</div>
			</main>
		);
}

