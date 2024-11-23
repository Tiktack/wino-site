import { Title } from "@solidjs/meta";
import { useLocation, type RouteSectionProps } from "@solidjs/router";
import { createMemo, For } from "solid-js";
import ListItem from "~/components/core/ListItem/ListItem";

const routesConfig = [
  {
    name: "Overview",
    path: "/docs/overview",
  },
  {
    name: "Install",
    path: "/docs/install",
  },
] as const;

export default function Docs(props: RouteSectionProps) {
  const location = useLocation();

  const pathname = createMemo(() => location.pathname);

  return (
    <main style={{ display: "flex", width: "100%" }}>
      <Title>Wino Mail | Docs</Title>

      <div
        style={{
          width: "20%",
          padding: "1rem",
          "border-right": "1px solid #ccc",
        }}
      >
        <div
          style={{ display: "flex", "flex-direction": "column", gap: "0.1rem" }}
        >
          <For each={routesConfig}>
            {(route) => (
              <ListItem selected={pathname() === route.path} href={route.path}>
                {route.name}
              </ListItem>
            )}
          </For>
        </div>
      </div>

      <div style={{ width: "70%", padding: "1rem" }}>{props.children}</div>
    </main>
  );
}

