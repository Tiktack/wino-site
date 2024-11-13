import { Title } from "@solidjs/meta";
import { useLocation, type RouteSectionProps } from "@solidjs/router";
import { createMemo, For } from "solid-js";
import ListItem from "~/components/core/ListItem/ListItem";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";
import { TbBluetoothConnected, TbToggleLeft, TbList, TbTextCaption } from "solid-icons/tb";

const routesConfig = [
	{
		name: "Button",
		path: "/components/buttons",
		icon: TbBluetoothConnected,
	},
	{
		name: "ToggleSwitch",
		path: "/components/toggleswitches",
		icon: TbToggleLeft,
	},
	{
		name: "ListItem",
		path: "/components/listitems",
		icon: TbList,
	},
	{
		name: "TextBlock",
		path: "/components/textblocks",
		icon: TbTextCaption,
	},
	{
		name: "IconButton",
		path: "/components/iconbuttons",
		icon: TbTextCaption,
	},
	{
		name: "Collapsible",
		path: "/components/collapsibles",
		icon: TbTextCaption,
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

