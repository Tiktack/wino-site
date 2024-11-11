import { Title } from "@solidjs/meta";
import { useLocation, type RouteSectionProps } from "@solidjs/router";
import { createMemo, For } from "solid-js";
import ListItem from "~/components/core/ListItem/ListItem";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";
import {
	ControlButtonIcon,
	ToggleLeftIcon,
	TextBulletListTreeIcon,
	TextCaseTitleIcon,
} from "solid-fluent-icons";

const routesConfig = [
	{
		name: "Button",
		path: "/components/buttons",
		icon: ControlButtonIcon,
	},
	{
		name: "ToggleSwitch",
		path: "/components/toggleswitches",
		icon: ToggleLeftIcon,
	},
	{
		name: "ListItem",
		path: "/components/listitems",
		icon: TextBulletListTreeIcon,
	},
	{
		name: "TextBlock",
		path: "/components/textblocks",
		icon: TextCaseTitleIcon,
	},
];

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
					<TextBlock variant="subtitle" style={{ "text-align": "left" }}>
						Components
					</TextBlock>
					<For each={routesConfig}>
						{(route) => (
							<ListItem selected={pathname() === route.path} href={route.path}>
								<route.icon />
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

