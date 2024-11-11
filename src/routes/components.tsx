import { Title } from "@solidjs/meta";
import {
	useLocation,
	useParams,
	type RouteSectionProps,
} from "@solidjs/router";
import { createEffect, createMemo } from "solid-js";
import ListItem from "~/components/core/ListItem/ListItem";

export default function Components(props: RouteSectionProps) {
	const location = useLocation();

	const pathname = createMemo(() => location.pathname);
	return (
		<main style={{ display: "flex", width: "100%" }}>
			<Title>Components</Title>
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
					<ListItem
						selected={pathname() === "/components/buttons"}
						href="/components/buttons"
					>
						Button
					</ListItem>
					<ListItem
						selected={pathname() === "/components/toggleswitches"}
						href="/components/toggleswitches"
					>
						ToggleSwitch
					</ListItem>
				</div>
			</div>
			<div style={{ width: "70%", padding: "1rem" }}>{props.children}</div>
		</main>
	);
}

