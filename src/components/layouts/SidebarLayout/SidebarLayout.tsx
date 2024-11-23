import { useLocation } from "@solidjs/router";
import { For, type JSX } from "solid-js";
import ListItem from "~/components/core/ListItem/ListItem";
import styles from "./SidebarLayout.module.css";
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
    <main class={styles.container}>
      <div class={styles.sidebar}>
        <For each={props.routes}>
          {(route) => (
            <ListItem selected={location.pathname === route.path} href={route.path}>
              {route.Icon && <route.Icon />}
              {route.name}
            </ListItem>
          )}
        </For>
      </div>

      <div class={styles.content}>{props.children}</div>
    </main>
  );
}

