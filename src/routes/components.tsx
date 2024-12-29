import type { RouteSectionProps } from "@solidjs/router";
import { TbBluetoothConnected, TbToggleLeft, TbList, TbTextCaption, TbProgress } from "solid-icons/tb";
import { SidebarLayout } from "~/components/layouts/SidebarLayout";

export default function ComponentsLayout(props: RouteSectionProps) {
	return (
		<SidebarLayout routes={[{
			name: "Button",
			path: "/components/buttons",
			Icon: TbBluetoothConnected,
			routes: [
				{
					name: "Primary Button",
					path: "/components/buttons/primary",
					routes: [
						{
							name: "Primary Button",
							path: "/components/buttons/primary",
						},
						{
							name: "Secondary Button",
							path: "/components/buttons/secondary",
						},
						{
							name: "Tertiary Button",
							path: "/components/buttons/tertiary",
						},
					]
				},
				{
					name: "Secondary Button",
					path: "/components/buttons/secondary",
				},
				{
					name: "Tertiary Button",
					path: "/components/buttons/tertiary",
				},
			]
		},
		{
			name: "Checkbox",
			path: "/components/checkboxes",
			Icon: TbBluetoothConnected,
		},
		{
			name: "ToggleSwitch",
			path: "/components/toggleswitches",
			Icon: TbToggleLeft,
		},
		{
			name: "ListItem",
			path: "/components/listitems",
			Icon: TbList,
			routes: [
				{
					name: "Primary Button",
					path: "/components/buttons/primary",
					routes: [
						{
							name: "Primary Button",
							path: "/components/buttons/primary",
						},
						{
							name: "Secondary Button",
							path: "/components/buttons/secondary",
						},
						{
							name: "Tertiary Button",
							path: "/components/buttons/tertiary",
						},
					]
				},
				{
					name: "Secondary Button",
					path: "/components/buttons/secondary",
				},
				{
					name: "Tertiary Button",
					path: "/components/buttons/tertiary",
				},
			]
		},
		{
			name: "TextBlock",
			path: "/components/textblocks",
			Icon: TbTextCaption,
		},
		{
			name: "IconButton",
			path: "/components/iconbuttons",
			Icon: TbTextCaption,
		},
		{
			name: "Collapsible",
			path: "/components/collapsibles",
			Icon: TbTextCaption,
		},
		{
			name: "ProgressBar",
			path: "/components/progressbars",
			Icon: TbProgress,
		},
		{
			name: "ProgressRing",
			path: "/components/progressrings",
			Icon: TbProgress,
		},
		{
			name: "ContentDialog",
			path: "/components/contentdialogs",
			Icon: TbTextCaption,
		}]}>
			{props.children}
		</SidebarLayout>
	);
}

